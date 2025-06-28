<template>
    <div class="container-fluid">

        <div class="modal fade" id="livreurModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="livreurLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="livreurLabel">Livreur</h5>
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
                                        <input type="text" class="form-control" id="nom" placeholder="Nom"
                                            v-model="form.nom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="prenom" class="form-label">Prénom</label>
                                        <input type="text" class="form-control" id="prenom" placeholder="Prénom"
                                            v-model="form.prenom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="pieceIdentite" class="form-label">Pièce d'identité</label>
                                        <input type="text" class="form-control" id="pieceIdentite"
                                            placeholder="N° de pièce ou référence" v-model="form.numeroPieceIdentite">
                                    </div>
                                    <div class="mb-3">
                                        <label for="prenom" class="form-label">Date de naissance</label>
                                        <input type="date" class="form-control" id="prenom" placeholder="Date de naissance"
                                            v-model="form.dateNaissance">
                                    </div>
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Situation Matrimoniale</label>
                                        <select class="form-control" id="statut" v-model="form.situationMatrimoniale">
                                            <option value="CELIBATAIRE">Celibataire</option>
                                            <option value="MARIE">Marier</option>
                                            <option value="DIVORCE">Divorcer</option>
                                            <option value="VEUF">Veuf</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="typeContrat" class="form-label">Type de contrat</label>
                                        <select class="form-control" id="typeContrat" v-model="form.typeLivreur">
                                            <option value="INDEPENDANT">Indépendant</option>
                                            <option value="YTS">Yts</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut" v-model="form.statut">
                                            <option value="ACTIF">Actif</option>
                                            <option value="INACTIF">Inactif</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Adresse email"
                                            v-model="form.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="contact"
                                            placeholder="Numéro de téléphone" v-model="form.telephone">
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
                            <button type="button" class="btn btn-primary ms-2">
                                <i class="bi-check"></i> Ajouter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Livreurs</h1>
            <a href="#" @click="openModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouveau Livreur
            </a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="filterNom" placeholder="Nom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterPrenom" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="filterPrenom" placeholder="Prénom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterContact" class="form-label">Contact</label>
                        <input type="text" class="form-control" id="filterContact" placeholder="Contact">
                    </div>
                    <div class="col-md-2">
                        <label for="filterTypeContrat" class="form-label">Type de contrat</label>
                        <select class="form-control" id="filterTypeContrat">
                            <option value="">Tous</option>
                            <option value="independant">Indépendant</option>
                            <option value="interne">Interne</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut">
                            <option value="">Tous</option>
                            <option value="actif">Actif</option>
                            <option value="inactif">Inactif</option>
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des livreurs</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Pièce d'identité</th>
                                <th>Type contrat</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in items" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.nom }}</td>
                                <td>{{ item.prenom }}</td>
                                <td>{{ item.telephone }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.numeroPieceIdentite }}</td>
                                <td>{{ item.typeLivreur }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="item?.statut">{{ item?.statut }}</span>
                                    <span class="badge badge-danger" v-else>{{ item?.statut }}</span>
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
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ElMessage, ElNotification } from "element-plus";
import Swal from 'sweetalert2'


export default {
    components: {

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
            adresse: "",
            email: "",
            dateNaissance: "",
            situationMatrimoniale: "CELIBATAIRE",
            typeLivreur: "INDEPENDANT",
            dateFinContrat: "",
            statut: "ACTIF",
            numeroPieceIdentite: ""
        },
        loading: false,
        modalInstance: null

    }),
    computed: {
        ...mapGetters({ items: 'livreurs/all' }),

    },
    methods: {
        resetForm() {
            this.role = {},
                this.openModal();
        },
        openModal() {
            // Déplacer le modal 
            document.body.appendChild(document.getElementById('livreurModal'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('livreurModal'));
            modal.show();
        },
        closeModal() {
            // Récupérer le modal
            const modalElement = document.getElementById('livreurModal');

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
            this.$store.dispatch('livreurs/getAll', this.page)
                .then((response) => {

                })

        },
        async addMoto() {
            this.loading = true;
            try {
                await this.$store.dispatch('livreurs/create', this.form);

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
                    await this.$store.dispatch('livreurs/del', roleId);
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