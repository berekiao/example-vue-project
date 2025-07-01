<template>
  <div v-if="totalItems > 10">
    <div class="d-flex justify-content-between align-items-center">
  <div>
    
      Affichage de <strong>{{ startItem }}</strong> à <strong>{{ endItem }}</strong> sur <strong>{{ totalItems }}</strong> éléments
  </div>
  <div class="d-flex align-items-center">
    <!-- <button class="btn btn-sm btn-secondary me-1" :disabled="currentPage === 1" @click.prevent="goToFirstPage">
      <i class="bi bi-chevron-bar-left"></i>
    </button> -->
    <button class="btn btn-sm btn-secondary me-2" :disabled="currentPage === 1" @click.prevent="prevPage">
      Precedent
    </button>

    <span>Page <strong>{{ currentPage }}</strong> sur <strong>{{ totalPages }}</strong></span>

    <button class="btn btn-sm btn-secondary ms-2" :disabled="currentPage === totalPages" @click.prevent="nextPage">
      Suivant
    </button>
    <!-- <button class="btn btn-sm btn-secondary ms-1" :disabled="currentPage === totalPages" @click.prevent="goToLastPage">
      <i class="bi bi-chevron-bar-right"></i>
    </button> -->
  </div>
</div>

  </div>

</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
      required: true
    },
    totalPages: {
      type: Number,
      default: 0,
      required: true
    },
    onPageChange: {
      type: Function,
      required: true
    },
    totalItems: {
      type: Number,
      default: 0,
      required: true
    },
  },
  data() {
    return {
      pageSize: 10
    };
  },
  computed: {
    startItem() {
      if (this.currentPage <= 0) {
        return 1;
      } else {
        return (this.currentPage - 1) * this.pageSize + 1;
      }
    },
    endItem() {
      if (this.currentPage <= 0) {
        return this.pageSize > this.totalItems ? this.totalItems : this.pageSize;
      } else {
        const lastItem = this.currentPage * this.pageSize;
        return lastItem > this.totalItems ? this.totalItems : lastItem;
      }
    }

  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.onPageChange(this.currentPage - 1, this.pageSize);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.onPageChange(this.currentPage + 1, this.pageSize);
      }
    },
    goToFirstPage() {
      this.onPageChange(0);
    },
    goToLastPage() {
      this.onPageChange(this.totalPages - 1);
    }
  }

};
</script>