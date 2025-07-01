<template>
    <div class="container-fluid">

        <div class="modal fade" id="postModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="sousLabel">Client</h5>
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
                                            placeholder="Nom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact" class="form-label">Prénoms</label>
                                        <input type="text" class="form-control" id="contact" placeholder="Prénom"
                                            v-model="form.prenom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="structure" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="structure" placeholder="Téléphone"
                                            v-model="form.telephone">
                                    </div>
                                    <div class="mb-3">
                                        <label for="structure" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="structure" placeholder="Email"
                                            v-model="form.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="structure" class="form-label">Société</label>
                                        <input type="text" class="form-control" id="structure" placeholder="Société"
                                            v-model="form.societe">
                                    </div>
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" v-model="form.statut" id="statut">
                                            <option value="ACTIF">Actif</option>
                                            <option value="INACTIF">Inactif</option>
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
                            <button type="button" class="btn btn-primary ms-2" @click="addClient" :disabled="loading">
                                <i class="bi-check"></i> Ajouter
                                <span v-if="loading" class="spinner-border spinner-border-sm ms-2"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Clients</h1>
            <a @click="openModal" href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouveau Client</a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-3">
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" v-model="filterNom" class="form-control" id="filterNom" placeholder="Rechercher un nom">
                    </div>
                    <div class="col-md-3">
                        <label for="filterNom" class="form-label">Prénom</label>
                        <input type="text" v-model="filterPrenom" class="form-control" id="filterNom" placeholder="Rechercher un nom">
                    </div>
                    <div class="col-md-3">
                        <label for="filterNom" class="form-label">Email</label>
                        <input type="text" v-model="filterEmail" class="form-control" id="filterNom" placeholder="Rechercher un nom">
                    </div>
                    <div class="col-md-3">
                        <label for="filterContact" class="form-label">Contact</label>
                        <input type="text" v-model="filterContact" class="form-control" id="filterContact" placeholder="Contact">
                    </div>
                    <div class="col-md-3 mt-2">
                        <label for="filterStructure" class="form-label">Structure</label>
                        <input type="text" v-model="filterStructure" class="form-control" id="filterStructure" placeholder="Structure">
                    </div>
                    <div class="col-md-3 mt-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut" v-model="filterStatut">
                            <option value="ACTIF">Actif</option>
                            <option value="INACTIF">Inactif</option>
                        </select>
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Clients</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nom & Prénom</th>
                                <th>Contact </th>
                                <th>Email </th>
                                <th>Societe </th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item, index) in filterItems" :key="index">
                                <td> {{ index + 1 }}</td>
                                <td>{{ item?.nom }} {{ item?.prenom }}</td>
                                <td>{{ item?.telephone }}</td>
                                <td>{{ item?.email }}</td>
                                <td>{{ item?.societe }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="item?.statut">{{ item?.statut }}</span>
                                    <span class="badge badge-danger" v-else>{{ item?.statut }}</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary" @click="updateRole(item)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger" @click="deleteRole(item.id)">
                                            <i class="fas fa-trash"></i>
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
    name: 'clients',
    props: {
        msg: String
    },
    data: () => ({
        form: {
            nom: "",
            prenom: "",
            telephone: "",
            statut: "ACTIF"
        },
        loading: false,
        modalInstance: null, filterNom: "", filterPrenom: "", filterEmail: "", filterTelephone: "", filterSociete: "", filterStatut: "", filterAfter: "", filterBefore: ""

    }),
    computed: {
        ...mapGetters({ items: 'clients/all' }),
        filterItems() {
            return this.items.content;
        }
    },
    methods: {
        resetForm() {
            this.role = {},
                this.openModal();
        },
        openModal() {
            // Déplacer le modal 
            document.body.appendChild(document.getElementById('postModal'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('postModal'));
            modal.show();
        },
        closeModal() {
            // Récupérer le modal
            const modalElement = document.getElementById('postModal');

            // Créer un gestionnaire d'événements pour l'événement "hidden.bs.modal"
            const hiddenHandler = () => {
                // Masquer manuellement le backdrop
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.style.display = 'none';
                }
            };

            // Ajouter l'événement "hidden.bs.modal"
            modalElement.addEventListener('hidden.bs.modal', hiddenHandler);

            // Fermer le modal
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();

        },
        /* onSearch(offset) {
            if (offset > 0) this.page = offset;
            this.$router.push({ query: this.page }).catch(() => { });
            this.$store.dispatch('clients/getAllP', this.page)
                .then((response) => {

                })

        }, */
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,desc",
                nom: this.filterNom,
                prenom: this.filterPrenom,
                email: this.filterEmail,
                telephone: this.filterTelephone,
                societe: this.filterSociete,
                statut: this.filterStatut,
                createdAfter: this.filterAfter,
                createdBefore: this.filterBefore
            };
            this.$store.dispatch('clients/getAllP', params)
                .then((response) => {
                })
                
        },
        async addClient() {
            this.loading = true;
            try {
                await this.$store.dispatch('clients/create', this.form);

                ElNotification({
                    title: 'Succès',
                    message: 'Ajout effectué avec succès.',
                    type: 'success',
                    duration: 3000
                });

                this.closeModal();
                this.onSearch();
            } catch (error) {
                console.error('Erreur lors de l\'ajout du client:', error);
                ElNotification({
                    title: 'Erreur',
                    message: 'Une erreur est survenue lors de l\'ajout.',
                    type: 'error',
                    duration: 3000
                });
            } finally {
                this.loading = false;
            }
        },

        async deleteRole(roleId) {
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
                    await this.$store.dispatch('clients/del', roleId);
                    ElNotification({
                        title: 'Succès',
                        message: 'Suppression effectuée avec succès.',
                        type: 'success',
                        duration: 3000
                    });
                    this.onSearch(); // recharge la liste
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
        updateRole(role) {
            this.form = { ...role };
            this.openModal();
        }

    },
    created() {
        this.onSearch();
    },

}
</script>