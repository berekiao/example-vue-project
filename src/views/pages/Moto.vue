<template>
    <div class="container-fluid">

        <div class="modal fade" id="motoModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="motoLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="motoLabel">Ajouter une Moto</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="immatriculation" class="form-label">Immatriculation</label>
                                        <input type="text" class="form-control" id="immatriculation"
                                            placeholder="Ex : BJ1234AB">
                                    </div>
                                    <div class="mb-3">
                                        <label for="marque" class="form-label">Marque</label>
                                        <input type="text" class="form-control" id="marque"
                                            placeholder="Yamaha, Honda...">
                                    </div>
                                    <div class="mb-3">
                                        <label for="modele" class="form-label">Modèle</label>
                                        <input type="text" class="form-control" id="modele"
                                            placeholder="CBR500R, XTZ125...">
                                    </div>
                                    <div class="mb-3">
                                        <label for="couleur" class="form-label">Couleur</label>
                                        <input type="text" class="form-control" id="couleur"
                                            placeholder="Rouge, Noir...">
                                    </div>
                                    <div class="mb-3">
                                        <label for="kilometrage" class="form-label">Kilométrage</label>
                                        <input type="number" class="form-control" id="kilometrage"
                                            placeholder="Ex : 12000 km">
                                    </div>
                                    <div class="mb-3">
                                        <label for="etat" class="form-label">État</label>
                                        <select class="form-control" id="etat">
                                            <option value="bon">Bon</option>
                                            <option value="moyen">Moyen</option>
                                            <option value="mauvais">Mauvais</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut">
                                            <option value="disponible">Disponible</option>
                                            <option value="en_utilisation">En cours d’utilisation</option>
                                            <option value="en_panne">En panne</option>
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

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Motos</h1>
            <a href="#" data-toggle="modal" data-target="#motoModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouvelle Moto
            </a>
        </div>



        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterImmatriculation" class="form-label">Immatriculation</label>
                        <input type="text" class="form-control" id="filterImmatriculation" placeholder="Ex : BJ1234AB">
                    </div>
                    <div class="col-md-2">
                        <label for="filterMarque" class="form-label">Marque</label>
                        <input type="text" class="form-control" id="filterMarque" placeholder="Yamaha, Honda...">
                    </div>
                    <div class="col-md-2">
                        <label for="filterModele" class="form-label">Modèle</label>
                        <input type="text" class="form-control" id="filterModele" placeholder="CBR500R...">
                    </div>
                    <div class="col-md-2">
                        <label for="filterEtat" class="form-label">État</label>
                        <select class="form-control" id="filterEtat">
                            <option value="">Tous</option>
                            <option value="bon">Bon</option>
                            <option value="moyen">Moyen</option>
                            <option value="mauvais">Mauvais</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="filterStatut" class="form-label">Statut</label>
                        <select class="form-control" id="filterStatut">
                            <option value="">Tous</option>
                            <option value="disponible">Disponible</option>
                            <option value="en_utilisation">En cours d’utilisation</option>
                            <option value="en_panne">En panne</option>
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Motos</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Immatriculation</th>
                                <th>Marque</th>
                                <th>Modèle</th>
                                <th>Couleur</th>
                                <th>Kilométrage</th>
                                <th>État</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>BJ1234AB</td>
                                <td>Yamaha</td>
                                <td>XTZ125</td>
                                <td>Rouge</td>
                                <td>15 000 km</td>
                                <td><span class="badge badge-success">Bon</span></td>
                                <td><span class="badge badge-success">Disponible</span></td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-primary"><i
                                                class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger"><i
                                                class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>BJ4321CD</td>
                                <td>Honda</td>
                                <td>CBR500R</td>
                                <td>Bleu</td>
                                <td>9 000 km</td>
                                <td><span class="badge badge-warning">Moyen</span></td>
                                <td><span class="badge badge-secondary">En cours d’utilisation</span></td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>BJ5678EF</td>
                                <td>Suzuki</td>
                                <td>GSX150</td>
                                <td>Noir</td>
                                <td>5 500 km</td>
                                <td><span class="badge badge-success">Bon</span></td>
                                <td><span class="badge badge-success">Disponible</span></td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>BJ8765GH</td>
                                <td>TVS</td>
                                <td>Apache RTR</td>
                                <td>Blanc</td>
                                <td>12 000 km</td>
                                <td><span class="badge badge-danger">Mauvais</span></td>
                                <td><span class="badge badge-danger">En panne</span></td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>BJ9999IJ</td>
                                <td>KTM</td>
                                <td>Duke 200</td>
                                <td>Orange</td>
                                <td>7 800 km</td>
                                <td><span class="badge badge-success">Bon</span></td>
                                <td><span class="badge badge-secondary">En cours d’utilisation</span></td>
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