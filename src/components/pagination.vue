<template>
  <div class="pagination">
    <button class="pagination__btn" @click="currentMinus"><img
        class="pagination__btn-img"
        src="../assets/images/arrow-left.png"
        alt="pagination__btn">
    </button>
    <div class="current__page">{{ currentPage }}</div>
    <button class="pagination__btn" @click="currentPage += 1"><img
        class="pagination__btn-img"
        src="../assets/images/arrow-right.png"
        alt="pagination__btn">
    </button>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data: function () {
    return {
      currentPage: 1,
      numberPerPage: 10,
    }
  },
  methods: {
    currentMinus() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  },

}
</script>