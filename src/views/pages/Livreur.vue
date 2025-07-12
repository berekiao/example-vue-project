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
                                            max-file-size="5MB"
                                            label-idle="Déposez votre image ou cliquez pour sélectionner"
                                            label-file-processing="Téléchargement en cours..."
                                            label-file-processing-complete="Téléchargement terminé"
                                            label-file-processing-error="Erreur de téléchargement"
                                            @processfile="UploadResponse"
                                            @error="UploadResponse"
                                        />
                                        <small class="form-text text-muted">Formats acceptés: JPG, PNG, GIF. Taille max: 5MB</small>
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

        <div class="modal fade" id="detailLivreur" data-bs-backdrop="static" tabindex="-1" aria-labelledby="livreurLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content border-0 shadow-lg rounded-4">
                <div class="modal-header bg-primary text-white rounded-top-4">
                    <h5 class="mb-0" id="livreurLabel">
                    <i class="bi bi-person"></i> Détail livreur : {{ livreur.nom }} {{ livreur.prenom }}
                    </h5>
                    <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                <div class="modal-body">
                                         <!-- Photo de profil -->
                     <div class="text-center mb-4">
                         <img 
                             :src="getPhotoUrl(livreur.fichier?.id)" 
                             :alt="`Photo de ${livreur.nom} ${livreur.prenom}`" 
                             class="rounded-circle shadow-sm" 
                             style="width: 150px; height: 150px; object-fit: cover;"
                             @error="handleImageError"
                         >
                         <h4 class="mt-3">{{ livreur.nom }} {{ livreur.prenom }}</h4>
                     </div>

                    <!-- Statistiques -->
                    <div class="row mb-4">
                    <div class="col-md-3 mb-3">
                        <div class="card text-center shadow-sm border-0">
                        <div class="card-body">
                            <h6 class="text-muted">Total Courses</h6>
                            <h4>{{ livreursStat.totalCourses ?? 0 }}</h4>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card text-center shadow-sm border-0">
                        <div class="card-body">
                            <h6 class="text-muted">Courses Livrées</h6>
                            <h4>{{ livreursStat.count_LIVREE ?? 0 }}</h4>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card text-center shadow-sm border-0">
                        <div class="card-body">
                            <h6 class="text-muted">Courses En Cours</h6>
                            <h4>{{ livreursStat.count_EN_COURS ?? 0 }}</h4>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card text-center shadow-sm border-0">
                        <div class="card-body">
                            <h6 class="text-muted">Montant Total</h6>
                            <h4>{{ livreursStat.montantTotal?.toLocaleString() ?? 0 }} F CFA</h4>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- Informations personnelles -->
                    <div class="p-3 mb-4 bg-light rounded-3 shadow-sm">
                    <h5><i class="bi bi-info-circle"></i> Informations Personnelles</h5>
                    <div class="row">
                        <div class="col-md-6">
                        <p><strong>Email :</strong> {{ livreur.email }}</p>
                        <p><strong>Contact :</strong> {{ livreur.telephone }}</p>
                        <p><strong>Date de Naissance :</strong> {{ formatDate(livreur.dateNaissance) }}</p>
                        <p><strong>Situation Matrimoniale :</strong> {{ livreur.situationMatrimoniale }}</p>
                        <p><strong>Statut :</strong> {{ livreur.statut }}</p>
                        </div>
                        <div class="col-md-6">
                        <p><strong>Type de Pièce :</strong> {{ livreur.typePiece }}</p>
                        <p><strong>N° Pièce :</strong> {{ livreur.numeroPieceIdentite }}</p>
                        <p><strong>Type de Contrat :</strong> {{ livreur.typeLivreur }}</p>
                        <p><strong>Pourcentage Commission :</strong> {{ livreur.pourcentageCommission }}%</p>
                        </div>
                    </div>
                    </div>

                    <!-- Liste des courses -->
                    <div class="p-3 mb-4 bg-light rounded-3 shadow-sm">
                    <h5><i class="bi bi-truck"></i> Liste des Courses</h5>
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
                    </div>

                    <!-- Liste des motos -->
                    <div class="p-3 mb-4 bg-light rounded-3 shadow-sm" v-if="livreur.typeLivreur === 'YTS'">
                        <h5><i class="bi bi-bicycle"></i> Motos Affectées</h5>
                        <div class="table-responsive">
                            <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                <th>#</th>
                                <th>Immatriculation</th>
                                <th>Marque</th>
                                <th>Modèle</th>
                                <th>Période</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(course, index) in livreurAffectation" :key="course.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ course.immatriculation }}</td>
                                <td>{{ course.marque }}</td>
                                <td>{{ course.modele }}</td>
                                <td>Du {{ formatDateMoment(course.dateDebut) }} au {{ formatDateMoment(course.dateFin) }}</td>
                                </tr>
                                <tr v-if="!livreurAffectation || livreurAffectation.length === 0">
                                <td colspan="5" class="text-center text-muted">Aucune affectation</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
                    <i class="bi-x"></i> Fermer
                    </button>
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
            <div class="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 class="m-0 font-weight-bold text-primary">Liste des livreurs</h6>
                <div v-if="selectedLivreurs.length > 0" class="d-flex align-items-center">
                    <span class="me-3 text-muted">{{ selectedLivreurs.length }} livreur(s) sélectionné(s)</span>
                    <button type="button" class="btn btn-success btn-sm" @click="activerMultipleLivreurs" :disabled="loading">
                        <i class="fas fa-check"></i> Activer les sélectionnés
                        <span v-if="loading" class="spinner-border spinner-border-sm ms-1"></span>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="selectAll" 
                                               v-model="selectAll" @change="toggleSelectAll">
                                        <label class="form-check-label" for="selectAll">
                                            Tout
                                        </label>
                                    </div>
                                </th>
                                <th>Nº</th>
                                <th>Photo</th>
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
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" 
                                               :id="'livreur-' + item.id"
                                               :value="item.id"
                                               v-model="selectedLivreurs">
                                    </div>
                                </td>
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <img 
                                        :src="getPhotoUrl(item.fichier?.id)" 
                                        alt="Photo de profil"
                                        class="rounded-circle"
                                        style="width: 50px; height: 50px; object-fit: cover;"
                                    >
                                </td>
                                <td>{{ item.nom }}</td>
                                <td>{{ item.prenom }}</td>
                                <td>{{ item.telephone }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.numeroPieceIdentite }}</td>
                                <td>{{ item.typeLivreur }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="item?.statut === 'ACTIF'">{{ item?.statut }}</span>
                                    <span class="badge badge-danger" v-else>{{ item?.statut || 'INACTIF' }}</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" @click="editMoto(item)" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" @click="deleteMoto(item.id)" class="btn btn-danger" v-if="isSuperAdmin"><i
                                                class="fas fa-trash"></i></button>
                                        <button type="button" @click="detailLivreur(item)" class="btn btn-secondary"><i
                                                class="fas fa-info"></i></button>
                                        <button type="button" @click="activerLivreur(item.id)" 
                                                class="btn btn-success" 
                                                :disabled="item?.statut === 'ACTIF'"
                                                :title="item?.statut === 'ACTIF' ? 'Déjà actif' : 'Activer le livreur'">
                                            <i class="fas fa-check"></i>
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
import moment from "moment";
import defaultAvatar from "@/assets/img/default-avatar.png";



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
            numeroPieceIdentite: "",
            fichier: null
        },
        loading: false,
        modalInstance: null, filterNom: "", filterPrenom: "", filterEmail: "", filterTelephone: "", filterSituationMatrimoniale: "", filterSituationMatrimoniale: "", filterTypeLivreur: "", filterStatut: "", filterTypePiece: "", filterNumeroPiece: "",
        livreurCourse: [], livreursStat: [], livreur: {}, livreurAffectation: [],
        reponseUpload: null,
        selectedLivreurs: [],
        selectAll: false,

    }),
    computed: {
        ...mapGetters({ items: 'livreurs/all' }),
        filterItems() {
            return this.items.content;
        },
        user() {
            return JSON.parse(localStorage.getItem('userConnected'));
        },
        isSuperAdmin() {
            return this.user?.role?.nomRole === "SUPERADMIN";
        },
        uploadConfig() {
            return {
                process: {
                    url: `${VUE_APP_API_URL}fichier/add`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${this.user ? this.user.token : ''}`
                    },
                    withCredentials: false,
                    onload: (response) => {
                        try {
                            const result = JSON.parse(response);
                            console.log(result);
                            this.reponseUpload = result;
                            return result;
                        } catch (error) {
                            console.error("Erreur parsing response:", error);
                            return response;
                        }
                    },
                    onerror: (error) => {
                        console.error("Erreur d'upload:", error);
                        ElNotification({
                            title: 'Erreur',
                            message: 'Erreur lors du téléchargement de l\'image.',
                            type: 'error',
                            duration: 3000
                        });
                    },
                },
            };
        }
    },
    methods: {
        resetForm() {
            this.form = {
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
                numeroPieceIdentite: "",
                fichier: null
            };
            this.reponseUpload = null;
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
        UploadResponse(error, file) {
            if (error) {
                console.error('Erreur upload:', error);
                ElNotification({
                    title: 'Erreur',
                    message: 'Erreur lors du téléchargement de l\'image.',
                    type: 'error',
                    duration: 3000
                });
            } else {
                console.log('Upload réussi:', file);
                ElNotification({
                    title: 'Succès',
                    message: 'Image téléchargée avec succès.',
                    type: 'success',
                    duration: 3000
                });
            }
        },
        async addLivreur() {
            this.loading = true;
            try {
                // Ajouter l'URL de l'image si elle a été uploadée
                if (this.reponseUpload) {
                    this.form.fichier = this.reponseUpload;
                }
                
                await this.$store.dispatch('livreurs/create', this.form);

                ElNotification({
                    title: 'Succès',
                    message: 'Ajout effectué avec succès.',
                    type: 'success',
                    duration: 3000
                });

                this.closeModal();
                this.onSearch();
                this.resetForm();
            } catch (error) {
                console.error('Erreur lors de l\'ajout du livreur:', error);
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
        getPhotoUrl(idfile) {
            if (idfile && this.user && this.user.token) {
                return `${VUE_APP_API_URL}fichier/download/${idfile}`;
            }
            return defaultAvatar;
        },
        handleImageError(event) {
            // En cas d'erreur de chargement de l'image, afficher une image par défaut
            event.target.src = defaultAvatar;
        },
        formatDateMoment(date) {
            return date ? moment(date).format('LL') : '';
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
        toggleSelectAll() {
            if (this.selectAll) {
                this.selectedLivreurs = this.filterItems.map(item => item.id);
            } else {
                this.selectedLivreurs = [];
            }
        },
        async activerLivreur(livreurId) {
            try {
                await this.$store.dispatch('livreurs/activerLivreur', livreurId);
                ElNotification({
                    title: 'Succès',
                    message: 'Livreur activé avec succès.',
                    type: 'success',
                    duration: 3000
                });
                this.onSearch(); // Recharger la liste
            } catch (error) {
                console.error('Erreur lors de l\'activation du livreur:', error);
                ElNotification({
                    title: 'Erreur',
                    message: 'Erreur lors de l\'activation du livreur.',
                    type: 'error',
                    duration: 3000
                });
            }
        },
        async activerMultipleLivreurs() {
            if (this.selectedLivreurs.length === 0) {
                ElNotification({
                    title: 'Attention',
                    message: 'Veuillez sélectionner au moins un livreur.',
                    type: 'warning',
                    duration: 3000
                });
                return;
            }

            const result = await Swal.fire({
                title: 'Confirmer l\'activation',
                text: `Voulez-vous activer ${this.selectedLivreurs.length} livreur(s) ?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Oui, activer',
                cancelButtonText: 'Annuler'
            });

            if (result.isConfirmed) {
                this.loading = true;
                try {
                    await this.$store.dispatch('livreurs/activerMultipleLivreurs', this.selectedLivreurs);
                    ElNotification({
                        title: 'Succès',
                        message: `${this.selectedLivreurs.length} livreur(s) activé(s) avec succès.`,
                        type: 'success',
                        duration: 3000
                    });
                    this.selectedLivreurs = [];
                    this.selectAll = false;
                    this.onSearch(); // Recharger la liste
                } catch (error) {
                    console.error('Erreur lors de l\'activation multiple:', error);
                    ElNotification({
                        title: 'Erreur',
                        message: 'Erreur lors de l\'activation des livreurs.',
                        type: 'error',
                        duration: 3000
                    });
                } finally {
                    this.loading = false;
                }
            }
        },

    },
    watch: {
        selectedLivreurs(newVal) {
            // Mettre à jour l'état de "Tout sélectionner"
            this.selectAll = newVal.length === this.filterItems.length && this.filterItems.length > 0;
        }
    },
    created() {
        this.onSearch();
    },
   

}
</script>

<style scoped>
.bg-light {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
}
.shadow-sm {
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.rounded-3 {
  border-radius: 1rem;
}

</style>