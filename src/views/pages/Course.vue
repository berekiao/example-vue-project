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
                                      <option value="VIP">VIP</option>
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

    <!-- Modale ajout/modification -->
    <div class="modal fade" id="courseModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
      aria-hidden="true" style="backdrop-filter: blur(10px);">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-header border-0 pb-0 align-items-start">
            <h5 class="mb-0" id="sousLabel">Courses</h5>
            <button class="btn btn-sm btn-outline-primary ms-2" type="button" @click="openClientModal">
              <i class="bi-plus"></i> Nouveau client
            </button>
            <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-6 mb-3">
                  <label>Client</label>
                  <select class="form-control" v-model="form.client">
                    <option value="">Sélectionner le client</option>
                    <option v-for="client in clients" :key="client.id" :value="client">
                      {{ client.nom }} {{ client.prenom }}
                    </option>
                  </select>
                </div>
                <div class="col-6 mb-3">
                  <label>Livreur</label>
                  <select class="form-control" v-model="form.livreur">
                    <option value="">Sélectionner un livreur</option>
                    <option v-for="livreur in livreurs" :key="livreur.id" :value="livreur"> 
                      {{ livreur.nom }} {{ livreur.prenom }}
                    </option>
                  </select> 
                </div>


                
                
                <!-- Sélection Ville et Quartier pour l'adresse de livraison -->
                <div class="col-6 mb-3 mt-3">
                  <label>Ville de livraison</label>
                  <select class="form-control" v-model="selectedVille" @change="onVilleChange">
                    <option value="">Sélectionner une ville</option>
                    <option v-for="ville in villesList" :key="ville.id" :value="ville">
                      {{ ville.nom }} ({{ ville.zone?.destination }})
                    </option>
                  </select>
                </div>
                <div class="col-6 mb-3 mt-3">
                  <label>Quartier de livraison</label>
                  <select class="form-control" v-model="selectedQuartier" @change="onQuartierChange" :disabled="!selectedVille">
                    <option value="">Sélectionner un quartier</option>
                    <option v-for="quartier in quartiersList" :key="quartier.id" :value="quartier">
                      {{ quartier.nom }}
                    </option>
                  </select>
                </div>
                
                <div class="col-6 mb-3 mt-3">
                  <label>Adresse de départ</label>
                  <input type="text" class="form-control" v-model="form.adresseDepart" placeholder="Adresse de départ" />
                </div>
                <div class="col-6 mb-3 mt-3">
                  <label>Adresse de livraison</label>
                  <input type="text" class="form-control" v-model="form.adresseLivraison" placeholder="Adresse de livraison" />
                </div>
                <div class="col-6 mb-3">
                  <label>Montant total</label>
                  <input type="number" class="form-control" v-model="form.montantTotal" placeholder="Montant" />
                </div>
                <div class="col-6 mb-3">
                  <label>Type Course</label>
                  <select class="form-control" v-model="form.typeCourse">
                    <option value="">Sélectionner le type</option>
                    <option value="LIVRAISON_COLIS">Livraion de Colis</option>
                    <option value="PRESTATION_SERVICES">Prestation de Services</option>
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
                  <label>Nom Destinataire</label>
                  <input type="text" class="form-control" v-model="form.nomDestinataire" />
                </div>
                <div class="col-6 mb-3">
                  <label>Frais de Livraison</label>
                  <input type="number" class="form-control" v-model="form.fraisLivraison" />
                </div>
                <div class="col-6 mb-3">
                  <label>Règlement</label>
                  <select class="form-control" v-model="form.reglement">
                    <option value="">Sélectionner le Règlement</option>
                    <option value="CLIENT">Client</option>
                    <option value="DESTINATAIRE">Destinataire</option>
                  </select>
                </div>
                <div class="col-6 mb-3">
                  <label>Frais à Restituer</label>
                  <input type="number" class="form-control" v-model="form.fraisRestituer" />
                </div>
                <div class="col-6 mb-3">
                  <label>Téléphone Destinataire</label>
                  <input type="text" class="form-control" v-model="form.telephoneDestinataire" placeholder="01XXXXXXXX" />
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
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i class="bi-x"></i> Fermer</button>
              <button type="button" @click="addCourse" class="btn btn-primary ms-2"><i class="bi-check"></i> Ajouter</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modale détails -->
    <div class="modal fade" id="courseDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="courseDetailsLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4">
          <div class="modal-header bg-primary text-white rounded-top-4">
            <h5 class="mb-0" id="courseDetailsLabel"><i class="bi bi-truck"></i> Détails de la Course</h5>
            <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div class="modal-body">
            <!-- Section infos principales -->
            <div class="p-3 mb-3 bg-light rounded-3">
              <div class="row">
                <div class="col-md-6 mb-2"><strong>Client :</strong> {{ selectedCourse?.client?.nom }} {{ selectedCourse?.client?.prenom }}</div>
                <div class="col-md-6 mb-2"><strong>Livreur :</strong> {{ selectedCourse?.livreur?.nom }} {{ selectedCourse?.livreur?.prenom }}</div>
                <div class="col-md-6 mb-2"><i class="bi bi-geo-alt"></i> <strong>Départ :</strong> {{ selectedCourse?.adresseDepart || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><i class="bi bi-geo-alt-fill"></i> <strong>Livraison :</strong> {{ selectedCourse?.adresseLivraison || 'Non renseigné' }}</div>
              </div>
            </div>

            <!-- Section paiement / statut -->
            <div class="p-3 mb-3 bg-light rounded-3">
              <div class="row">
                <div class="col-md-6 mb-2"><i class="bi bi-cash"></i> <strong>Montant :</strong> {{ selectedCourse?.montantTotal || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><strong>Statut Paiement :</strong> {{ selectedCourse?.statutPaiement || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><strong>Statut Course :</strong> {{ selectedCourse?.statutCourse || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><strong>Type Course :</strong> {{ selectedCourse?.typeCourse || 'Non renseigné' }}</div>
              </div>
            </div>

            <!-- Section destinataire -->
            <div class="p-3 mb-3 bg-light rounded-3">
              <div class="row">
                <div class="col-md-6 mb-2"><strong>Destinataire :</strong> {{ selectedCourse?.nomDestinataire || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><strong>Tél :</strong> {{ selectedCourse?.telephoneDestinataire || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><strong>Frais Livraison :</strong> {{ selectedCourse?.fraisLivraison || 'Non renseigné' }}</div>
                <div class="col-md-6 mb-2"><strong>Frais à restituer :</strong> {{ selectedCourse?.fraisRestituer || 'Non renseigné' }}</div>
              </div>
            </div>

            <!-- Section moto -->
            <div class="p-3 mb-3 bg-light rounded-3">
              <h6><i class="bi bi-bicycle"></i> Moto Utilisée</h6>
              <div v-if="loadingMoto" class="text-center py-3">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Chargement...</span>
                </div>
                <p class="mt-2 text-muted">Chargement des informations de la moto...</p>
              </div>
              <div v-else class="row">
                <div class="col-md-4 mb-2"><strong>Marque :</strong> {{ selectedCourse?.moto?.marque || 'Non renseigné' }}</div>
                <div class="col-md-4 mb-2"><strong>Modèle :</strong> {{ selectedCourse?.moto?.modele || 'Non renseigné' }}</div>
                <div class="col-md-4 mb-2"><strong>Matricule :</strong> {{ selectedCourse?.moto?.matricule || 'Non renseigné' }}</div>
              </div>
            </div>

            <!-- Section temps -->
            <div class="p-3 mb-3 bg-light rounded-3">
              <h6><i class="bi bi-clock"></i> Temps de Course</h6>
              <p class="mb-0">
                <span v-if="selectedCourse?.dateHeureCommande && selectedCourse?.dateHeureLivraison">
                  {{ getCourseDuration(selectedCourse.dateHeureCommande, selectedCourse.dateHeureLivraison) }}
                </span>
                <span v-else>Non renseigné</span>
              </p>
            </div>

            <!-- Commentaire -->
            <div class="p-3 mb-3 bg-light rounded-3">
              <strong>Détails :</strong>
              <p>{{ selectedCourse?.commentaire || 'Non renseigné' }}</p>
            </div>

            <!-- Actions -->
            <div v-if="selectedCourse?.statutCourse === 'EN_COURS' || selectedCourse?.statutPaiement === 'EN_ATTENTE'" class="text-center">
              <button v-if="selectedCourse?.statutCourse === 'EN_COURS'" @click="marquerTerminer(selectedCourse.id)" class="btn btn-primary mx-2">
                <i class="fas fa-check"></i> Marquer comme terminé
              </button>
              <button v-if="selectedCourse?.statutPaiement === 'EN_ATTENTE'" @click="payementEffectuer(selectedCourse.id)" class="btn btn-success mx-2">
                <i class="fas fa-money-bill-wave"></i> Paiement effectué
              </button>
            </div>
          </div>

          <div class="modal-footer border-0 pt-0">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i class="bi-x"></i> Fermer</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Courses</h1>
      <div>
        <a @click="exportToPDF" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm me-2">
          <i class="fas fa-file-pdf"></i> Exporter en PDF
        </a>
        <a @click="openModal" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Nouvelle Course</a>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <form class="row g-3 align-items-end">
          <div class="col-md-3">
            <label for="filterNumeroCommande" class="form-label">Numéro Commande</label>
            <input type="text" class="form-control" id="filterNumeroCommande" v-model="filterNumeroCommande" />
          </div>
          <div class="col-md-3">
            <label for="filterLivreur" class="form-label">Livreur</label>
            <select class="form-control" id="filterLivreur" v-model="filterLivreur">
              <option value="">Tous</option>
              <option v-for="livreur in livreurs" :key="livreur.id" :value="livreur.id"> <!-- MODIF : Ajout :key -->
                {{ livreur.nom }} {{ livreur.prenom }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="filterClient" class="form-label">Client</label>
            <select class="form-control" id="filterClient" v-model="filterClient">
              <option value="">Tous</option>
              <option v-for="client in clients" :key="client.id" :value="client.id">  <!-- MODIF : Ajout :key -->
                {{ client.nom }} {{ client.prenom }}
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="filterStatutCourse" class="form-label">Statut Course</label>
            <select class="form-control" id="filterStatutCourse" v-model="filterStatutCourse">
              <option value="">Tous</option>
              <option value="EN_ATTENTE">En Attente</option>  <!-- MODIF : Ajout valeur manquante -->
              <option value="EN_COURS">En Cours</option>
              <option value="LIVREE">Livrée</option>
              <option value="ANNULEE">Annulée</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="filterStatutPaiement" class="form-label">Statut Paiement</label>
            <select class="form-control" id="filterStatutPaiement" v-model="filterStatutPaiement">
              <option value="">Tous</option>
              <option value="EN_ATTENTE">En Attente</option>
              <option value="EFFECTUE">Effectué</option>
              <option value="ANNULE">Annulé</option>
            </select>
          </div>
          <div class="col-md-3 mt-2">
            <label for="filterTypeCourse" class="form-label">Type Course</label>
            <select class="form-control" id="filterTypeCourse" v-model="filterTypeCourse">
              <option value="">Tous</option>
              <option value="TRANSMISSION_PRODUITS">Transmission de produits</option>
              <option value="FOURNITURE_SERVICES">Fourniture de services</option>
            </select>
          </div>
          <div class="col-md-3 mt-2">
            <label for="filterDateCommandeAfter" class="form-label">Commande après</label>
            <input type="date" class="form-control" id="filterDateCommandeAfter" v-model="filterDateCommandeAfter" />
          </div>
          <div class="col-md-3 mt-2">
            <label for="filterDateCommandeBefore" class="form-label">Commande avant</label>
            <input type="date" class="form-control" id="filterDateCommandeBefore" v-model="filterDateCommandeBefore" />
          </div>
          <div class="col-md-3 mt-2">
            <label for="filterMontantMin" class="form-label">Montant min</label>
            <input type="number" class="form-control" id="filterMontantMin" v-model="filterMontantMin" />
          </div>
          <div class="col-md-3 mt-2">
            <label for="filterMontantMax" class="form-label">Montant max</label>
            <input type="number" class="form-control" id="filterMontantMax" v-model="filterMontantMax" />
          </div>
          <div class="col-md-3 mt-2">
            <button type="button" class="btn btn-primary w-100" @click="onSearch(1)">Filtrer</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Table des courses -->
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
                <th>Numero Commande</th>
                <th>Livreur</th>
                <th>Client</th>
                <th>Adresse départ</th>
                <th>Destinataire</th>
                <th>Montant</th>
                <th>Statut Course</th>
                <th>Statut Paiement</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filterItems" :key="item.id">  <!-- MODIF : Ajout :key -->
                <td>{{ index + 1 }}</td>
                <td>{{ item.numeroCommande }}</td>
                <td>{{ item.livreur.nom }} {{ item.livreur.prenom }}</td>
                <td>{{ item.client.nom }} {{ item.client.prenom }}</td>
                <td>{{ item.adresseDepart }}</td>
                <td>{{ item.nomDestinataire }}</td>
                <td>{{ item.montantTotal }}</td>
                <td>
                  <span class="badge badge-secondary" v-if="item.statutCourse == 'EN_ATTENTE'">En Attente</span>  <!-- MODIF : Correction badge 'badge-secondary' -->
                  <span class="badge badge-warning" v-if="item.statutCourse == 'EN_COURS'">En Cours</span>
                  <span class="badge badge-success" v-if="item.statutCourse == 'LIVREE'">Livrée</span>
                  <span class="badge badge-danger" v-if="item.statutCourse == 'ANNULEE'">Annulée</span>
                </td>
                <td>
                  <span class="badge badge-warning" v-if="item.statutPaiement == 'EN_ATTENTE'">En Attente</span>
                  <span class="badge badge-success" v-if="item.statutPaiement == 'EFFECTUE'">Effectué</span>
                  <span class="badge badge-danger" v-if="item.statutPaiement == 'ANNULE'">Annulé</span>
                </td>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" @click="editItem(item)" class="btn btn-primary">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" @click="deleteItem(item.id)" class="btn btn-danger" v-if="isSuperAdmin">
                      <i class="fas fa-trash"></i>
                    </button>
                    <button type="button" @click="showDetails(item)" class="btn btn-info">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <PaginationNew
            :currentPage="items.number + 1"
            :totalPages="items.totalPages"
            :totalItems="items.totalElements || 0"
            :onPageChange="onSearch"
          />
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
import moment from "moment";

export default {
    components: {
        PaginationNew
    },
    name: 'courses',
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
            typeCourse: '',
            typePaiement: '',
            commentaire: '',
            nomDestinataire: '',
            telephoneDestinataire: '',
            fraisLivraison: '',
            reglement: '',
            fraisRestituer: ''
        },
        clients: [],
        livreurs: [],
        loading: false,
        loadingMoto: false,
        modalInstance: null,
        selectedCourse: null,
        // Données pour la recherche d'adresse
        selectedVille: null,
        selectedQuartier: null,
        villesList: [],
        quartiersList: []
    }),
    computed: {
        ...mapGetters({ items: 'courses/all' }),
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
        formatDate(date) {
            return date ? moment(date).format('LLL') : '';
        },
        resetForm() {
            this.form = {
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
                telephoneDestinataire: '',
                fraisLivraison: '',
                reglement: '',
                fraisRestituer: ''
            };
            // Réinitialiser les sélections d'adresse
            this.selectedVille = null;
            this.selectedQuartier = null;
            this.quartiersList = [];
            this.form.montantTotal = '';
            this.openModal();
        },
        openModal() {
          document.body.appendChild(document.getElementById('courseModal'));
          const modal = new bootstrap.Modal(document.getElementById('courseModal'));
          modal.show();
        },
        closeModal() {
          const modalElement = document.getElementById('courseModal');
          const hiddenHandler = () => {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.style.display = 'none';
          };
          modalElement.addEventListener('hidden.bs.modal', hiddenHandler, { once: true });
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        },
        openClientModal() {
          const courseModal = bootstrap.Modal.getInstance(document.getElementById('courseModal'));
          courseModal.hide();
          setTimeout(() => {
            const clientModal = new bootstrap.Modal(document.getElementById('postModal'));
            clientModal.show();
          }, 400); 
        },
        afterClientAdded() {
          const clientModal = bootstrap.Modal.getInstance(document.getElementById('postModal'));
          clientModal.hide();
          setTimeout(() => {
            const courseModal = new bootstrap.Modal(document.getElementById('courseModal'));
            courseModal.show();
          }, 400);
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
                this.loadClients();
                this.afterClientAdded();

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
        async showDetails(item) {
            this.selectedCourse = item;
            this.loadingMoto = true;
            
            document.body.appendChild(document.getElementById('courseDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('courseDetailsModal'));
            modal.show();
            
            // Récupérer la moto utilisée pour cette course
            try {
                const motoUtilisee = await this.$store.dispatch('courses/getMotoUtilisee', item.id);
                // Mettre à jour la course avec les informations de la moto
                this.selectedCourse = {
                    ...item,
                    moto: motoUtilisee
                };
            } catch (error) {
                console.error('Erreur lors de la récupération de la moto utilisée:', error);
                // En cas d'erreur, on garde les données de base sans la moto
                ElNotification({
                    title: 'Attention',
                    message: 'Impossible de récupérer les informations de la moto utilisée.',
                    type: 'warning',
                    duration: 3000
                });
            } finally {
                this.loadingMoto = false;
            }
        },
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,desc",
                livreurId: this.filterLivreur,
                clientId: this.filterClient,
                numeroCommande: this.filterNumeroCommande,
                statutCourse: this.filterStatutCourse,
                statutPaiement: this.filterStatutPaiement,
                typeCourse: this.filterTypeCourse, 
                dateCommandeAfter: this.filterDateCommandeAfter, 
                dateCommandeBefore: this.filterDateCommandeBefore, 
                montantMin: this.filterMontantMin, 
                montantMax: this.filterMontantMax, 
            };
            this.$store.dispatch('courses/getAllP', params)
                .then((response) => {
                });
        },
        // Méthodes pour la recherche d'adresse
        async fetchVilles() {
            try {
                const res = await this.$store.dispatch('villes/getAllP', { page: 0, size: 100 });
                this.villesList = res.content || [];
            } catch (error) {
                console.error('Erreur lors du chargement des villes:', error);
            }
        },
        async onVilleChange() {
            this.selectedQuartier = null;
            this.quartiersList = [];
            this.form.adresseLivraison = '';
            this.form.montantTotal = '';
            
            if (this.selectedVille) {
                try {
                    const res = await this.$store.dispatch('quartiers/getByVille', this.selectedVille.id);
                    this.quartiersList = res || [];
                } catch (error) {
                    console.error('Erreur lors du chargement des quartiers:', error);
                    ElNotification({
                        title: 'Erreur',
                        message: 'Impossible de charger les quartiers pour cette ville.',
                        type: 'error',
                        duration: 3000
                    });
                }
            }
        },
        onQuartierChange() {
            if (this.selectedQuartier && this.selectedVille) {
                // Construire l'adresse complète : Quartier, Ville, Zone
                const adresse = `${this.selectedQuartier.nom}, ${this.selectedVille.nom} (${this.selectedVille.zone?.destination})`;
                this.form.adresseLivraison = adresse;
                
                // Remplir automatiquement le montant total avec le tarif de la zone
                if (this.selectedVille.zone && this.selectedVille.zone.tarif) {
                    this.form.montantTotal = this.selectedVille.zone.tarif;
                }
            } else {
                this.form.adresseLivraison = '';
                this.form.montantTotal = '';
            }
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
        async marquerTerminer(courseId) {
          const result = await Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: "De marquer cette course comme terminée ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, terminer',
            cancelButtonText: 'Annuler'
          });
          if (result.isConfirmed) {
            try {
              await this.$store.dispatch('courses/terminer', courseId);
              ElNotification({
                  title: 'Succès',
                  message: 'Course marquée comme terminée avec succès.',
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
        async payementEffectuer(courseId) {
          const result = await Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: "De marquer le paiement de cette course comme effectué ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, effectuer',
            cancelButtonText: 'Annuler'
          });
          if (result.isConfirmed) {
            try {
              await this.$store.dispatch('courses/payementEffectuer', courseId);
              ElNotification({
                  title: 'Succès',
                  message: 'Paiement effectué avec succès.',
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
        editItem(role) {
            this.form = { ...role };
            this.openModal();
        },
        // AJOUT : Méthode pour simuler l’exportation en PDF
        exportToPDF() {
            console.log('Exportation en PDF des courses :', this.filterItems);
            ElNotification({
                title: 'Exportation',
                message: 'Lancement de l’exportation des courses en PDF... (API à implémenter)',
                type: 'info',
                duration: 3000
            });
        },
        // FIN AJOUT
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
        },
        getAllLivreursActive() {
          const statut = 'ACTIF';
          this.$store.dispatch('livreurs/getAllLivreurActive', statut)
            .then((response) => {
                this.livreurs = response;
            });
        },
        getCourseDuration(start, end) {
          if (!start || !end) return 'Non renseigné';
          const startDate = moment(start);
          const endDate = moment(end);
          const duration = moment.duration(endDate.diff(startDate));
          const hours = Math.floor(duration.asHours());
          const minutes = duration.minutes();
          const seconds = duration.seconds();
          let result = '';
          if (hours > 0) result += `${hours}h `;
          if (minutes > 0) result += `${minutes}min `;
          if (seconds > 0 || (!hours && !minutes)) result += `${seconds}s`;
          return result.trim();
        },
    },
    created() {
        this.onSearch();
        this.loadClients();
        this.getAllLivreursActive();
        this.fetchVilles();
    }
}
</script>