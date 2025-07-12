<template>
    <div class="container-fluid">

        <!-- Modale pour ajout/modification -->
        <div class="modal fade" id="roleModal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="roleLabel" aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="roleLabel">{{ form.id ? 'Modifier' : 'Ajouter' }} un Rôle</h5>
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
                                        <input type="text" class="form-control" id="nom" placeholder="Nom du rôle" v-model="form.nomRole">
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="permissions" class="form-label">Permissions</label>
                                        <select class="form-control" id="permissions" multiple v-model="form.permissions">
                                            <option v-for="permission in permissionsList" :key="permission.id" :value="permission.id">
                                                {{ permission.nom }}
                                            </option>
                                        </select>
                                        <small class="form-text text-muted">Maintenez Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs permissions</small>
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
                            <button type="button" class="btn btn-primary ms-2" @click="addRole" :disabled="loading">
                                <i class="bi-check"></i> {{ form.id ? 'Modifier' : 'Ajouter' }}
                                <span v-if="loading" class="spinner-border spinner-border-sm ms-2"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modale pour afficher les détails du rôle -->
        <div class="modal fade" id="roleDetailsModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="roleDetailsLabel"
            aria-hidden="true" style="backdrop-filter: blur(10px);">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 pb-0 align-items-start">
                        <h5 class="mb-0" id="roleDetailsLabel">Détails du Rôle</h5>
                        <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Nom</label>
                                    <p>{{ selectedRole?.nomRole || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <p>{{ selectedRole?.description || 'Non renseigné' }}</p>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Permissions</label>
                                    <div v-if="selectedRole?.permissions && selectedRole.permissions.length > 0">
                                        <span v-for="permission in selectedRole.permissions" :key="permission.id" 
                                              class="badge badge-primary me-1 mb-1">
                                            {{ permission.nom }}
                                        </span>
                                    </div>
                                    <p v-else class="text-muted">Aucune permission assignée</p>
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
            <h1 class="h3 mb-0 text-gray-800">Rôles</h1>
            <a href="#" @click="openModal" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Nouveau Rôle</a>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form class="row g-3 align-items-end">
                    <div class="col-md-5">
                        <label for="filterNom" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="filterNom" placeholder="Rechercher un rôle" v-model="filterNom">
                    </div>
                    <div class="col-md-5">
                        <label for="filterDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="filterDescription" placeholder="Rechercher dans la description" v-model="filterDescription">
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
                <h6 class="m-0 font-weight-bold text-primary">Liste des Rôles</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nom</th>
                                <th>Permissions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filterItems" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item?.nomRole }}</td>
                                <td>
                                    <div v-if="item?.permissions && item.permissions.length > 0">
                                        <span v-for="permission in item.permissions.slice(0, 3)" :key="permission.id" 
                                              class="badge badge-primary me-1">
                                            {{ permission.nom }}
                                        </span>
                                        <span v-if="item.permissions.length > 3" class="badge badge-secondary">
                                            +{{ item.permissions.length - 3 }} autres
                                        </span>
                                    </div>
                                    <span v-else class="text-muted">Aucune</span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-primary" @click="updateRole(item)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger" @click="deleteRole(item.id)">
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
    name: 'roles',
    data: () => ({
        form: {
            nomRole: "",
            permissions: []
        },
        loading: false,
        modalInstance: null,
        filterNom: "",
        filterDescription: "",
        selectedRole: null,
        permissionsList: []
    }),
    computed: {
        ...mapGetters({ items: 'roles/all' }),
        filterItems() {
            return this.items.content;
        }
    },
    methods: {
        async fetchPermissions() {
            try {
                const res = await this.$store.dispatch('permissions/getAllP', { page: 0, size: 100 });
                this.permissionsList = res.content || [];
            } catch (error) {
                console.error('Erreur lors du chargement des permissions:', error);
            }
        },
        showDetails(item) {
            this.selectedRole = item;
            document.body.appendChild(document.getElementById('roleDetailsModal'));
            const modal = new bootstrap.Modal(document.getElementById('roleDetailsModal'));
            modal.show();
        },
        resetForm() {
            this.form = {
                nomRole: "",
                permissions: []
            };
            this.openModal();
        },
        openModal() {
            document.body.appendChild(document.getElementById('roleModal'));
            const modal = new bootstrap.Modal(document.getElementById('roleModal'));
            modal.show();
        },
        closeModal() {
            const modalElement = document.getElementById('roleModal');
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
                description: this.filterDescription
            };
            this.$store.dispatch('roles/getAllP', params)
                .then((response) => {
                });
        },
        async addRole() {
            if (!this.form.nom) {
                ElNotification({
                    title: 'Erreur',
                    message: 'Veuillez remplir le nom du rôle.',
                    type: 'error',
                    duration: 3000
                });
                return;
            }

            this.loading = true;
            try {
                await this.$store.dispatch('roles/create', this.form);
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
                console.error('Erreur lors de l\'ajout/modification du rôle:', error);
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
        async deleteRole(roleId) {
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
                    await this.$store.dispatch('roles/del', roleId);
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
        updateRole(role) {
            this.form = role
            this.openModal();
        }
    },
    created() {
        this.onSearch();
        this.fetchPermissions();
    }
}
</script>

<style lang="scss" scoped></style>