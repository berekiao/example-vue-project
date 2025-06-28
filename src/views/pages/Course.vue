<template>
    <div class="container-fluid">

        <div class="modal fade" id="courseModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="sousLabel">Courses</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <form>
                            <div class="row">
                                <div class="col-6 mb-3">
                                    <label>Client</label>
                                    <select class="form-control" v-model="form.client">
                                        <option value="">Sélectionner le client</option>
                                        <option v-for="client in clients" :key="client" :value="client">
                                            {{ client.nom }} {{ client.prenom }}
                                        </option>
                                    </select>
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Livreur</label>
                                    <select class="form-control" v-model="form.livreur">
                                        <option value="">Sélectionner un livreur</option>
                                        <option v-for="livreur in livreurs" :key="livreur" :value="livreur">
                                            {{ livreur.nom }} {{ livreur.prenom }}
                                        </option>
                                    </select>
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Adresse de départ</label>
                                    <input type="text" class="form-control" v-model="form.adresseDepart"
                                        placeholder="Adresse de départ">
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Adresse de livraison</label>
                                    <input type="text" class="form-control" v-model="form.adresseLivraison"
                                        placeholder="Adresse de livraison">
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Montant total</label>
                                    <input type="number" class="form-control" v-model="form.montantTotal"
                                        placeholder="Montant">
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Statut Paiement</label>
                                    <select class="form-control" v-model="form.statutPaiement">
                                        <option value="">Sélectionner le statut</option>
                                        <option value="EN_ATTENTE">En attente</option>
                                        <option value="EFFECTUE">Effectué</option>
                                        <option value="ANNULE">Annulé</option>
                                    </select>
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Statut Course</label>
                                    <select class="form-control" v-model="form.statutCourse">
                                        <option value="">Sélectionner le statut</option>
                                        <option value="EN_ATTENTE">En attente</option>
                                        <option value="EN_COURS">En cours</option>
                                        <option value="LIVREE">Livrée</option>
                                        <option value="ANNULEE">Annulée</option>
                                    </select>
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Type Course</label>
                                    <select class="form-control" v-model="form.typeCourse">
                                        <option value="">Sélectionner le type</option>
                                        <option value="TRANSMISSION_PRODUITS">Transmission de produits</option>
                                        <option value="FOURNITURE_SERVICES">Fourniture de services</option>
                                    </select>
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Type Paiement</label>
                                    <select class="form-control" v-model="form.typePaiement">
                                        <option value="">Sélectionner le mode</option>
                                        <option value="MOBILE_MONEY">Mobile Money</option>
                                        <option value="ESPECES">Espèces</option>
                                    </select>
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Date & Heure Commande</label>
                                    <input type="datetime-local" class="form-control" v-model="form.dateHeureCommande">
                                </div>


                                <div class="col-6 mb-3">
                                    <label>Nom Destinataire</label>
                                    <input type="text" class="form-control" v-model="form.nomDestinataire">
                                </div>

                                <div class="col-6 mb-3">
                                    <label>Téléphone Destinataire</label>
                                    <input type="text" class="form-control" v-model="form.telephoneDestinataire"
                                        placeholder="01XXXXXXXX">
                                </div>

                                <div class="col-12 mb-3">
                                    <label>Détail Course</label>
                                    <textarea class="form-control" v-model="form.commentaire" rows="3"></textarea>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i
                                    class="bi-x"></i>Fermer</button>
                            <button type="button" @click="addCourse" class="btn btn-primary ms-2"><i class="bi-check"></i>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Courses</h1>
            <a @click="openModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouvelle Course</a>
        </div>
        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-3">
                        <label for="filterLivreur" class="form-label">Livreur</label>
                        <select class="form-control" id="filterLivreur">
                            <option value="">Tous</option>
                            <option value="1">Thoñas Doe</option>
                            <option value="2">Gui Frehu</option>
                            <option value="3">Beno Doe</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="filterClient" class="form-label">Client</label>
                        <select class="form-control" id="filterClient">
                            <option value="">Tous</option>
                            <option value="1">Amos Ploi</option>
                            <option value="2">Frued Djadi</option>
                            <option value="3">Loic Dossier</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut">
                            <option value="">Tous</option>
                            <option value="en_cours">En Cours</option>
                            <option value="termine">Terminé</option>
                            <option value="annule">Annulé</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterDate" class="form-label">Date</label>
                        <input type="date" class="form-control" id="filterDate">
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Courses</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Livreur</th>
                                <th>Client </th>
                                <th>Adresse départ </th>
                                <th>Destinataire</th>
                                <th>Montant</th>
                                <th>Statut Course</th>
                                <th>Statut Payement</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in items" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.livreur.nom }} {{ item.livreur.prenom }}</td>
                                <td>{{ item.client.nom }} {{ item.client.prenom }}</td>
                                <td>{{ item.adresseDepart }}</td>
                                <td>{{ item.nomDestinataire }}</td>
                                <td>{{ item.montantTotal }}</td>
                                <td>
                                    <span class="badge badge-warning" v-if="item.statutCourse == 'EN_COURS'">En Cours</span>
                                    <span class="badge badge-success" v-if="item.statutCourse == 'LIVREE'">LIVREE</span>
                                </td>
                                <td>
                                    <span class="badge badge-warning" v-if="item.statutPaiement == 'EN_ATTENTE'">En Attente</span>
                                    <span class="badge badge-success" v-if="item.statutPaiement == 'EFFECTUE'">EFFECTUE</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" @click="editItem(item)" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" @click="deleteItem(item.id)" class="btn btn-danger"><i
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
            client: '',
            livreur: '',
            adresseDepart: '',
            adresseLivraison: '',
            montantTotal: '',
            statutPaiement: '',
            statutCourse: '',
            typeCourse: '',
            typePaiement: '',
            dateHeureCommande: '',
            livraisonEffectueeAt: '',
            commentaire: '',
            nomDestinataire: '',
            telephoneDestinataire: ''
        },
        clients: [],
        livreurs: [],
        loading: false,
        modalInstance: null,

    }),
    computed: {
        ...mapGetters({ items: 'courses/all' }),

    },
    methods: {
        resetForm() {
            this.role = {},
                this.openModal();
        },
        openModal() {
            // Déplacer le modal 
            document.body.appendChild(document.getElementById('courseModal'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('courseModal'));
            modal.show();
        },
        closeModal() {
            // Récupérer le modal
            const modalElement = document.getElementById('courseModal');

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
            this.$store.dispatch('courses/getAll', this.page)
                .then((response) => {

                })

        },

        async addCourse() {
            this.loading = true;
            try {
                await this.$store.dispatch('courses/create', this.form);

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

        async deleteItem(roleId) {
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
                    await this.$store.dispatch('courses/del', roleId);
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
        editItem(role) {
            this.form = { ...role };
            this.openModal();
        },
        async loadClients() {
            try {
                const response = await this.$store.dispatch('clients/getAll');
                this.clients = response;
            } catch (e) {
                console.error("Erreur chargement clients", e);
            }
        },
        async loadLivreurs() {
            try {
                const response = await this.$store.dispatch('livreurs/getAll');
                this.livreurs = response;
            } catch (e) {
                console.error("Erreur chargement livreurs", e);
            }
        }

    },
    created() {
        this.onSearch();
        this.loadClients();
        this.loadLivreurs();
    },

}
</script>