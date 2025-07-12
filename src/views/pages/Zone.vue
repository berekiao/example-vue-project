<template>
    <div class="container-fluid">

        <!-- Modale pour ajout/modification -->
        <div class="modal fade" id="postModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="sousLabel">Zone</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="destination" class="form-label">Destination</label>
                                        <input type="text" class="form-control" v-model="form.destination" id="destination"
                                            placeholder="Destination de la zone">
                                    </div>
                                    <div class="mb-3">
                                        <label for="depart" class="form-label">Départ</label>
                                        <input type="text" class="form-control" v-model="form.depart" id="depart"
                                            placeholder="Départ de la zone">
                                    </div>
                                    <div class="mb-3">
                                        <label for="tarif" class="form-label">Tarif</label>
                                        <input type="number" class="form-control" v-model="form.tarif" id="tarif"
                                            placeholder="Tarif de la zone">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i class="bi-x"></i>
                                Fermer</button>
                            <button type="button" class="btn btn-primary ms-2" @click="addZone" :disabled="loading">
                                <i class="bi-check"></i> {{ form.id ? 'Modifier' : 'Ajouter' }}
                                <span v-if="loading" class="spinner-border spinner-border-sm ms-2"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modale pour afficher les détails de la zone -->
        <div class="modal fade" id="zoneDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="zoneDetailsLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="zoneDetailsLabel">Détails de la Zone</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Nom</label>
                                    <p>{{ selectedZone?.destination || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Tarif</label>
                                    <p>{{ selectedZone?.tarif ? selectedZone.tarif + ' FCFA' : 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Départ</label>
                                    <p>{{ selectedZone?.depart || 'Non renseigné' }}</p>
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
            <h1 class="h3 mb-0 text-gray-800">Zones</h1>
            <a @click="openModal" href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouvelle Zone</a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-4">
                        <label for="filterDestination" class="form-label">Destination</label>
                        <input type="text" v-model="filterDestination" class="form-control" id="filterDestination" placeholder="Rechercher une destination">
                    </div>
                    <div class="col-md-4">
                        <label for="filterDepart" class="form-label">Départ</label>
                        <input type="text" v-model="filterDepart" class="form-control" id="filterDepart" placeholder="Rechercher un départ">
                    </div>
                    <div class="col-md-4">
                        <label for="filterTarif" class="form-label">Tarif</label>
                        <input type="number" v-model="filterTarif" class="form-control" id="filterTarif" placeholder="Rechercher un tarif">
                    </div>
                    <div class="col-md-2">
                        <button type="button" @click="onSearch" class="btn btn-primary w-100">Filtrer</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Liste des Zones</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Départ</th>
                                <th>Destination</th>
                                <th>Tarif</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filterItems" :key="index">
                                <td> {{ index + 1 }}</td>
                                <td>{{ item?.depart }}</td>
                                <td>{{ item?.destination }}</td>
                                <td>{{ item?.tarif }} FCFA</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary" @click="updateZone(item)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                                            <button type="button" class="btn btn-danger" @click="deleteZone(item.id)" v-if="isSuperAdmin">
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
import { mapActions, mapGetters } from "vuex";
import { ElMessage, ElNotification } from "element-plus";
import Swal from 'sweetalert2'
import PaginationNew from "../../components/PaginationNew.vue";

export default {
    components: {
        PaginationNew
    },
    name: 'zones',
    props: {
        msg: String
    },
    data: () => ({
        form: {
            destination: "",
            depart: "",
            tarif: null
        },
        loading: false,
        modalInstance: null,
        filterDestination: "",
        filterDepart: "",
        filterTarif: "",
        selectedZone: null
    }),
    computed: {
        ...mapGetters({ items: 'zones/all' }),
        filterItems() {
            return this.items.content;
        },
        user() {
            return JSON.parse(localStorage.getItem('userConnected'));
        },
        isSuperAdmin() {
            return this.user?.role?.nomRole === "SUPERADMIN";
        }
    },
    methods: {
        showDetails(item) {
            this.selectedZone = item;
            document.body.appendChild(document.getElementById('zoneDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('zoneDetailsModal'));
            modal.show();
        },
        resetForm() {
            this.form = {
                destination: "",
                depart: "",
                tarif: null
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
            this.filterDestination = "";
            this.filterDepart = "";
            this.filterTarif = "";
            this.onSearch();
        },
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,asc",
                destination: this.filterDestination,
                depart: this.filterDepart,
                tarif: this.filterTarif
            };
            this.$store.dispatch('zones/getAllP', params)
                .then((response) => {
                });
        },
        async addZone() {
            if (!this.form.destination || !this.form.depart || !this.form.tarif) {
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
                await this.$store.dispatch('zones/create', this.form);
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
                console.error('Erreur lors de l\'ajout/modification de la zone:', error);
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
        async deleteZone(zoneId) {
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
                    await this.$store.dispatch('zones/del', zoneId);
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
        updateZone(zone) {
            this.form = { ...zone };
            this.openModal();
        }
    },
    created() {
        this.onSearch();
    }
}
</script> 