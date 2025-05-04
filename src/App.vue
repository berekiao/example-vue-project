<template>
  <div class="container mt-4">
    <div class="modal fade" id="postModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="sousLabel"
      aria-hidden="true" style="backdrop-filter: blur(10px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0">

          <div class="modal-header border-0 pb-0 align-items-start">
            <h5 class="mb-0" id="sousLabel">Banque</h5>
            <button type="button" class="btn-close ms-md-5" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
            <form>
              <div class="row">
                <div class="mb-3 col-sm-12 col-lg-4">
                  <label for="code" class="form-label">Title</label>
                  <input type="text" class="form-control" id="libelle" placeholder="Title" v-model="post.title">
                </div>
                <div class="mb-3 col-sm-12 col-lg-4">
                  <label for="code" class="form-label">Body</label>
                  <input type="text" class="form-control" id="libelle" placeholder="Body" v-model="post.body">
                </div>
                <div class="mb-3 col-sm-12 col-lg-4">
                  <label for="code" class="form-label">User Id</label>
                  <input type="text" class="form-control" id="libelle" placeholder="User Id" v-model="post.userId">
                </div>

              </div>
            </form>
          </div>
          <div class="modal-footer border-0 pt-0">
            <div class="text-center mx-auto">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal"><i
                  class="bi-x me-1"></i>Fermer</button>
              <button type="button" @click="addPost" class="btn btn-primary ms-2"><i
                  class="bi-check me-1"></i>Ajouter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bouton Nouveau -->
    <div class="d-flex justify-content-between mb-3">
      <h2>Liste des éléments</h2>
      <button class="btn btn-primary" @click="openModal">Nouveau</button>
    </div>

    <!-- Tableau -->
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>#</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.userId }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>
            <div class="d-flex">
              <a class="btn btn-link p-0 mx-1 text-muted" @click="update(item)">
                <h5 class="mb-0"><i class="bi bi-pencil-square"></i></h5>
              </a>
              <a class="btn btn-link p-0 mx-1 text-muted" @click="deletePost(item.id)">
                <h5 class="mb-0"><i class="bi bi-trash"></i></h5>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as bootstrap from 'bootstrap';

export default {
  name: "App",
  data: () => ({
    post: {}
  }),
  computed: {
    ...mapGetters({ items: 'post/all' }),

  },
  methods: {
    ...mapActions({
      fetchItems: 'post/getAll',
    }),
    async addPost() {
      try {
        const response = await this.$store.dispatch('post/create', this.post);
        this.post = {};
        this.fetchItems();
        this.closeModal();
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'élément role :', error);
      }
    },
    async deletePost(postId) {
      try {
        const response = await this.$store.dispatch('post/del', postId);
        this.fetchItems();

      } catch (error) {
        console.error('Erreur lors de la suppression de l\'élément role :', error);
      }
    },
    async update(post) {
      this.post.id = post.id;
      this.post = post
      this.openModal()
    },
    openModal() {
      // Déplacer le modal 
      document.body.appendChild(document.getElementById('postModal'));

      // Ouvrir le modal
      const modal = new bootstrap.Modal(document.getElementById('postModal'));
      modal.show();
    },
    closeModal() {
      // Récupérer le modal
      const modalElement = document.getElementById('postModal');

      // Créer un gestionnaire d'événements pour l'événement "hidden.bs.modal"
      const hiddenHandler = () => {
        // Masquer manuellement le backdrop
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.style.display = 'none';
        }
      };

      // Ajouter l'événement "hidden.bs.modal"
      modalElement.addEventListener('hidden.bs.modal', hiddenHandler);

      // Fermer le modal
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();

    },

  },
  mounted() {
    this.fetchItems();
  },
};
</script>

<style>
/* Ajoutez des styles personnalisés si nécessaire */
</style>