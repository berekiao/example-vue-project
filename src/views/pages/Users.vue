<template>
    <div class="container-fluid">

        <!-- Modale pour ajout/modification -->
        <div class="modal fade" id="utilisateurModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="utilisateurLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="utilisateurLabel">{{ form.id ? 'Modifier' : 'Ajouter' }} un Utilisateur</h5>
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
                                        <label for="telephone" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="telephone" placeholder="Téléphone" v-model="form.telephone">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Adresse email" v-model="form.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="role" class="form-label">Rôle</label>
                                        <select class="form-control" id="role" v-model="form.role">
                                            <option value="">Sélectionner un rôle</option>
                                            <option v-for="role in rolesList" :key="role.id" :value="role">
                                                {{ role.nomRole }}
                                            </option>
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
                            <button type="button" class="btn btn-primary ms-2" @click="addUser" :disabled="loading">
                                <i class="bi-check"></i> {{ form.id ? 'Modifier' : 'Ajouter' }}
                                <span v-if="loading" class="spinner-border spinner-border-sm ms-2"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modale pour afficher les détails de l'utilisateur -->
        <div class="modal fade" id="utilisateurDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="utilisateurDetailsLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="utilisateurDetailsLabel">Détails de l'Utilisateur</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Nom</label>
                                    <p>{{ selectedUser?.nom || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Prénom</label>
                                    <p>{{ selectedUser?.prenom || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Contact</label>
                                    <p>{{ selectedUser?.telephone || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <p>{{ selectedUser?.email || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Rôle</label>
                                    <p>{{ selectedUser?.role?.nomRole || 'Non renseigné' }}</p>
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
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="filterNom" placeholder="Rechercher un nom" v-model="filterNom">
                    </div>
                    <div class="col-md-3">
                        <label for="filterPrenom" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="filterPrenom" placeholder="Rechercher un prénom" v-model="filterPrenom">
                    </div>
                    <div class="col-md-2">
                        <label for="filterContact" class="form-label">Contact</label>
                        <input type="text" class="form-control" id="filterContact" placeholder="Contact" v-model="filterContact">
                    </div>
                    <div class="col-md-2">
                        <label for="filterEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="filterEmail" placeholder="Email" v-model="filterEmail">
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-primary w-100" @click="onSearch">Filtrer</button>
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
                            <tr v-for="(item, index) in filterItems" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item?.nom }}</td>
                                <td>{{ item?.prenom }}</td>
                                <td>{{ item?.telephone }}</td>
                                <td>{{ item?.email }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="item?.role?.nomRole">{{ item?.role?.nomRole }}</span>
                                    <span class="badge badge-secondary" v-else>Aucun rôle</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-primary" @click="updateUser(item)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger" @click="deleteUser(item.id)">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                        <button type="button" class="btn btn-info" @click="showDetails(item)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <PaginationNew :currentPage="items.number + 1" :totalPages="items.totalPages"
                            :totalItems="items.totalElements || 0" :onPageChange="onSearch" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ElNotification } from "element-plus";
import Swal from 'sweetalert2'
import PaginationNew from "../../components/PaginationNew.vue";

export default {
    components: {
        PaginationNew
    },
    name: 'users',
    data: () => ({
        form: {
            nom: "",
            prenom: "",
            telephone: "",
            email: "",
            role: null
        },
        loading: false,
        modalInstance: null,
        filterNom: "",
        filterPrenom: "",
        filterContact: "",
        filterEmail: "",
        selectedUser: null,
        rolesList: []
    }),
    computed: {
        ...mapGetters({ items: 'users/all' }),
        filterItems() {
            return this.items.content;
        }
    },
    methods: {
        async fetchRoles() {
            try {
                const res = await this.$store.dispatch('roles/getAllP', { page: 0, size: 100 });
                this.rolesList = res.content || [];
            } catch (error) {
                console.error('Erreur lors du chargement des rôles:', error);
            }
        },
        showDetails(item) {
            this.selectedUser = item;
            document.body.appendChild(document.getElementById('utilisateurDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('utilisateurDetailsModal'));
            modal.show();
        },
        resetForm() {
            this.form = {
                nom: "",
                prenom: "",
                telephone: "",
                email: "",
                role: null
            };
            this.openModal();
        },
        openModal() {
            document.body.appendChild(document.getElementById('utilisateurModal'));
            const modal = new bootstrap.Modal(document.getElementById('utilisateurModal'));
            modal.show();
        },
        closeModal() {
            const modalElement = document.getElementById('utilisateurModal');
            const hiddenHandler = () => {
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.style.display = 'none';
                }
            };
            modalElement.addEventListener('hidden.bs.modal', hiddenHandler);
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
        },
        onSearch(offset, size = 10) {
            const params = {
                page: offset - 1,
                size: size || 10,
                sort: "id,desc",
                nom: this.filterNom,
                prenom: this.filterPrenom,
                telephone: this.filterTelephone,
                email: this.filterEmail
            };
            this.$store.dispatch('users/getAllP', params)
                .then((response) => {
                });
        },
        async addUser() {
            if (!this.form.nom || !this.form.prenom || !this.form.email) {
                ElNotification({
                    title: 'Erreur',
                    message: 'Veuillez remplir tous les champs obligatoires.',
                    type: 'error',
                    duration: 3000
                });
                return;
            }

            this.loading = true;
            try {
                await this.$store.dispatch('users/create', this.form);
                ElNotification({
                    title: 'Succès',
                    message: this.form.id ? 'Modification effectuée avec succès.' : 'Ajout effectué avec succès.',
                    type: 'success',
                    duration: 3000
                });
                this.closeModal();
                this.onSearch();
                this.resetForm();
            } catch (error) {
                console.error('Erreur lors de l\'ajout/modification de l\'utilisateur:', error);
                ElNotification({
                    title: 'Erreur',
                    message: 'Une erreur est survenue lors de l\'opération.',
                    type: 'error',
                    duration: 3000
                });
            } finally {
                this.loading = false;
            }
        },
        async deleteUser(userId) {
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
                    await this.$store.dispatch('users/del', userId);
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
        updateUser(user) {
            this.form = user
            this.openModal();
        }
    },
    created() {
        this.onSearch();
        this.fetchRoles();
    }
}
</script>

<style lang="scss" scoped></style> 