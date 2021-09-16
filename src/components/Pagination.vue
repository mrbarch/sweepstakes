<template>
  <div>
    <div class="pagination">
      <button class="pagination__btn" @click="currentMinus"><img
          class="pagination__btn-img"
          src="../assets/images/arrow-left.png"
          alt="pagination__btn">
      </button>
      <div class="current__page">{{ currentPage }}</div>
      <button class="pagination__btn" @click="currentPlus"><img
          class="pagination__btn-img"
          src="../assets/images/arrow-right.png"
          alt="pagination__btn">
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        // isActive: false,
        currentPage: 1,
        numberPerPage: 10,
      }
    },
    methods: {
      currentMinus() {
        if (this.currentPage > 1) {
          this.currentPage--
          this.$emit('setPage', this.currentPage)
        }
      },
      currentPlus() {
        this.currentPage += 1
        this.$emit('setPage', this.currentPage)
      }
    },
  }
</script>

<style lang="scss">
.pagination {
  display: flex;
  width: 80px;
  justify-content: space-between;

  &__btn {
    background: #F2EEF9;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #63517A;
    border: none;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &-img {
      width: 4.74px;
      height: 7.61px;
    }
  }
}
</style>