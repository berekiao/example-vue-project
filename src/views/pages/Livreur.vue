<template>
    <div class="container-fluid">

        <div class="modal fade" id="livreurModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="livreurLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="livreurLabel">Livreur</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div>
                                <div class="row">
                                    <div class="col-6 mb-3">
                                        <label for="nom" class="form-label">Nom</label>
                                        <input type="text" class="form-control" id="nom" placeholder="Nom"
                                            v-model="form.nom">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="prenom" class="form-label">Prénom</label>
                                        <input type="text" class="form-control" id="prenom" placeholder="Prénom"
                                            v-model="form.prenom">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Adresse email"
                                            v-model="form.email">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="prenom" class="form-label">Npi</label>
                                        <input type="text" class="form-control" id="prenom" placeholder="Npi"
                                            v-model="form.npi">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="contact" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="contact"
                                            placeholder="Numéro de téléphone" v-model="form.telephone">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="prenom" class="form-label">Adresse</label>
                                        <input type="text" class="form-control" id="prenom" placeholder="Adresse"
                                            v-model="form.adresse">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="typeContrat" class="form-label">Type de pièce</label>
                                        <select class="form-control" id="typeContrat" v-model="form.typePiece">
                                            <option value="CIP">CIP</option>
                                            <option value="PASSPORT">PASSPORT</option>
                                            <option value="CIN">CIN</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="pieceIdentite" class="form-label">Pièce d'identité</label>
                                        <input type="text" class="form-control" id="pieceIdentite"
                                            placeholder="N° de pièce ou référence" v-model="form.numeroPieceIdentite">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="prenom" class="form-label">Date de naissance</label>
                                        <input type="date" class="form-control" id="prenom"
                                            placeholder="Date de naissance" v-model="form.dateNaissance">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="statut" class="form-label">Situation Matrimoniale</label>
                                        <select class="form-control" id="statut" v-model="form.situationMatrimoniale">
                                            <option value="CELIBATAIRE">Celibataire</option>
                                            <option value="MARIE">Marier</option>
                                            <option value="DIVORCE">Divorcer</option>
                                            <option value="VEUF">Veuf</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="typeContrat" class="form-label">Type de contrat</label>
                                        <select class="form-control" id="typeContrat" v-model="form.typeLivreur">
                                            <option value="INDEPENDANT">Indépendant</option>
                                            <option value="YTS">Yts</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="prenom" class="form-label">Date début de contrat</label>
                                        <input type="date" class="form-control" id="prenom"
                                            placeholder="Date de naissance" v-model="form.dateDebutContrat">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="prenom" class="form-label">Date fin de contrat</label>
                                        <input type="date" class="form-control" id="prenom"
                                            placeholder="Date de naissance" v-model="form.dateFinContrat">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="contact" class="form-label">Personne d'Urgence à Contacter</label>
                                        <input type="text" class="form-control" id="contact"
                                            placeholder="Personne d'Urgence à Contacter" v-model="form.personneUrgence">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="contact" class="form-label">Contact d'Urgence</label>
                                        <input type="text" class="form-control" id="contact"
                                            placeholder="Contact d'Urgence" v-model="form.contactUrgence">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut" v-model="form.statut">
                                            <option value="ACTIF">Actif</option>
                                            <option value="INACTIF">Inactif</option>
                                        </select>
                                    </div>

                                    <div class="col-12 mb-3">
                                        <label for="statut" class="form-label">Photo</label>
                                        <FilePond
                                            ref="filePond"
                                            name="file"
                                            :server="uploadConfig"
                                            accepted-file-types="image/*"
                                            label-idle="Déposez votre image ou cliquez pour sélectionner"
                                            @processfile="UploadResponse"
                                        />
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
                            <button type="button" @click="addLivreur" class="btn btn-primary ms-2">
                                <i class="bi-check"></i> Ajouter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade" id="detailLivreur" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="livreurLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="livreurLabel">Détail livreur : {{ livreur.nom }} {{ livreur.prenom }}</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <!-- Statistiques -->

                        <div class="row mb-4">
                            <div class="col-md-3 mb-3">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h6>Total Courses</h6>
                                        <h4>{{ livreursStat.totalCourses ?? 0 }}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h6>Courses Livrées</h6>
                                        <h4>{{ livreursStat.count_LIVREE ?? 0 }}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h6>Courses En Cours</h6>
                                        <h4>{{ livreursStat.count_EN_COURS ?? 0 }}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h6>Montant Total</h6>
                                        <h4>{{ livreursStat.montantTotal?.toLocaleString() ?? 0 }} F CFA</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>informations livreurs</h4>
                        <!-- 
                        <pre>{{ livreur }}</pre> -->

                        <div class="row mb-4">
                            <div class="col-md-6">
                                <p><strong>Nom:</strong> {{ livreur.nom }}</p>
                                <p><strong>Prénom:</strong> {{ livreur.prenom }}</p>
                                <p><strong>Email:</strong> {{ livreur.email }}</p>
                                <p><strong>Contact:</strong> {{ livreur.telephone }}</p>
                                <p><strong>Date de Naissance:</strong> {{ formatDate(livreur.dateNaissance) }}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Type de Pièce:</strong> {{ livreur.typePiece }}</p>
                                <p><strong>N° de Pièce d'Identité:</strong> {{ livreur.numeroPieceIdentite }}</p>
                                <p><strong>Situation Matrimoniale:</strong> {{ livreur.situationMatrimoniale }}</p>
                                <p><strong>Type de Contrat:</strong> {{ livreur.typeLivreur }}</p>
                                <p><strong>Statut:</strong> {{ livreur.statut }}</p>
                            </div>
                        </div>

                        <h4>Liste des Courses</h4>

                        <!-- Tableau des courses -->
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Commande</th>
                                        <th>Date</th>
                                        <th>Départ</th>
                                        <th>Destination</th>
                                        <th>Montant</th>
                                        <th>Statut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(course, index) in livreurCourse" :key="course.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ course.numeroCommande }}</td>
                                        <td>{{ formatDate(course.dateHeureCommande) }}</td>
                                        <td>{{ course.adresseDepart }}</td>
                                        <td>{{ course.adresseLivraison }}</td>
                                        <td>{{ course.montantTotal?.toLocaleString() }} F CFA</td>
                                        <td>
                                            <span :class="badgeClass(course.statutCourse)">
                                                {{ course.statutCourse }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr v-if="!livreurCourse || livreurCourse.length === 0">
                                        <td colspan="7" class="text-center text-muted">Aucune course trouvée</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>Liste des Motos affecter au livreur</h4>

                        <!-- Tableau des courses -->
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="table-light">
                                    <tr>
                                        <th>Nº</th>
                                        <th>Immatriculation</th>
                                        <th>Marque</th>
                                        <th>Modèle</th>
                                        <th>Periode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(course, index) in livreurAffectation" :key="course.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ course.immatriculation }}</td>
                                        <td>{{ course.marque }}</td>
                                        <td>{{ course.modele }}</td>
                                    </tr>
                                    <tr v-if="!livreurAffectation || livreurAffectation.length === 0">
                                        <td colspan="7" class="text-center text-muted">Aucune affectation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
                                <i class="bi-x"></i> Fermer
                            </button>
                            <button type="button" @click="addLivreur" class="btn btn-primary ms-2">
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
            <a href="#" @click="openModal" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouveau Livreur
            </a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="filterNom" placeholder="Nom" v-model="filterNom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterPrenom" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="filterPrenom" placeholder="Prénom"
                            v-model="filterPrenom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="filterEmail" placeholder="Email"
                            v-model="filterEmail">
                    </div>
                    <div class="col-md-2">
                        <label for="filterTelephone" class="form-label">Contact</label>
                        <input type="text" class="form-control" id="filterTelephone" placeholder="Contact"
                            v-model="filterTelephone">
                    </div>
                    <div class="col-md-2">
                        <label for="filterSituationMatrimoniale" class="form-label">Situation Matrimoniale</label>
                        <select class="form-control" id="filterSituationMatrimoniale"
                            v-model="filterSituationMatrimoniale">
                            <option value="">Toutes</option>
                            <option value="CELIBATAIRE">Célibataire</option>
                            <option value="MARIE">Marié</option>
                            <option value="DIVORCE">Divorcé</option>
                            <option value="VEUF">Veuf</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterTypeLivreur" class="form-label">Type de contrat</label>
                        <select class="form-control" id="filterTypeLivreur" v-model="filterTypeLivreur">
                            <option value="">Tous</option>
                            <option value="INDEPENDANT">Indépendant</option>
                            <option value="YTS">Yts</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut" v-model="filterStatut">
                            <option value="">Tous</option>
                            <option value="ACTIF">Actif</option>
                            <option value="INACTIF">Inactif</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterTypePiece" class="form-label">Type de pièce</label>
                        <select class="form-control" id="filterTypePiece" v-model="filterTypePiece">
                            <option value="">Toutes</option>
                            <option value="CIP">CIP</option>
                            <option value="PASSPORT">PASSPORT</option>
                            <option value="CIN">CIN</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterNumeroPiece" class="form-label">N° de pièce</label>
                        <input type="text" class="form-control" id="filterNumeroPiece" placeholder="N° de pièce"
                            v-model="filterNumeroPiece">
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-primary w-100" @click="onSearch(1)">Filtrer</button>
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
                            <tr v-for="(item, index) in filterItems" :key="index">
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
                                        <button type="button" @click="detailLivreur(item)" class="btn btn-secondary"><i
                                                class="fas fa-info"></i></button>
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

