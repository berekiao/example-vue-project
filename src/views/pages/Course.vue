<template>
  <div class="container-fluid">

    <!-- Modale ajout/modification -->
    <div class="modal fade" id="courseModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
      aria-hidden="true" style="backdrop-filter: blur(10px);">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-header border-0 pb-0 align-items-start">
            <h5 class="mb-0" id="sousLabel">Courses</h5>
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
                    <option v-for="client in clients" :key="client.id" :value="client">  <!-- MODIF : Ajout :key -->
                      {{ client.nom }} {{ client.prenom }}
                    </option>
                  </select>
                </div>
                <div class="col-6 mb-3">
                  <label>Livreur</label>
                  <select class="form-control" v-model="form.livreur">
                    <option value="">Sélectionner un livreur</option>
                    <option v-for="livreur in livreurs" :key="livreur.id" :value="livreur">  <!-- MODIF : Ajout :key -->
                      {{ livreur.nom }} {{ livreur.prenom }}
                    </option>
                  </select>
                </div>
                <div class="col-6 mb-3">
                  <label>Adresse de départ</label>
                  <input type="text" class="form-control" v-model="form.adresseDepart" placeholder="Adresse de départ" />
                </div>
                <div class="col-6 mb-3">
                  <label>Adresse de livraison</label>
                  <input type="text" class="form-control" v-model="form.adresseLivraison" placeholder="Adresse de livraison" />
                </div>
                <div class="col-6 mb-3">
                  <label>Montant total</label>
                  <input type="number" class="form-control" v-model="form.montantTotal" placeholder="Montant" />
                </div>
                <div class="col-6 mb-3">
                  <label>Statut Paiement</label>
                  <select class="form-control" v-model="form.statutPaiement">
                    <option value="">Sélectionner le statut</option>
                    <option value="EN_ATTENTE">En attente</option>  <!-- MODIF : ajout valeur manquante -->
                    <option value="EFFECTUE">Effectué</option>
                    <option value="ANNULE">Annulé</option>
                  </select>
                </div>
                <div class="col-6 mb-3">
                  <label>Statut Course</label>
                  <select class="form-control" v-model="form.statutCourse">
                    <option value="">Sélectionner le statut</option>
                    <option value="EN_ATTENTE">En attente</option>  <!-- MODIF : ajout valeur manquante -->
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
                  <input type="datetime-local" class="form-control" v-model="form.dateHeureCommande" />
                </div>
                <div class="col-6 mb-3">
                  <label>Nom Destinataire</label>
                  <input type="text" class="form-control" v-model="form.nomDestinataire" />
                </div>
                <div class="col-6 mb-3">
                  <label>Frais de Livraison</label>
                  <input type="text" class="form-control" v-model="form.fraisLivraison" />
                </div>
                <div class="col-6 mb-3">
                  <label>Règlement</label>
                  <input type="text" class="form-control" v-model="form.reglement" />
                </div>
                <div class="col-6 mb-3">
                  <label>Frais à Restituer</label>
                  <input type="text" class="form-control" v-model="form.fraisRestituer" />
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
    <div class="modal fade" id="courseDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="courseDetailsLabel"
      aria-hidden="true" style="backdrop-filter: blur(10px);">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-header border-0 pb-0 align-items-start">
            <h5 class="mb-0" id="courseDetailsLabel">Détails de la Course</h5>
            <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6 mb-3">
                <label class="form-label">Client</label>
                <p>{{ selectedCourse?.client?.nom }} {{ selectedCourse?.client?.prenom }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Livreur</label>
                <p>{{ selectedCourse?.livreur?.nom }} {{ selectedCourse?.livreur?.prenom }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Adresse de départ</label>
                <p>{{ selectedCourse?.adresseDepart || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Adresse de livraison</label>
                <p>{{ selectedCourse?.adresseLivraison || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Montant total</label>
                <p>{{ selectedCourse?.montantTotal || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Statut Paiement</label>
                <p>{{ selectedCourse?.statutPaiement || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Statut Course</label>
                <p>{{ selectedCourse?.statutCourse || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Type Course</label>
                <p>{{ selectedCourse?.typeCourse || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Type Paiement</label>
                <p>{{ selectedCourse?.typePaiement || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Date & Heure Commande</label>
                <p>{{ selectedCourse?.dateHeureCommande || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Nom Destinataire</label>
                <p>{{ selectedCourse?.nomDestinataire || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Frais de Livraison</label>
                <p>{{ selectedCourse?.fraisLivraison || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Règlement</label>
                <p>{{ selectedCourse?.reglement || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Frais à Restituer</label>
                <p>{{ selectedCourse?.fraisRestituer || 'Non renseigné' }}</p>
              </div>
              <div class="col-6 mb-3">
                <label class="form-label">Téléphone Destinataire</label>
                <p>{{ selectedCourse?.telephoneDestinataire || 'Non renseigné' }}</p>
              </div>
              <div class="col-12 mb-3">
                <label class="form-label">Détail Course</label>
                <p>{{ selectedCourse?.commentaire || 'Non renseigné' }}</p>
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
                    <button type="button" @click="deleteItem(item.id)" class="btn btn-danger">
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
        },
        clients: [],
        livreurs: [],
        loading: false,
        modalInstance: null,
        selectedCourse: null
    }),
    computed: {
        ...mapGetters({ items: 'courses/all' }),
        filterItems() {
            return this.items.content;
        }
    },
    methods: {
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
                if (backdrop) {
                    backdrop.style.display = 'none';
                }
            };
            modalElement.addEventListener('hidden.bs.modal', hiddenHandler, { once: true });
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
        },
        showDetails(item) {
            this.selectedCourse = item;
            document.body.appendChild(document.getElementById('courseDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('courseDetailsModal'));
            modal.show();
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
        }
    },
    created() {
        this.onSearch();
        this.loadClients();
        this.loadLivreurs();
    }
}
</script>