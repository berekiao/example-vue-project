<template>
    <div class="container-fluid">

        <div class="modal fade" id="affectationModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="affectationLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="affectationLabel">Nouvelle Affectation</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">

                                    <div class="mb-3">
                                        <label for="moto" class="form-label">Moto</label>
                                        <select class="form-control" id="moto">
                                            <option selected disabled>Choisir une moto</option>
                                            <option value="1">BJ1234AB - Yamaha</option>
                                            <option value="2">BJ4321CD - Honda</option>
                                            <!-- À remplir dynamiquement -->
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="livreur" class="form-label">Livreur</label>
                                        <select class="form-control" id="livreur">
                                            <option selected disabled>Choisir un livreur</option>
                                            <option value="1">Jean Kouassi</option>
                                            <option value="2">Fatou Soglo</option>
                                            <!-- À remplir dynamiquement -->
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="dateDebut" class="form-label">Date de début</label>
                                        <input type="date" class="form-control" id="dateDebut">
                                    </div>

                                    <div class="mb-3">
                                        <label for="dateFin" class="form-label">Date de fin</label>
                                        <input type="date" class="form-control" id="dateFin">
                                    </div>

                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut">
                                            <option value="actif">Actif</option>
                                            <option value="termine">Terminé</option>
                                            <option value="annule">Annulé</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="observation" class="form-label">Observation</label>
                                        <textarea class="form-control" id="observation" rows="3"
                                            placeholder="Notes, remarques, etc."></textarea>
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
                                <i class="bi-check"></i> Affecter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Historique des affectations</h1>
            <a href="#" data-toggle="modal" data-target="#affectationModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouvelle Affectation
            </a>
        </div>

        <!-- Filtres Affectation -->
        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterLivreur" class="form-label">Livreur</label>
                        <input type="text" class="form-control" id="filterLivreur" placeholder="Nom du livreur">
                    </div>
                    <div class="col-md-2">
                        <label for="filterMoto" class="form-label">Moto</label>
                        <input type="text" class="form-control" id="filterMoto" placeholder="Immatriculation ou modèle">
                    </div>
                    <div class="col-md-2">
                        <label for="filterDateDebut" class="form-label">Date début</label>
                        <input type="date" class="form-control" id="filterDateDebut">
                    </div>
                    <div class="col-md-2">
                        <label for="filterDateFin" class="form-label">Date fin</label>
                        <input type="date" class="form-control" id="filterDateFin">
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut">
                            <option value="">Tous</option>
                            <option value="actif">Actif</option>
                            <option value="termine">Terminé</option>
                            <option value="annule">Annulé</option>
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Affectations</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Moto</th>
                                <th>Livreur</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                                <th>Statut</th>
                                <th>Observation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>BJ1234AB - Yamaha</td>
                                <td>Jean Kouassi</td>
                                <td>2024-01-10</td>
                                <td>2024-02-15</td>
                                <td><span class="badge badge-success">Terminé</span></td>
                                <td>Affectation mensuelle terminée sans incident.</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>BJ4321CD - Honda</td>
                                <td>Fatou Soglo</td>
                                <td>2024-03-01</td>
                                <td>2024-04-01</td>
                                <td><span class="badge badge-success">Terminé</span></td>
                                <td>Affectation pour livraison express.</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>BJ5678EF - Suzuki</td>
                                <td>Mohamed Diallo</td>
                                <td>2024-04-15</td>
                                <td>2024-05-15</td>
                                <td><span class="badge badge-secondary">Annulé</span></td>
                                <td>Affectation annulée pour cause d’indisponibilité.</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>BJ8765GH - TVS</td>
                                <td>Jean Kouassi</td>
                                <td>2024-06-01</td>
                                <td>2024-06-30</td>
                                <td><span class="badge badge-success">Actif</span></td>
                                <td>En cours d’utilisation.</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>BJ9999IJ - KTM</td>
                                <td>Fatou Soglo</td>
                                <td>2024-06-10</td>
                                <td>2024-07-10</td>
                                <td><span class="badge badge-success">Actif</span></td>
                                <td>Livraisons dans la zone centre.</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
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
    name: "Livreur",
    data() {
        return {
            filterTypeContrat: 'interne'
        };
    },
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