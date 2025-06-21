<template>
    <div class="container-fluid">

        <div class="modal fade" id="roleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="roleLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="roleLabel">Créer un Rôle</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="libelle" class="form-label">Libellé</label>
                                    <input type="text" class="form-control" id="libelle"
                                        placeholder="Ex : Administrateur">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="description" class="form-label">Description</label>
                                    <input type="text" class="form-control" id="description"
                                        placeholder="Description du rôle">
                                </div>
                                <div class="col-12 mb-3">
                                    <label class="form-label">Permissions</label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="perm1">
                                                <label class="form-check-label" for="perm1">
                                                    Créer un utilisateur
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="perm2">
                                                <label class="form-check-label" for="perm2">
                                                    Modifier un utilisateur
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="perm3">
                                                <label class="form-check-label" for="perm3">
                                                    Supprimer un utilisateur
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="perm4">
                                                <label class="form-check-label" for="perm4">
                                                    Gérer les paiements
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="perm5">
                                                <label class="form-check-label" for="perm5">
                                                    Gérer les motos
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="perm6">
                                                <label class="form-check-label" for="perm6">
                                                    Gérer les affectations
                                                </label>
                                            </div>
                                        </div>
                                        <!-- Ajoute plus si nécessaire -->
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
            <h1 class="h3 mb-0 text-gray-800">Rôle</h1>
            <a href="#" data-toggle="modal" data-target="#roleModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouveau Rôle</a>
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Rôles</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="rolesTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Libellé</th>
                                <th>Description</th>
                                <th>Permissions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Super Administrateur</td>
                                <td>Gère tous les accès</td>
                                <td>
                                    <ul>
                                        <li>Créer un utilisateur</li>
                                        <li>Modifier un utilisateur</li>
                                        <li>Gérer les paiements</li>
                                    </ul>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Administrateur</td>
                                <td>Gestion des motos et livreurs</td>
                                <td>
                                    <ul>
                                        <li>Gérer les motos</li>
                                        <li>Gérer les affectations</li>
                                    </ul>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <!-- Autres rôles -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    setup() {
        const openModal = () => {
            // Déplacer le modal 
            document.body.appendChild(document.getElementById('postModal'));

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById('postModal'));
            modal.show();
        }

        // Function to handle adding a new post
        const addPost = () => {
            // Logic to add a new post goes here
            console.log("New post added");
        };

        return {
            addPost
        };
    }
}
</script>

<style lang="scss" scoped></style>