import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        sortColumn: '',
        sortDirection: 'up',
        items: [
            {
                id: 1,
                title: 'Sweepstakes Title',
                focus: 'Contraceptive Health',
                raised: 5,
                entries: 10,
                startDate: "05/10/2020, 11:00 EST",
                endDate: "15/11/2021, 14:00 EST",
                status: ['Active', 'Winner notified'],
                actions: ['Promote']
            },
            {
                id: 2,
                title: 'Silken Darkness',
                focus: 'Childcare',
                raised: 7,
                entries: 9,
                startDate: "15/11/2000, 14:00 EST",
                endDate: "16/12/2001, 18:00 EST",
                status: ['Active', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 3,
                title: 'The Last Petals',
                focus: 'Education',
                raised: 3,
                entries: 11,
                startDate: "05/04/2008, 08:00 EST",
                endDate: "15/09/2008, 11:00 EST",
                status: ['Inactive', 'Scheduled'],
                actions: ['Promote']
            },
            {
                id: 4,
                title: 'Dream of Years',
                focus: 'Medical Infrastructure',
                raised: 8,
                entries: 10,
                startDate: "07/01/2006, 06:00 EST",
                endDate: "13/02/2006, 18:00 EST",
                status: ['Completed', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 5,
                title: 'The Worlds Hunter',
                focus: 'Food Access',
                raised: 12,
                entries: 10,
                startDate: "11/06/1997, 15:00 EST",
                endDate: "27/08/1998, 18:00 EST",
                status: ['Inactive', 'Draft'],
                actions: ['Promote']
            },
            {
                id: 6,
                title: 'The Nothing of the Wings',
                focus: 'Clothing Drive',
                raised: 1,
                entries: 10,
                startDate: "02/06/2021, 20:00 EST",
                endDate: "25/06/2021, 11:00 EST",
                status: ['Inactive', 'Scheduled'],
                actions: ['Promote']
            },
            {
                id: 7,
                title: 'Angel in the Sky',
                focus: 'Vaccines',
                raised: 1.6,
                entries: 10,
                startDate: "18/08/2007, 19:00 EST",
                endDate: "23/10/2008, 23:00 EST",
                status: ['Completed', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 8,
                title: 'Cold Bride',
                focus: 'Water Independence',
                raised: 5,
                entries: 10,
                startDate: "16/02/2013, 01:00 EST",
                endDate: "17/03/2014, 02:00 EST",
                status: ['Active', ''],
                actions: ['Promote']
            },
            {
                id: 9,
                title: 'The Ragged Luck',
                focus: 'Prenatal Health',
                raised: 11,
                entries: 10,
                startDate: "22/12/2019, 23:00 EST",
                endDate: "01/03/2020, 06:00 EST",
                status: ['Scheduled', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 10,
                title: 'Ashes of Eye',
                focus: 'Childcare',
                raised: 71,
                entries: 10,
                startDate: "22/09/2015, 04:00 EST",
                endDate: "29/10/2015, 07:00 EST",
                status: ['Inactive', ''],
                actions: ['Promote']
            },
            {
                id: 11,
                title: 'Sweepstakes Title',
                focus: 'Contraceptive Health',
                raised: 5,
                entries: 10,
                startDate: "05/10/2020, 11:00 EST",
                endDate: "15/11/2021, 14:00 EST",
                status: ['Active', 'Winner notified'],
                actions: ['Promote']
            },
            {
                id: 12,
                title: 'Silken Darkness',
                focus: 'Childcare',
                raised: 7,
                entries: 9,
                startDate: "15/11/2000, 14:00 EST",
                endDate: "16/12/2001, 18:00 EST",
                status: ['Active', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 13,
                title: 'The Last Petals',
                focus: 'Education',
                raised: 3,
                entries: 11,
                startDate: "05/04/2008, 08:00 EST",
                endDate: "15/09/2008, 11:00 EST",
                status: ['Inactive', 'Scheduled'],
                actions: ['Promote']
            },
            {
                id: 14,
                title: 'Dream of Years',
                focus: 'Medical Infrastructure',
                raised: 8,
                entries: 10,
                startDate: "07/01/2006, 06:00 EST",
                endDate: "13/02/2006, 18:00 EST",
                status: ['Completed', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 15,
                title: 'The Worlds Hunter',
                focus: 'Food Access',
                raised: 12,
                entries: 10,
                startDate: "11/06/1997, 15:00 EST",
                endDate: "27/08/1998, 18:00 EST",
                status: ['Inactive', 'Draft'],
                actions: ['Promote']
            },
            {
                id: 16,
                title: 'The Nothing of the Wings',
                focus: 'Clothing Drive',
                raised: 1,
                entries: 10,
                startDate: "02/06/2021, 20:00 EST",
                endDate: "25/06/2021, 11:00 EST",
                status: ['Inactive', 'Scheduled'],
                actions: ['Promote']
            },
            {
                id: 17,
                title: 'Angel in the Sky',
                focus: 'Vaccines',
                raised: 1.6,
                entries: 10,
                startDate: "18/08/2007, 19:00 EST",
                endDate: "23/10/2008, 23:00 EST",
                status: ['Completed', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 18,
                title: 'Cold Bride',
                focus: 'Water Independence',
                raised: 5,
                entries: 10,
                startDate: "16/02/2013, 01:00 EST",
                endDate: "17/03/2014, 02:00 EST",
                status: ['Active', ''],
                actions: ['Promote']
            },
            {
                id: 19,
                title: 'The Ragged Luck',
                focus: 'Prenatal Health',
                raised: 11,
                entries: 10,
                startDate: "22/12/2019, 23:00 EST",
                endDate: "01/03/2020, 06:00 EST",
                status: ['Scheduled', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 20,
                title: 'Ashes of Eye',
                focus: 'Childcare',
                raised: 71,
                entries: 10,
                startDate: "22/09/2015, 04:00 EST",
                endDate: "29/10/2015, 07:00 EST",
                status: ['Inactive', ''],
                actions: ['Promote']
            },
        ],
    },
    methods: {
    },
    getters: {
        sweepstakes1(state) {
            return state.items
        },
        sortColumn(state) {
            return state.sortColumn
        },
        sortDirection(state) {
            return state.sortDirection
        },
        status(state) {
            return state.items.status
        },
    },
    mutations: {
        sortByAlphabet(state, field) {
            state.items.sort(function (a, b) {
                return a[field].localeCompare(b[field]);
            })
            if (state.sortDirection === 'up') {
                state.items.reverse();
                state.sortDirection = 'down'
            } else {
                state.sortDirection = 'up'
            }
            state.sortColumn = field
        },
        sortByNumber(state, field) {
            state.items.sort((a, b) => a[field] - b[field])

            if (state.sortDirection === 'up') {
                state.items.reverse();
                state.sortDirection = 'down'

            } else {
                state.sortDirection = 'up'
            }
            state.sortColumn = field
        },
        sortByDate(state, field) {
            state.items.sort((a, b) => new Date(b[field]) - new Date(a[field]));
            if (state.sortDirection === 'up') {
                state.items.reverse();
                state.sortDirection = 'down'
            } else {
                state.sortDirection = 'up'
            }
            state.sortColumn = field
        }
    }
})
