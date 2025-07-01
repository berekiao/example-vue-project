<template>
    <div class="container-fluid">

        <!-- Modale existante pour ajout/modification -->
        <div class="modal fade" id="utilisateurModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="utilisateurLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="utilisateurLabel">Ajouter un Utilisateur</h5>
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
                                        <input type="text" class="form-control" id="nom" placeholder="Nom" v-model="form.nom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="prenom" class="form-label">Prénom</label>
                                        <input type="text" class="form-control" id="prenom" placeholder="Prénom" v-model="form.prenom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="contact" placeholder="Téléphone" v-model="form.contact">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Adresse email" v-model="form.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="role" class="form-label">Rôle</label>
                                        <select class="form-control" id="role" v-model="form.role">
                                            <option value="admin">Admin</option>
                                            <option value="superadmin">Superadmin</option>
                                        </select>
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

        <!-- Modale pour afficher les détails de l’utilisateur -->
        <div class="modal fade" id="utilisateurDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="utilisateurDetailsLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="utilisateurDetailsLabel">Détails de l’Utilisateur</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Nom</label>
                                    <p>{{ selectedUtilisateur?.nom || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Prénom</label>
                                    <p>{{ selectedUtilisateur?.prenom || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Contact</label>
                                    <p>{{ selectedUtilisateur?.contact || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <p>{{ selectedUtilisateur?.email || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Rôle</label>
                                    <p>{{ selectedUtilisateur?.role || 'Non renseigné' }}</p>
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
            <h1 class="h3 mb-0 text-gray-800">Utilisateurs</h1>
            <a href="#" @click="openModal" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouvel Utilisateur</a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-3">
                        <label for="filterNom" class="form-label">Nom & Prénom</label>
                        <input type="text" class="form-control" id="filterNom" placeholder="Rechercher un nom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterContact" class="form-label">Contact</label>
                        <input type="text" class="form-control" id="filterContact" placeholder="Contact">
                    </div>
                    <div class="col-md-3">
                        <label for="filterStructure" class="form-label">Email</label>
                        <input type="text" class="form-control" id="filterEmail" placeholder="Email">
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Role</label>
                        <select class="form-control" id="filterStatut">
                            <option value="">Tous</option>
                            <option value="actif">Admin</option>
                            <option value="inactif">Superadmin</option>
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Utilisateurs</h6>
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
                                <th>Rôle</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ahossi</td>
                                <td>Judith</td>
                                <td>97000001</td>
                                <td>judith@example.com</td>
                                <td><span class="badge badge-success">Admin</span></td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour le bouton Supprimer -->
                                        <button class="btn btn-primary" @click="updateUtilisateur({ id: 1, nom: 'Ahossi', prenom: 'Judith', contact: '97000001', email: 'judith@example.com', role: 'admin' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deleteUtilisateur({ id: 1, nom: 'Ahossi', prenom: 'Judith' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 1, nom: 'Ahossi', prenom: 'Judith', contact: '97000001', email: 'judith@example.com', role: 'Admin' })"><i class="fas fa-eye"></i></button>
                                        <!-- FIN AJOUT -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kouassi</td>
                                <td>David</td>
                                <td>97000002</td>
                                <td>kouassi.david@example.com</td>
                                <td><span class="badge badge-info">Superadmin</span></td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour le bouton Supprimer -->
                                        <button class="btn btn-primary" @click="updateUtilisateur({ id: 2, nom: 'Kouassi', prenom: 'David', contact: '97000002', email: 'kouassi.david@example.com', role: 'superadmin' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deleteUtilisateur({ id: 2, nom: 'Kouassi', prenom: 'David' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 2, nom: 'Kouassi', prenom: 'David', contact: '97000002', email: 'kouassi.david@example.com', role: 'Superadmin' })"><i class="fas fa-eye"></i></button>
                                        <!-- FIN AJOUT -->
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
import { ElNotification } from "element-plus"; // AJOUT : Importation d’ElNotification
import Swal from 'sweetalert2'; // AJOUT : Importation de SweetAlert2

export default {
    data() {
        return {
            selectedUtilisateur: null,
            form: {
                nom: "",
                prenom: "",
                contact: "",
                email: "",
                role: "admin"
            }
        };
    },
    methods: {
        openModal() {
            document.body.appendChild(document.getElementById('utilisateurModal'));
            const modal = new bootstrap.Modal(document.getElementById('utilisateurModal'));
            modal.show();
        },
        updateUtilisateur(item) {
            this.form = { ...item };
            this.openModal();
        },
        showDetails(item) {
            this.selectedUtilisateur = item;
            document.body.appendChild(document.getElementById('utilisateurDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('utilisateurDetailsModal'));
            modal.show();
        },
        // AJOUT : Méthode pour gérer la suppression d’un utilisateur
        async deleteUtilisateur(item) {
            const result = await Swal.fire({
                title: 'Êtes-vous sûr ?',
                text: `Voulez-vous vraiment supprimer l’utilisateur "${item.nom} ${item.prenom}" ? Cette action est irréversible !`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer',
                cancelButtonText: 'Annuler'
            });
            if (result.isConfirmed) {
                try {
                    // Simulation de la suppression (pas de Vuex, données statiques)
                    console.log(`Suppression de l’utilisateur avec ID: ${item.id}`);
                    ElNotification({
                        title: 'Succès',
                        message: `L’utilisateur "${item.nom} ${item.prenom}" a été supprimé avec succès.`,
                        type: 'success',
                        duration: 3000
                    });
                } catch (error) {
                    console.error('Erreur lors de la suppression :', error);
                    ElNotification({
                        title: 'Erreur',
                        message: 'Impossible de supprimer l’utilisateur.',
                        type: 'error',
                        duration: 3000
                    });
                }
            }
        },
        // FIN AJOUT
    },
    setup() {
        const openModal = () => {
            document.body.appendChild(document.getElementById('utilisateurModal'));
            const modal = new bootstrap.Modal(document.getElementById('utilisateurModal'));
            modal.show();
        }

        // Function to handle adding a new post
        const addPost = () => {
            console.log("New post added");
        };

        return {
            addPost
        };
    }
}
</script>

<style lang="scss" scoped></style>