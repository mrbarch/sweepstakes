<template>
  <div>
    <div @click="dropDownToggle"
         class="dropdown"
    >
      <div class="dropdown__range">SHOWING {{ this.numberPerPage }} OF {{ this.sweepstakes.length }}</div>
      <div class="dropdown__text">ROWS PER PAGE:</div>
      <button class="dropdown__btn">{{ this.numberPerPage }}<img
          class="dropdown__btn-arrow"
          src="../assets/images/arrow-top.png"
          alt="arrow-top"
      >
      </button>
      <div :class="{show: isDropDown}" id="myDropdown" class="dropdown-content">
        <a @click="setNumberPerPage(10)"
           class="dropdown-content-item"
           href="#"
        >10</a>
        <a @click="setNumberPerPage(20)"
           class="dropdown-content-item"
           href="#"
        >20</a>
        <a @click="setNumberPerPage(30)"
           class="dropdown-content-item"
           href="#"
        >30</a>
        <a @click="setNumberPerPage(40)"
           class="dropdown-content-item"
           href="#"
        >40</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDropDown: false,
        numberPerPage: 10,
      }
    },
    methods: {
      dropDownToggle() {
        this.isDropDown = !this.isDropDown
      },

      setNumberPerPage(item) {
        this.numberPerPage = item
        this.$emit('setNumberPerPage', this.numberPerPage)
      }
    },
    computed: {
      sweepstakes() {
        return this.$store.state.items
      },
    }
  }
</script>

<style lang="scss">
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 50px;
  overflow: auto;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 25px;
  right: 3px;
}

.dropdown-content a {
  font-family: InterSemiBold, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #A098AB;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}
.dropdown {
  position: relative;
  display: flex;
  width: 309px;

  &__text {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #A098AB;
    width: 192px;
    padding-top: 3px;
  }

  &__range {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #A098AB;
    width: 223px;
    padding-top: 3px;
  }

  &__btn {
    background-color: white;
    height: 25px;
    width: 88px;
    cursor: pointer;
    border: 1px solid #A098AB;
    border-radius: 50px;
    font-family: InterSemiBold, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    text-align: center;
    color: #A098AB;

    &-arrow {
      padding-left: 7px;
      padding-bottom: 2px;
    }
  }
}

</style>
