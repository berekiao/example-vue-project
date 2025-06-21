<template>
    <div class="container-fluid">

        <div class="modal fade" id="paiementModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="paiementLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">

                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="paiementLabel">Ajouter un Paiement</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="libelle" class="form-label">Libellé</label>
                                        <input type="text" class="form-control" id="libelle"
                                            placeholder="Libellé du paiement">
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control" id="description" rows="3"
                                            placeholder="Description (facultatif)"></textarea>
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
            <h1 class="h3 mb-0 text-gray-800">Mode de Paiement</h1>
            <a href="#" data-toggle="modal" data-target="#paiementModal"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                Nouveau Mode
            </a>
        </div>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Liste des Modes de Paiement</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                <td>Mobile Money (MOMO)</td>
                                <td>Mobile Money</td>
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
                                <td>Espèces</td>
                                <td>Paiement en especes</td>
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