<template>
    <div class="container-fluid">

        <div class="modal fade" id="postModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="sousLabel">Client</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="nom" class="form-label">Nom & Prénom</label>
                                        <input type="text" class="form-control" id="nom" placeholder="Nom & Prénom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="contact"
                                            placeholder="Numéro de téléphone">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Adresse email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="structure" class="form-label">Structure</label>
                                        <input type="text" class="form-control" id="structure"
                                            placeholder="Nom de la structure">
                                    </div>
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut">
                                            <option value="actif">Actif</option>
                                            <option value="inactif">Inactif</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <div class="text-center mx-auto">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i
                                    class="bi-x"></i>Fermer</button>
                            <button type="button" class="btn btn-primary ms-2"><i class="bi-check"></i>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Clients</h1>
            <a href="#" data-toggle="modal" data-target="#postModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouveau Client</a>
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
                        <label for="filterStructure" class="form-label">Structure</label>
                        <input type="text" class="form-control" id="filterStructure" placeholder="Structure">
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Clients</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nom & Prénom</th>
                                <th>Contact </th>
                                <th>Email </th>
                                <th>Structure</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tiger Nixon</td>
                                <td>0190332211</td>
                                <td>tigernixon@yop.com</td>
                                <td>FEDAY</td>
                                <td>
                                    <span class="badge badge-success">Actif</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger"><i
                                                class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrett Winters</td>
                                <td>0190332211</td>
                                <td>tigernixon@yop.com</td>
                                <td>KOLI</td>
                                <td>
                                    <span class="badge badge-danger">Inactif</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger"><i
                                                class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ashton Cox</td>
                                <td>0190332211</td>
                                <td>tigernixon@yop.com</td>
                                <td>SOLUT TECH</td>
                                <td>
                                    <span class="badge badge-success">Actif</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger"><i
                                                class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Cedric Kelly</td>
                                <td>0190332211</td>
                                <td>tigernixon@yop.com</td>
                                <td>SOLUTION TECH</td>
                                <td>
                                    <span class="badge badge-success">Actif</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger"><i
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