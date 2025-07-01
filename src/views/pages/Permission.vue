<template>
    <div class="container-fluid">

        <!-- Modale existante pour ajout/modification -->
        <div class="modal fade" id="permissionModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="permissionLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="permissionLabel">Créer une Permission</h5>
                        <!-- AJOUT : Correction de la croix pour fermer la modale -->
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <!-- FIN AJOUT -->
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <!-- AJOUT : Ajout de v-model pour lier l’input au form -->
                                <label for="libellePermission" class="form-label">Libellé</label>
                                <input type="text" class="form-control" id="libellePermission"
                                    placeholder="Ex : Gérer les utilisateurs" v-model="form.libelle">
                                <!-- FIN AJOUT -->
                            </div>
                            <div class="mb-3">
                                <!-- AJOUT : Ajout de v-model pour lier le textarea au form -->
                                <label for="descriptionPermission" class="form-label">Description</label>
                                <textarea class="form-control" id="descriptionPermission" rows="3"
                                    placeholder="Description de la permission" v-model="form.description"></textarea>
                                <!-- FIN AJOUT -->
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

        <!-- AJOUT : Nouvelle modale pour afficher les détails de la permission -->
        <div class="modal fade" id="permissionDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="permissionDetailsLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="permissionDetailsLabel">Détails de la Permission</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <label class="form-label">Libellé</label>
                                <p>{{ selectedPermission?.libelle || 'Non renseigné' }}</p>
                            </div>
                            <div class="col-12 mb-3">
                                <label class="form-label">Description</label>
                                <p>{{ selectedPermission?.description || 'Non renseigné' }}</p>
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
        <!-- FIN AJOUT -->

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Permission</h1>
            <!-- AJOUT : Remplacement de data-toggle par @click pour ouvrir la modale -->
            <a href="#" @click="openModal" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouvelle Permission</a>
            <!-- FIN AJOUT -->
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

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Liste des Permissions</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="permissionsTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Libellé</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Créer un utilisateur</td>
                                <td>Permet de créer un nouvel utilisateur dans le système</td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour Modifier, Supprimer et Détails -->
                                        <button class="btn btn-primary" @click="updatePermission({ id: 1, libelle: 'Créer un utilisateur', description: 'Permet de créer un nouvel utilisateur dans le système' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deletePermission({ id: 1, libelle: 'Créer un utilisateur' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 1, libelle: 'Créer un utilisateur', description: 'Permet de créer un nouvel utilisateur dans le système' })"><i class="fas fa-eye"></i></button>
                                        <!-- FIN AJOUT -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Modifier un utilisateur</td>
                                <td>Autorise la modification des informations d'un utilisateur</td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour Modifier, Supprimer et Détails -->
                                        <button class="btn btn-primary" @click="updatePermission({ id: 2, libelle: 'Modifier un utilisateur', description: 'Autorise la modification des informations d\'un utilisateur' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deletePermission({ id: 2, libelle: 'Modifier un utilisateur' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 2, libelle: 'Modifier un utilisateur', description: 'Autorise la modification des informations d\'un utilisateur' })"><i class="fas fa-eye"></i></button>
                                        <!-- FIN AJOUT -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Supprimer un utilisateur</td>
                                <td>Permet de supprimer un utilisateur de la plateforme</td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour Modifier, Supprimer et Détails -->
                                        <button class="btn btn-primary" @click="updatePermission({ id: 3, libelle: 'Supprimer un utilisateur', description: 'Permet de supprimer un utilisateur de la plateforme' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deletePermission({ id: 3, libelle: 'Supprimer un utilisateur' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 3, libelle: 'Supprimer un utilisateur', description: 'Permet de supprimer un utilisateur de la plateforme' })"><i class="fas fa-eye"></i></button>
                                        <!-- FIN AJOUT -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Gérer les paiements</td>
                                <td>Accès à la gestion des paiements et règlements</td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour Modifier, Supprimer et Détails -->
                                        <button class="btn btn-primary" @click="updatePermission({ id: 4, libelle: 'Gérer les paiements', description: 'Accès à la gestion des paiements et règlements' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deletePermission({ id: 4, libelle: 'Gérer les paiements' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 4, libelle: 'Gérer les paiements', description: 'Accès à la gestion des paiements et règlements' })"><i class="fas fa-eye"></i></button>
                                        <!-- FIN AJOUT -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Attribuer une moto</td>
                                <td>Peut affecter une moto à un livreur</td>
                                <td>
                                    <div class="btn-group">
                                        <!-- AJOUT : Ajout de @click pour Modifier, Supprimer et Détails -->
                                        <button class="btn btn-primary" @click="updatePermission({ id: 5, libelle: 'Attribuer une moto', description: 'Peut affecter une moto à un livreur' })"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="deletePermission({ id: 5, libelle: 'Attribuer une moto' })"><i class="fas fa-trash"></i></button>
                                        <button class="btn btn-info" @click="showDetails({ id: 5, libelle: 'Attribuer une moto', description: 'Peut affecter une moto à un livreur' })"><i class="fas fa-eye"></i></button>
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
    // AJOUT : Ajout de data et methods pour gérer Modifier, Supprimer et Détails
    data() {
        return {
            selectedPermission: null,
            form: {
                libelle: "",
                description: ""
            }
        };
    },
    methods: {
        // AJOUT : Méthodes pour ouvrir la modale, modifier, supprimer et afficher les détails
        openModal() {
            document.body.appendChild(document.getElementById('permissionModal'));
            const modal = new bootstrap.Modal(document.getElementById('permissionModal'));
            modal.show();
        },
        updatePermission(item) {
            this.form = { ...item };
            this.openModal();
        },
        deletePermission(item) {
            Swal.fire({
                title: 'Êtes-vous sûr ?',
                text: `Voulez-vous vraiment supprimer la permission "${item.libelle}" ? Cette action est irréversible !`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        // Simulation de la suppression (pas de Vuex, données statiques)
                        console.log(`Suppression de la permission avec ID: ${item.id}`);
                        ElNotification({
                            title: 'Succès',
                            message: `La permission "${item.libelle}" a été supprimée avec succès.`,
                            type: 'success',
                            duration: 3000
                        });
                    } catch (error) {
                        console.error('Erreur lors de la suppression :', error);
                        ElNotification({
                            title: 'Erreur',
                            message: 'Impossible de supprimer la permission.',
                            type: 'error',
                            duration: 3000
                        });
                    }
                }
            });
        },
        showDetails(item) {
            this.selectedPermission = item;
            document.body.appendChild(document.getElementById('permissionDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('permissionDetailsModal'));
            modal.show();
        },
        // FIN AJOUT
    },
    setup() {
        const openModal = () => {
            // AJOUT : Correction de l’ID du modal (postModal -> permissionModal)
            document.body.appendChild(document.getElementById('permissionModal'));
            // FIN AJOUT
            const modal = new bootstrap.Modal(document.getElementById('permissionModal'));
            modal.show();
        }

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