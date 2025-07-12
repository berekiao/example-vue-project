<template>
    <div class="container-fluid">
        <!-- Modale pour ajout/modification -->
        <div class="modal fade" id="postModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="sousLabel">Quartier</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="nom" class="form-label">Nom</label>
                                        <input type="text" class="form-control" v-model="form.nom" id="nom"
                                            placeholder="Nom du quartier">
                                    </div>
                                    <div class="mb-3">
                                        <label for="ville" class="form-label">Ville</label>
                                        <select class="form-control" v-model="form.ville" id="ville">
                                            <option value="">Sélectionner une ville</option>
                                            <option v-for="ville in villesList" :key="ville.id" :value="ville">
                                                {{ ville.nom }} 
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i class="bi-x"></i>
                                Fermer</button>
                            <button type="button" class="btn btn-primary ms-2" @click="addQuartier" :disabled="loading">
                                <i class="bi-check"></i> {{ form.id ? 'Modifier' : 'Ajouter' }}
                                <span v-if="loading" class="spinner-border spinner-border-sm ms-2"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modale pour afficher les détails du quartier -->
        <div class="modal fade" id="quartierDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="quartierDetailsLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="quartierDetailsLabel">Détails du Quartier</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Nom</label>
                                    <p>{{ selectedQuartier?.nom || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Ville</label>
                                    <p>{{ selectedQuartier?.ville?.nom || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Zone</label>
                                    <p>{{ selectedQuartier?.ville?.zone?.destination || 'Non renseigné' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i class="bi-x"></i> Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Quartiers</h1>
            <a @click="openModal" href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouveau Quartier</a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-4">
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" v-model="filterNom" class="form-control" id="filterNom" placeholder="Rechercher un nom">
                    </div>
                    <div class="col-md-4">
                        <label for="filterVille" class="form-label">Ville</label>
                        <select class="form-control" v-model="filterVilleId" id="filterVille">
                            <option value="">Toutes les villes</option>
                            <option v-for="ville in villesList" :key="ville.id" :value="ville.id">
                                {{ ville.nom }} 
                            </option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button type="button" @click="onSearch" class="btn btn-primary w-100">Filtrer</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" @click="resetFilters" class="btn btn-secondary w-100">Réinitialiser</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Liste des Quartiers</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nom</th>
                                <th>Ville</th>
                                <th>Zone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filterItems" :key="index">
                                <td> {{ index + 1 }}</td>
                                <td>{{ item?.nom }}</td>
                                <td>{{ item?.ville?.nom }}</td>
                                <td>{{ item?.ville?.zone?.destination }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary" @click="updateQuartier(item)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger" @click="deleteQuartier(item.id)">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                        <button type="button" class="btn btn-info" @click="showDetails(item)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <PaginationNew :currentPage="items.number + 1" :totalPages="items.totalPages"
                            :totalItems="items.totalElements || 0" :onPageChange="onSearch" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ElNotification } from "element-plus";
import Swal from 'sweetalert2'
import PaginationNew from "../../components/PaginationNew.vue";

export default {
    components: {
        PaginationNew
    },
    name: 'quartiers',
    data: () => ({
        form: {
            nom: "",
            ville: ""
        },
        loading: false,
        modalInstance: null,
        filterNom: "",
        filterVilleId: "",
        selectedQuartier: null,
        villesList: []
    }),
    computed: {
        ...mapGetters({ items: 'quartiers/all' }),
        filterItems() {
            return this.items.content;
        }
    },
    methods: {
        async fetchVilles() {
            // Récupère la liste des villes pour le select
            const res = await this.$store.dispatch('villes/getAllP', { page: 0, size: 100 });
            this.villesList = res.content || [];
        },
        showDetails(item) {
            this.selectedQuartier = item;
            document.body.appendChild(document.getElementById('quartierDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('quartierDetailsModal'));
            modal.show();
        },
        resetForm() {
            this.form = {
                nom: "",
                ville: ""
            };
            this.openModal();
        },
        openModal() {
            document.body.appendChild(document.getElementById('postModal'));
            const modal = new bootstrap.Modal(document.getElementById('postModal'));
            modal.show();
        },
        closeModal() {
            const modalElement = document.getElementById('postModal');
            const hiddenHandler = () => {
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.style.display = 'none';
                }
            };
            modalElement.addEventListener('hidden.bs.modal', hiddenHandler);
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
        },
        resetFilters() {
            this.filterNom = "";
            this.filterVilleId = "";
            this.onSearch();
        },
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,desc",
                nom: this.filterNom,
                villeId: this.filterVilleId
            };
            this.$store.dispatch('quartiers/getAllP', params)
                .then((response) => {
                });
        },
        async addQuartier() {
            if (!this.form.nom || !this.form.ville) {
                ElNotification({
                    title: 'Erreur',
                    message: 'Veuillez remplir tous les champs obligatoires.',
                    type: 'error',
                    duration: 3000
                });
                return;
            }
            this.loading = true;
            try {
                await this.$store.dispatch('quartiers/create', this.form);
                ElNotification({
                    title: 'Succès',
                    message: this.form.id ? 'Modification effectuée avec succès.' : 'Ajout effectué avec succès.',
                    type: 'success',
                    duration: 3000
                });
                this.closeModal();
                this.onSearch();
                this.resetForm();
            } catch (error) {
                console.error('Erreur lors de l\'ajout/modification du quartier:', error);
                ElNotification({
                    title: 'Erreur',
                    message: 'Une erreur est survenue lors de l\'opération.',
                    type: 'error',
                    duration: 3000
                });
            } finally {
                this.loading = false;
            }
        },
        async deleteQuartier(quartierId) {
            const result = await Swal.fire({
                title: 'Êtes-vous sûr ?',
                text: "Cette action est irréversible !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer',
                cancelButtonText: 'Annuler'
            });
            if (result.isConfirmed) {
                try {
                    await this.$store.dispatch('quartiers/del', quartierId);
                    ElNotification({
                        title: 'Succès',
                        message: 'Suppression effectuée avec succès.',
                        type: 'success',
                        duration: 3000
                    });
                    this.onSearch();
                } catch (error) {
                    console.error('Erreur lors de la suppression :', error);
                    ElNotification({
                        title: 'Erreur',
                        message: 'Impossible de supprimer.',
                        type: 'error'
                    });
                }
            }
        },
        updateQuartier(quartier) {
            this.form = {
                id: quartier.id,
                nom: quartier.nom,
                ville: quartier.ville || ""
            };
            this.openModal();
        }
    },
    created() {
        this.onSearch();
        this.fetchVilles();
    }
}
</script> 