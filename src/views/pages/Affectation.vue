<template>
    <div class="container-fluid">

        <div class="modal fade" id="affectationModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="affectationLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="affectationLabel">Nouvelle Affectation</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">

                                    <div class="mb-3">
                                        <label for="moto" class="form-label">Moto</label>
                                        <select class="form-control" id="moto" v-model="form.moto">
                                            <option selected disabled>Choisir une moto</option>
                                            <option v-for="items in motos" :value="items" :key="items.id">{{items.marque}} {{items.modele}}</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="livreur" class="form-label">Livreur</label>
                                        <select class="form-control" id="livreur" v-model="form.livreur">
                                            <option selected disabled>Choisir le livreur</option>
                                            <option v-for="items in livreurs" :value="items" :key="items.id">{{items.nom}} {{items.prenom}}</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="dateDebut" class="form-label">Date de début</label>
                                        <input type="date" class="form-control" v-model="form.dateDebut" id="dateDebut">
                                    </div>

                                    <div class="mb-3">
                                        <label for="dateFin" class="form-label">Date de fin</label>
                                        <input type="date" class="form-control" v-model="form.dateFin" id="dateFin">
                                    </div>

                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut" v-model="form.statut">
                                            <option value="ACTIF">Actif</option>
                                            <option value="INACTIF">Terminé</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="observation" class="form-label">Observation</label>
                                        <textarea class="form-control" id="observation" v-model="form.commentaire" rows="3"
                                            placeholder="Notes, remarques, etc."></textarea>
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
                            <button type="button" @click="addAffectation" class="btn btn-primary ms-2">
                                <i class="bi-check"></i> Affecter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Historique des affectations</h1>
            <a href="#" @click="openModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouvelle Affectation
            </a>
        </div>

        <!-- Filtres Affectation -->
        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterLivreur" class="form-label">Livreur</label>
                        <input type="text" class="form-control" id="filterLivreur" placeholder="Nom du livreur">
                    </div>
                    <div class="col-md-2">
                        <label for="filterMoto" class="form-label">Moto</label>
                        <input type="text" class="form-control" id="filterMoto" placeholder="Immatriculation ou modèle">
                    </div>
                    <div class="col-md-2">
                        <label for="filterDateDebut" class="form-label">Date début</label>
                        <input type="date" class="form-control" id="filterDateDebut">
                    </div>
                    <div class="col-md-2">
                        <label for="filterDateFin" class="form-label">Date fin</label>
                        <input type="date" class="form-control" id="filterDateFin">
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut">
                            <option value="">Tous</option>
                            <option value="actif">Actif</option>
                            <option value="termine">Terminé</option>
                            <option value="annule">Annulé</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-primary w-100">Filtrer</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Liste des Affectations</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Moto</th>
                                <th>Livreur</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                                <th>Statut</th>
                                <th>Observation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in items" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.moto.marque }} {{ item.moto.modele }}</td>
                                <td>{{ item.livreur.nom }} {{ item.livreur.prenom }}</td>
                                <td>{{ item.dateDebut }}</td>
                                <td>{{ item.dateFin }}</td>
                                <td><span class="badge badge-success">{{ item.statut }}</span></td>
                                <td>{{ item.commentaire }}</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
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
            livreur: null,
            moto: null,
            dateDebut: "",
            dateFin: "",
            commentaire: "",
            statut: "ACTIF"
        },
        loading: false,
        modalInstance: null, motos: [], livreurs: []

    }),
    computed: {
        ...mapGetters({ items: 'affectations/all' }),

    },
    methods: {
        resetForm() {
            this.role = {},
                this.openModal();
        },
        openModal() {
            // Déplacer le modal 
            document.body.appendChild(document.getElementById('affectationModal'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('affectationModal'));
            modal.show();
        },
        closeModal() {
            // Récupérer le modal
            const modalElement = document.getElementById('affectationModal');

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
        onSearch(offset) {
            if (offset > 0) this.page = offset;
            this.$router.push({ query: this.page }).catch(() => { });
            this.$store.dispatch('affectations/getAll', this.page)
                .then((response) => {

                })

        },

        async addAffectation() {
            this.loading = true;
            try {
                await this.$store.dispatch('affectations/create', this.form);

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
                    await this.$store.dispatch('affectations/del', roleId);
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
        },
        getAllMotos() {
            this.$store.dispatch('motos/getAllMotoDisponible')
                .then((response) => {
                    this.motos = response;
                })
        },
        getAllLivreurs() {
            const type = 'YTS';
            this.$store.dispatch('livreurs/getAllLivreurYts', type)
                .then((response) => {
                    this.livreurs = response;
                })
        },

    },
    created() {
        this.onSearch();
        this.getAllMotos();
        this.getAllLivreurs();
    },

}
</script>