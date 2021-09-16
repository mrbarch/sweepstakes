<template>
  <div class="container">
    <ModalPromote v-if="activeModal === 'Promote'"
                  @close="closeModal"
    />
    <ModalAccept v-if="activeModal === 'Accept'"
                 @close="closeModal"
    />
    <header class="header">
      <div class="header__title">Sweepstakes</div>
      <div class="header__filters-all">
        <div class="header__filters">
          <div class="header__filters-title">
            Filters:
          </div>
          <div class="header__filters-buttons">
            <button class="header__filters-button"
                    @click="setFilter('All')"
            >
              All
            </button>
            <button class="header__filters-button"
                    @click="setFilter('lastTenActive')"
            >
              10 Active
            </button>
            <button class="header__filters-button"
                    @click="setFilter('lastFourInactive')"
            >
              4 Inactive
            </button>
            <button class="header__filters-button"
                    @click="setFilter('lastTwelveCompleted')"
            >
              12 Completed
            </button>
          </div>
        </div>
        <div class="header__filters-right">
          <DropDown @setNumberPerPage="setNumberPerPage"/>
          <Pagination @setPage="setPage"/>
        </div>
      </div>
      <div class="header__table">
        <div class="header__table-title">
          <div class="header__table-filters">
            <div class="header__table-filter"
                 @click="sortByAlphabet('title')"
            >
              Title
              <template v-if="sortColumn === 'title'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter"
                 @click="sortByAlphabet('focus')"
            >
              Focus
              <template v-if="sortColumn === 'focus'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter"
                 @click="sortByNumber('raised')"
            >
              Raised
              <template v-if="sortColumn === 'raised'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter"
                 @click="sortByNumber('entries')"
            >
              Entries
              <template v-if="sortColumn === 'entries'">
                <p :class="{ active: sortDirection === 'up' }">&#9650;</p>
                <p :class="{ active: sortDirection === 'down' }">&#9660;</p>
              </template>
            </div>
            <div class="header__table-filter"
                 @click="sortByDate('status')"
            >
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
          <div class="header__table-items"
               :key="item.id"
               v-for="item of list"
          >
            <div class="header__table-items-title">{{ item.title }}</div>
            <div class="header__table-items-focus">{{ item.focus }}</div>
            <div class="header__table-items-raised">${{ item.raised.toFixed(3) }}</div>
            <div class="header__table-items-entries">{{ item.entries }}</div>
            <div class="header__table-items-status-all">
              <div class="header__table-items-status header__table-items-status-general"
                   :key="status"
                   v-for="status of item.status"
                   :class="`status__${status}`"
              >
                {{ status }}
              </div>
            </div>
            <div class="header__table-items-actions-all">
              <button
                  id="show-modal"
                  class="header__table-items-actions header__table-items-actions-general"
                  :key="action" v-for="action of item.actions"
                  @click="differentiateModal(item, action)"
                  :class="`actions__${action}`"
              >
                {{ action }}
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
import ModalPromote from "./ModalPromote";
import ModalAccept from "./ModalAccept"
import Pagination from "./Pagination";
import DropDown from "./DropDown"

export default {
  name: 'mainPage',
  components: {
    ModalPromote,
    ModalAccept,
    Pagination,
    DropDown
  },
  data: function () {
    return {
      isActive: false,
      currentPage: 1,
      numberPerPage: 10,
      activeFilter: null,
      activeModal: null
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
      if(this.activeFilter === 'lastTenActive') {
        items = items.filter(sweepstakes => sweepstakes.status.includes('Active'))
      }
      if(this.activeFilter === 'lastFourInactive') {
        items = items.filter(sweepstakes => sweepstakes.status.includes('Inactive'))
      }
      if(this.activeFilter === 'lastTwelveCompleted') {
        items = items.filter(sweepstakes => sweepstakes.status.includes('Completed'))
      }
      if(this.activeFilter === 'All') {
        items = this.sweepstakes
      }
      return items.slice(amountItems - this.numberPerPage, amountItems)
    },
  },
  methods: {
    setPage(page) {
      this.currentPage = page
    },
    setNumberPerPage(numberPerPage) {
      this.numberPerPage = numberPerPage
    },
    setFilter(filter) {
      this.activeFilter = filter
    },
    closeModal() {
      this.activeModal = null
    },
    differentiateModal(sweepstake, action) {
      this.activeModal = action
    },
    ...mapMutations(['sortByAlphabet', 'sortByNumber', 'sortByDate']),
  }
}
</script>

<style lang="scss">
.actions {
  &__Promote {
    border: 1px solid #6DB5D1;
    width: 99px;
    background: url(../assets/images/promote-img.png) no-repeat 69px, #6DB5D1;
    padding-right: 25px;
  }

  &__Accept {
    width: 95px;
    background: url(../assets/images/accept-img.png) no-repeat 63px, #71B078;
    padding-right: 27px;
    border: 1px solid #71B078;
  }

  &__Decline {
    border: 1px solid #D3584B;
    width: 95px;
    margin-left: 8px;
    background: url(../assets/images/decline-img.png) no-repeat 66px, #D3584B;
    padding-right: 26px;
  }
}

.status {
  &__Active {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #71B078;
    border: 1px solid #71B078;
    color: #71B078;
    width: 52px;
  }

  &__Winner {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #6DB5D1;
    color: #6DB5D1;
    border: 1px solid #6DB5D1;
    width: 102px;
    margin-left: 8px;
  }

  &__Inactive {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #D3584B;
    color: #D3584B;
    border: 1px solid #D3584B;
    width: 60px;
    margin-right: 10px;
  }

  &__Completed {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #315B9C;
    color: #315B9C;
    border: 1px solid #315B9C;
    width: 79px;
  }

  &__Scheduled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #EDBC33;
    color: #EDBC33;
    border: 1px solid #EDBC33;
    width: 75px;
  }

  &__Draft {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #9A83B7;
    border-radius: 35px;
    color: #9A83B7;
    border: 1px solid #9A83B7;
    width: 43px;
  }
}
.rotate {
  transform: rotate(180deg);
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
        &-general {
          box-sizing: border-box;
          border-radius: 35px;
          font-family: InterMedium, sans-serif;
          font-size: 12px;
          line-height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          height: 32px;
          cursor: pointer;
        }
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
        &-general {
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: InterMedium, sans-serif;
          font-size: 12px;
          line-height: 15px;
          height: 21px;
        }
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
