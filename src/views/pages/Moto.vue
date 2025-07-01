<template>
    <div class="container-fluid">

        <div class="modal fade" id="motoModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="motoLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="motoLabel">Ajouter une Moto</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="immatriculation" class="form-label">Immatriculation</label>
                                        <input type="text" class="form-control" v-model="form.immatriculation" id="immatriculation"
                                            placeholder="Ex : BJ1234AB">
                                    </div>
                                    <div class="mb-3">
                                        <label for="marque" class="form-label">Marque</label>
                                        <input type="text" class="form-control" v-model="form.marque" id="marque"
                                            placeholder="Yamaha, Honda...">
                                    </div>
                                    <div class="mb-3">
                                        <label for="modele" class="form-label">Modèle</label>
                                        <input type="text" class="form-control" v-model="form.modele" id="modele"
                                            placeholder="CBR500R, XTZ125...">
                                    </div>
                                   
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut" v-model="form.statut">
                                            <option value="DISPONIBLE">Disponible</option>
                                            <option value="EN_COURSE">En cours d’utilisation</option>
                                            <option value="EN_MAINTENANCE">En panne</option>
                                            <option value="HORS_SERVICE">En panne</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="dateMaintenance" class="form-label">Date de maintenance</label>
                                        <input type="date" class="form-control" v-model="form.dateMaintenance" id="dateMaintenance">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
                                <i class="bi-x"></i> Fermer
                            </button>
                            <button type="button" @click="addMoto" class="btn btn-primary ms-2">
                                <i class="bi-check"></i> Ajouter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Motos</h1>
            <a @click="openModal" href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouvelle Moto
            </a>
        </div>



        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterImmatriculation" class="form-label">Immatriculation</label>
                        <input type="text" class="form-control" id="filterImmatriculation" placeholder="Ex : BJ1234AB" v-model="filterImmatriculation">
                    </div>
                    <div class="col-md-2">
                        <label for="filterMarque" class="form-label">Marque</label>
                        <input type="text" class="form-control" id="filterMarque" placeholder="Yamaha, Honda..." v-model="filterMarque">
                    </div>
                    <div class="col-md-2">
                        <label for="filterModele" class="form-label">Modèle</label>
                        <input type="text" class="form-control" id="filterModele" placeholder="CBR500R..." v-model="filterModele">
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut" v-model="filterStatut">
                            <option value="">Tous</option>
                            <option value="DISPONIBLE">Disponible</option>
                            <option value="EN_COURSE">En cours d’utilisation</option>
                            <option value="EN_MAINTENANCE">En maintenance</option>
                            <option value="HORS_SERVICE">Hors service</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterDateMaintenanceAfter" class="form-label">Maintenance après</label>
                        <input type="date" class="form-control" id="filterDateMaintenanceAfter" v-model="filterDateMaintenanceAfter">
                    </div>
                    <div class="col-md-2">
                        <label for="filterDateMaintenanceBefore" class="form-label">Maintenance avant</label>
                        <input type="date" class="form-control" id="filterDateMaintenanceBefore" v-model="filterDateMaintenanceBefore">
                    </div>
                    <div class="col-md-2 mt-2">
                        <button type="button" class="btn btn-primary w-100" @click="onSearch(1)">Filtrer</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Liste des Motos</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Immatriculation</th>
                                <th>Marque</th>
                                <th>Modèle</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filteredItems" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.immatriculation }}</td>
                                <td>{{ item.marque }}</td>
                                <td>{{ item.modele }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="item.statut">{{ item.statut }}</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" @click="editMoto(item)" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" @click="deleteMoto(item.id)" class="btn btn-danger"><i
                                                class="fas fa-trash"></i></button>
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
            marque:	"",
            modele:	"",
            immatriculation: "",
            statut:	"",
            dateMaintenance : "",
            statut: "ACTIF"
        },
        loading: false,
        modalInstance: null, filterMarque: "", filterModele: "", filterImmatriculation: "", filterStatut: "", filterDateMaintenanceAfter: "", filterDateMaintenanceBefore: ""

    }),
    computed: {
        ...mapGetters({ items: 'motos/all' }),
        filteredItems() {
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
            document.body.appendChild(document.getElementById('motoModal'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('motoModal'));
            modal.show();
        },
        closeModal() {
            // Récupérer le modal
            const modalElement = document.getElementById('motoModal');

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
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,desc",
                marque: this.filterMarque,
                modele: this.filterModele,
                immatriculation: this.filterImmatriculation,
                statut: this.filterStatut,
                dateMaintenanceAfter: this.filterDateMaintenanceAfter,
                dateMaintenanceBefore: this.filterDateMaintenanceBefore, 
            };
            this.$store.dispatch('motos/getAllP', params)
                .then((response) => {
                })
                
        },
        async addMoto() {
            this.loading = true;
            try {
                await this.$store.dispatch('motos/create', this.form);

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
            } 
        },

        async deleteMoto(roleId) {
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
                    await this.$store.dispatch('motos/del', roleId);
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
        editMoto(role) {
            this.form = { ...role };
            this.openModal();
        }

    },
    created() {
        this.onSearch();
    },

}
</script>