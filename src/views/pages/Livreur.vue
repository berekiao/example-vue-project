<template>
    <div class="container-fluid">

        <div class="modal fade" id="livreurModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="livreurLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="livreurLabel">Livreur</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="nom" class="form-label">Nom</label>
                                        <input type="text" class="form-control" id="nom" placeholder="Nom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="prenom" class="form-label">Prénom</label>
                                        <input type="text" class="form-control" id="prenom" placeholder="Prénom">
                                    </div>
                                    <div class="mb-3">
                                        <label for="pieceIdentite" class="form-label">Pièce d'identité</label>
                                        <input type="text" class="form-control" id="pieceIdentite"
                                            placeholder="N° de pièce ou référence">
                                    </div>
                                    <div class="mb-3">
                                        <label for="typeContrat" class="form-label">Type de contrat</label>
                                        <select class="form-control" id="typeContrat">
                                            <option value="independant">Indépendant</option>
                                            <option value="interne">Interne</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="statut" class="form-label">Statut</label>
                                        <select class="form-control" id="statut">
                                            <option value="actif">Actif</option>
                                            <option value="inactif">Inactif</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Adresse email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="contact"
                                            placeholder="Numéro de téléphone">
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
            <h1 class="h3 mb-0 text-gray-800">Livreurs</h1>
            <a href="#" data-toggle="modal" data-target="#livreurModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouveau Livreur
            </a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-2">
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="filterNom" placeholder="Nom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterPrenom" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="filterPrenom" placeholder="Prénom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterContact" class="form-label">Contact</label>
                        <input type="text" class="form-control" id="filterContact" placeholder="Contact">
                    </div>
                    <div class="col-md-2">
                        <label for="filterTypeContrat" class="form-label">Type de contrat</label>
                        <select class="form-control" id="filterTypeContrat">
                            <option value="">Tous</option>
                            <option value="independant">Indépendant</option>
                            <option value="interne">Interne</option>
                        </select>
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
                    <h6 class="m-0 font-weight-bold text-primary">Liste des livreurs</h6>
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
                                    <th>Pièce d'identité</th>
                                    <th>Type contrat</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Kouassi</td>
                                    <td>Jean</td>
                                    <td>0102030405</td>
                                    <td>jean.kouassi@example.com</td>
                                    <td>CNI 123456789</td>
                                    <td>Indépendant</td>
                                    <td><span class="badge badge-success">Actif</span></td>
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
                                    <td>Diabaté</td>
                                    <td>Aminata</td>
                                    <td>0203040506</td>
                                    <td>
                                        <a href="mailto:aminata.diabaté@example.com">aminata.diabaté@example.com</a>
                                    </td>
                                    <td>Passport 987654321</td>
                                    <td>Interne</td>
                                    <td><span class="badge badge-danger">Inactif</span></td>
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
                                    <td>3</td>
                                    <td>Traoré</td>
                                    <td>Moussa</td>
                                    <td>0304050607</td>
                                    <td>
                                        <a href="mailto:moussa.traoré@example.com">moussa.traoré@example.com</a>
                                    </td>
                                    <td>Permis de conduire 1122334455</td>
                                    <td>Interne</td>
                                    <td><span class="badge badge-success">Actif</span></td>
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
                                    <td>4</td>
                                    <td>Koné</td>
                                    <td>Sophie</td>
                                    <td>0405060708</td>
                                    <td>
                                        <a href="mailto:sophie.koné@example.com">sophie.koné@example.com</a>
                                    </td>
                                    <td>CNI 2233445566</td>
                                    <td>Interne</td>
                                    <td><span class="badge badge-success">Actif</span></td>
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
                                    <td>5</td>
                                    <td>Coulibaly</td>
                                    <td>Fatou</td>
                                    <td>0506070809</td>
                                    <td>
                                        <a href="mailto:fatou.coulibaly@example.com">fatou.coulibaly@example.com</a>
                                    </td>
                                    <td>Passport 9988776655</td>
                                    <td>Indépendant</td>
                                    <td><span class="badge badge-success">Actif</span></td>
                                    <td>
                                        <div class="btn-group" role="group">
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