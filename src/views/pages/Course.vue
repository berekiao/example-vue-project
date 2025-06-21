<template>
    <div class="container-fluid">

        <div class="modal fade" id="postModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
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
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="title">Livraison</label>
                                        <input type="text" class="form-control" id="title" placeholder="Livraison">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="livreur">Livreur</label>
                                        <select class="form-control" id="livreur">
                                            <option value="0">Sélectionner un livreur</option>
                                            <option value="1">Thoñas Doe</option>
                                            <option value="2">Gui Frehu</option>
                                            <option value="3">Beno Doe</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="client">Client</label>
                                        <select class="form-control" id="client">
                                            <option value="0">Sélectionner le Client</option>
                                            <option value="1">Amos Ploi</option>
                                            <option value="2">Frued Djadi</option>
                                            <option value="3">Loic Dossier</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="adresse">Adresse de départ</label>
                                        <input type="text" class="form-control" id="adresse"
                                            placeholder="Adresse de départ">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="livraison">Adresse de livraison</label>
                                        <input type="text" class="form-control" id="livraison"
                                            placeholder="Adresse de livraison">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="montant">Montant</label>
                                        <input type="number" class="form-control" id="montant"
                                            placeholder="Montant de la course">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="statut">Statut</label>
                                        <select class="form-control" id="statut">
                                            <option value="en_cours">En Cours</option>
                                            <option value="termine">Terminé</option>
                                            <option value="annule">Annulé</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="date">Date de la course</label>
                                        <input type="date" class="form-control" id="date">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="heure">Heure de la course</label>
                                        <input type="time" class="form-control" id="heure">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="client">Mode de Paiement</label>
                                        <select class="form-control" id="client">
                                            <option value="0">Sélectionner le Mode de Paiement</option>
                                            <option value="1">Mobile Money (MOMO)</option>
                                            <option value="2">Espèces</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <textarea class="form-control" id="description" rows="3"
                                            placeholder="Description de la course"></textarea>
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
            <h1 class="h3 mb-0 text-gray-800">Courses</h1>
            <a href="#" data-toggle="modal" data-target="#postModal"
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
                                <th>Livraison</th>
                                <th>Montant</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tiger Nixon</td>
                                <td>Thomas Mollis</td>
                                <td>Cotonou, Kowégbo</td>
                                <td>Ordinateur Portatif</td>
                                <td>15000 XOF</td>
                                <td>
                                    <span class="badge badge-warning">En Cours</span>
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
                                <td>John Doe</td>
                                <td>Cotonou, Akpakpa</td>
                                <td>Livres</td>
                                <td>5000 XOF</td>
                                <td>
                                    <span class="badge badge-success">Terminé</span>
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
                                <td>Jane Smith</td>
                                <td>Cotonou, Akpakpa</td>
                                <td>Vêtements</td>
                                <td>8000 XOF</td>
                                <td>
                                    <span class="badge badge-danger">Annulé</span>
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
                                <td>Michael Johnson</td>
                                <td>Cotonou, Akpakpa</td>
                                <td>Meubles</td>
                                <td>20000 XOF</td>
                                <td>
                                    <span class="badge badge-success">Terminé</span>
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
                                <td>5</td>
                                <td>Airi Satou</td>
                                <td>Airi Satou</td>
                                <td>Cotonou, Kowégbo</td>
                                <td>Ordinateur Portatif</td>
                                <td>15000 XOF</td>
                                <td>
                                    <span class="badge badge-warning">En Cours</span>
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
                                <td>6</td>
                                <td>Ashton Cox</td>
                                <td>Jane Smith</td>
                                <td>Cotonou, Sikekodji</td>
                                <td>Data Center</td>
                                <td>15000 XOF</td>
                                <td>
                                    <span class="badge badge-success">Terminé</span>
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
                                <td>7</td>
                                <td>Ashton Cox</td>
                                <td>Jane Smith</td>
                                <td>Cotonou, Kowégbo</td>
                                <td>Imprimante</td>
                                <td>15000 XOF</td>
                                <td>
                                    <span class="badge badge-success">Terminé</span>
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