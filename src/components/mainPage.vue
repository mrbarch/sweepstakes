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
            <button class="dropdown__btn">{{ this.numberPerPage }}<img
                class="dropdown__btn-arrow"
                src="../assets/images/arrow-top.png"
                alt="arrow-top"
            >
            </button>
            <div :class="{show: isDropDown}" id="myDropdown" class="dropdown-content">
              <a @click="changeAmount(10)" class="dropdown-content-item" href="#">10</a>
              <a @click="changeAmount(20)" class="dropdown-content-item" href="#">20</a>
              <a @click="changeAmount(30)" class="dropdown-content-item" href="#">30</a>
              <a @click="changeAmount(40)" class="dropdown-content-item" href="#">40</a>
            </div>
          </div>
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
            <div class="header__table-filter" @click="sortByDate('status')">
              Status
              <template v-if="sortColumn === 'status'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter" @click="sortByDate('actions')">
              Actions
              <template v-if="sortColumn === 'actions'">
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
            <div class="header__table-items-status-all">
              <div class="header__table-items-status" :key="status" v-for="status of item.status"
                   :class="`status__${status}`">{{ status }}
              </div>
            </div>
            <div class="header__table-items-actions-all">
              <button class="header__table-items-actions" :key="actions" v-for="actions of item.actions"
                   :class="`actions__${actions}`">{{ actions }}
              </button>
            </div>
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
      currentPage: 1,
      numberPerPage: 10,
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
      console.log(this.$store.state.items[status])
      return this.$store.state.items[status]
    }
  },
  methods: {
    currentMinus() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
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
.actions {
  &__Promote {
    border: 1px solid #6DB5D1;
    box-sizing: border-box;
    border-radius: 35px;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height: 32px;
    width: 99px;
    background: url(../assets/images/promote-img.png) no-repeat 69px, #6DB5D1;
    padding-right: 20px;
  }
  &__Accept {
    border: 1px solid #71B078;
    box-sizing: border-box;
    border-radius: 35px;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height: 32px;
    width: 95px;
    background: url(../assets/images/accept-img.png) no-repeat 63px, #71B078;
    padding-right: 21px;
  }
  &__Decline {
    border: 1px solid #D3584B;
    box-sizing: border-box;
    border-radius: 35px;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height: 32px;
    width: 95px;
    margin-left: 8px;
    background: url(../assets/images/decline-img.png) no-repeat 66px, #D3584B;
    padding-right: 20px;
  }
}
.status {
  &__Active {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #71B078;
    border-radius: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #71B078;
    border: 1px solid #71B078;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    height: 21px;
    width: 52px;
  }

  &__Winner {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #6DB5D1;
    border-radius: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6DB5D1;
    border: 1px solid #6DB5D1;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    height: 21px;
    width: 102px;
    margin-left: 9px;
  }

  &__Inactive {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #D3584B;
    border-radius: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D3584B;
    border: 1px solid #D3584B;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    height: 21px;
    width: 60px;
    margin-right: 10px;
  }

  &__Completed {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #315B9C;
    border-radius: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #315B9C;
    border: 1px solid #315B9C;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    height: 21px;
    width: 79px;
  }

  &__Scheduled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #EDBC33;
    border-radius: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #EDBC33;
    border: 1px solid #EDBC33;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    height: 21px;
    width: 75px;
  }

  &__Draft {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #9A83B7;
    border-radius: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9A83B7;
    border: 1px solid #9A83B7;
    font-family: InterMedium, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    width: 43px;
    height: 21px;
  }
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
    font-family: InterSemiBold, sans-serif;
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
      padding: 8px 106px 0 38px;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #303852;
      font-style: normal;

      :nth-child(2) {
        position: relative;
        left: 54px;
      }

      :nth-child(3) {
        position: relative;
        left: 79px;
      }

      :nth-child(4) {
        position: relative;
        left: 14px;
      }

      :nth-child(5) {
        position: relative;
        right: 59px;
      }

      :nth-child(6) {
        position: relative;
        right: 24px;
      }

      :nth-child(7) {
        position: relative;
        left: 48px;
      }
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
      display: grid;
      grid-template-columns: 135px 148px 52px 24px 138px 205px 46px 56px;
      justify-content: space-between;
      background: #FFFFFF;
      border: 1px solid #F2EEF9;
      box-sizing: border-box;
      border-radius: 10px;
      margin: 16px 19px -6px;
      color: #63517A;
      height: 60px;
      padding-top: 22px;

      &-title {
        width: 181px;
        padding: 0 0 0 19px;
      }

      &-focus {
        width: 150px;
      }

      &-raised {
        width: 55px;
        position: relative;
        right: 46px;
      }

      &-actions {

        &-all {
          display: flex;
          position: relative;
          right: 124px;
          width: 200px;
          bottom: 8px;
        }
      }

      &-status {
        grid-column-start: 5;
        grid-column-end: 6;
        &-all {
          display: flex;
          position: relative;
          right: 99px;
          width: 168px;
          bottom: 3px;
        }
      }

      &-entries {
        width: 10px;
        position: relative;
        right: 83px;
      }

      &-startDate {
        width: 186px;
        position: relative;
        right: 174px;
      }

      &-endDate {
        width: 186px;
        position: relative;
        right: 125px;
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