import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);
 
import { VUE_APP_API_URL } from "@/config/config";


export default {
    components: {
        PaginationNew, FilePond
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
            typePiece: "CIP",
            numeroPieceIdentite: ""
        },
        loading: false,
        modalInstance: null, filterNom: "", filterPrenom: "", filterEmail: "", filterTelephone: "", filterSituationMatrimoniale: "", filterSituationMatrimoniale: "", filterTypeLivreur: "", filterStatut: "", filterTypePiece: "", filterNumeroPiece: "",
        livreurCourse: [], livreursStat: [], livreur: {}, livreurAffectation: [],
        reponseUpload: null

    }),
    computed: {
        ...mapGetters({ items: 'livreurs/all' }),
        filterItems() {
            return this.items.content;
        },
        user() {
            return JSON.parse(localStorage.getItem('userConnected'));
        },
        uploadConfig() {
            return {
                url: `${VUE_APP_API_URL}fichier/add`,
                process: {
                    url: "/",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${this.user ? this.user.token : ''}`
                    },
                    withCredentials: false,
                    onload: (response) => {
                        return response;
                    },
                    onerror: (error) => {
                        console.error("Erreur d'upload:", error);
                    },
                },
            };
        }
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
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,asc",
                nom: this.filterNom,
                prenom: this.filterPrenom,
                email: this.filterEmail,
                telephone: this.filterTelephone,
                situationMatrimoniale: this.filterSituationMatrimoniale,
                typeLivreur: this.filterTypeLivreur,
                statut: this.filterStatut,
                typePiece: this.filterTypePiece,
                numeroPieceIdentite: this.filterNumeroPiece
            };
            this.$store.dispatch('livreurs/getAllP', params)
                .then((response) => {
                })

        },
        async addLivreur() {
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
        },
        openDetail() {
            // Déplacer le modal 
            document.body.appendChild(document.getElementById('detailLivreur'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('detailLivreur'));
            modal.show();
        },
        closeDetail() {
            // Récupérer le modal
            const modalElement = document.getElementById('detailLivreur');

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
        async statByLivreur(id) {
            const response = await this.$store.dispatch('livreurs/statByLivreur', id);
            if (response) {
                this.livreursStat = response
            }
        },
        async getInfoById(id) {
            const response = await this.$store.dispatch('livreurs/getInfoById', id);
            if (response) {
                this.livreurCourse = response.content
            }
        },
        async getAffectationById(id) {
            const response = await this.$store.dispatch('livreurs/getAffectationById', id);
            if (response) {
                this.livreurAffectation = response.content
            }
        },
        detailLivreur(item) {
            this.livreur = item
            this.getInfoById(item.id);
            this.statByLivreur(item.id);
            this.getAffectationById(item.id);
            this.openDetail();
        },
        formatDate(dateStr) {
            if (!dateStr) return '-';
            const date = new Date(dateStr);
            return date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        },
        badgeClass(status) {
            switch (status) {
                case 'LIVREE': return 'badge bg-success text-light';
                case 'EN_COURS': return 'badge bg-warning text-light';
                default: return 'badge bg-secondary text-light';
            }
        },
        uploadConfig() {
            return {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        },
        UploadResponse(error, file) {
            if (!error) {
                const reponse = JSON.parse(file.serverId);
                this.reponseUpload = reponse;
            }
        },

    },
    created() {
        this.onSearch();
    },
   

}
</script>