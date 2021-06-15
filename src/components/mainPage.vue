<template>
  <div class="container">
    <header class="header">
      <div class="header__title">Sweepstakes</div>
      <div class="header__filters-all">
        <div class="header__filters">
          <div class="header__filters-title">
            Filters:
          </div>
          <div class="header__filters-buttons">
            <button class="header__filters-button">
              All
            </button>
            <button class="header__filters-button">
              10 Active
            </button>
            <button class="header__filters-button">
              4 Inactive
            </button>
            <button class="header__filters-button">
              12 Completed
            </button>
          </div>
        </div>
        <div class="header__filters-right">
          <div @click="dropDownToggle" class="dropdown">
            <div class="dropdown__range">SHOWING {{ this.numberPerPage }} OF {{ this.sweepstakes.length }}</div>
            <div class="dropdown__text">ROWS PER PAGE:</div>
            <button class="dropdown__btn">{{ this.numberPerPage }}<img class="dropdown__btn-arrow" src="../assets/images/arrow-top.png" alt="arrow-top"></button>
            <div :class="{show: isDropDown}" id="myDropdown" class="dropdown-content">
              <a @click="changeAmount(10)" class="dropdown-content-item" href="#">10</a>
              <a @click="changeAmount(20)" class="dropdown-content-item" href="#">20</a>
              <a @click="changeAmount(30)" class="dropdown-content-item" href="#">30</a>
              <a @click="changeAmount(40)" class="dropdown-content-item" href="#">40</a>
            </div>
          </div>

        </div>
      </div>
      <div class="header__table">
        <div class="header__table-title">
          <div class="header__table-filters">
            <div class="header__table-filter" @click="sortByAlphabet('title')">
              Title
              <template v-if="sortColumn === 'title'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter" @click="sortByAlphabet('focus')">
              Focus
              <template v-if="sortColumn === 'focus'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter" @click="sortByNumber('raised')">
              Raised
              <template v-if="sortColumn === 'raised'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter" @click="sortByNumber('entries')">
              Entries
              <template v-if="sortColumn === 'entries'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter" @click="sortByDate('startDate')">
              Start date, time
              <template v-if="sortColumn === 'startDate'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter" @click="sortByDate('endDate')">
              End date, time
              <template v-if="sortColumn === 'endDate'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
          </div>
          <div class="header__table-items" :key="item.id" v-for="item of list">
            <div class="header__table-items-title">{{ item.title }}</div>
            <div class="header__table-items-focus">{{ item.focus }}</div>
            <div class="header__table-items-raised">${{ item.raised.toFixed(3) }}</div>
            <div class="header__table-items-entries">{{ item.entries }}</div>
            <div class="header__table-items-status">{{ }}</div>
            <div class="header__table-items-startDate">{{ item.startDate }}</div>
            <div class="header__table-items-endDate">{{ item.endDate }}</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'mainPage',
  data: function () {
    return {
      isActive: false,
      isDropDown: false
    }
  },
  computed: {
    sortDirection() {
      return this.$store.getters.sortDirection
    },
    sortColumn() {
      return this.$store.getters.sortColumn
    },
    sweepstakes() {
      return this.$store.state.items
    },
    list() {
      let items = this.sweepstakes
      let amountItems = this.currentPage * this.numberPerPage
      return items.slice(amountItems - this.numberPerPage, amountItems)
    },
    status() {
      return this.$store.state.items.status
    }
  },
  methods: {
    ...mapMutations(['sortByAlphabet', 'sortByNumber', 'sortByDate']),
    changeAmount(item) {
      this.numberPerPage = item
      console.log(item.value)
    },
    dropDownToggle() {
      this.isDropDown = !this.isDropDown
    },

  }
}
</script>

<style lang="scss">

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
.rotate {
  transform: rotate(180deg);
}
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

.show {
  display: block;
}

.current {
  &__page {
    font-family: InterSemiBold,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #63517A;
    padding-top: 5px;
  }
}

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

.container {
  margin: 42px auto;
  width: 1523px;
}

button.page-link {
  display: inline-block;
}

button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}

.offset {
  width: 500px !important;
  margin: 20px auto;
}

.active {
  color: grey;
}

.header {
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.6px;
    font-family: InterBold, sans-serif;
  }

  &__table {
    border: 1px solid #F2EEF9;
    box-sizing: border-box;
    border-radius: 10px;
    padding-top: 15px;
    margin-top: 23px;
    width: 1555px;
    height: 422px;

    &-filters {
      font-family: InterBold, sans-serif;
      display: flex;
      justify-content: space-between;
      padding: 8px 87px 0 48px;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #303852;
      font-style: normal;

    }

    &-filter {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      color: #A098AB;

      p {
        display: flex;
        flex-direction: column;
        margin: 0;
      }
    }

    &-items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background: #FFFFFF;
      border: 1px solid #F2EEF9;
      box-sizing: border-box;
      border-radius: 10px;
      margin: 16px 19px -6px;
      color: #63517A;
      height: 60px;

      &-title {
        width: 181px;
      }

      &-focus {
        width: 150px;
      }

      &-raised {
        width: 55px;
      }

      &-entries {
        width: 10px;
      }

      &-startDate {
        width: 186px;
      }

      &-endDate {
        width: 186px;
      }
    }
  }

  &__filters {
    display: flex;
    width: 441px;
    justify-content: space-around;
    margin-top: 35px;
    letter-spacing: 0.8px;
    padding-left: 7px;
    &-all {
      width: 1128px;
      display: flex;
      justify-content: space-between;
    }
    &-right {
      padding-top: 42px;
      width: 411px;
      display: flex;
      justify-content: space-between;

    }
    &-title {
      font-family: InterSemiBold, sans-serif;
      font-style: normal;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #303852;
      font-weight: 600;
    }

    &-buttons {
      width: 362px;
      display: flex;
      justify-content: space-between;
    }
    &-button {
      font-family: InterSemiBold, sans-serif;
      background-color: white;
      padding: 12px 15px;
      border: none;
      border-radius: 50px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #303852;
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        cursor: pointer;
      }
    }
  }
}

</style>