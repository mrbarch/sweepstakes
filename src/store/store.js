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
                startDate: "Feb 16 2018 10:00:00 AM",
                endDate: "Feb 18 2018 11:00:00 AM",
                status: ['Active', 'Winner notified'],
                actions: ['Promote']
            },
            {
                id: 2,
                title: 'Silken Darkness',
                focus: 'Childcare',
                raised: 7,
                entries: 9,
                startDate: "Mar 20 2016 10:00:00 PM",
                endDate: "Mar 27 2016 12:00:00 PM",
                status: ['Active', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 3,
                title: 'The Last Petals',
                focus: 'Education',
                raised: 3,
                entries: 11,
                startDate: "Jan 29 2001 4:00:00 PM",
                endDate: "Jan 30 2001 7:00:00 PM",
                status: ['Inactive', 'Scheduled'],
                actions: ['Promote']
            },
            {
                id: 4,
                title: 'Dream of Years',
                focus: 'Medical Infrastructure',
                raised: 8,
                entries: 10,
                startDate: "Apr 11 2006 8:00:00 AM",
                endDate: "Apr 14 2006 10:00:00 AM",
                status: ['Completed', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 5,
                title: 'The Worlds Hunter',
                focus: 'Food Access',
                raised: 12,
                entries: 10,
                startDate: "Sep 28 2009 10:00:00 AM",
                endDate: "Sep 29 2009 14:00:00 AM",
                status: ['Inactive', 'Draft'],
                actions: ['Promote']
            },
            {
                id: 6,
                title: 'The Nothing of the Wings',
                focus: 'Clothing Drive',
                raised: 1,
                entries: 10,
                startDate: "May 3 2017 5:00:00 PM",
                endDate: "May 5 2017 8:00:00 AM",
                status: ['Inactive', 'Scheduled'],
                actions: ['Promote']
            },
            {
                id: 7,
                title: 'Angel in the Sky',
                focus: 'Vaccines',
                raised: 1.6,
                entries: 10,
                startDate: "Mar 14 2012 3:00:00 AM",
                endDate: "Mar 16 2012 10:00:00 AM",
                status: ['Completed', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 8,
                title: 'Cold Bride',
                focus: 'Water Independence',
                raised: 5,
                entries: 10,
                startDate: "Mar 22 2011 9:00:00 AM",
                endDate: "Mar 24 2011 10:00:00 AM",
                status: ['Active', ''],
                actions: ['Promote']
            },
            {
                id: 9,
                title: 'The Ragged Luck',
                focus: 'Prenatal Health',
                raised: 11,
                entries: 10,
                startDate: "June 7 2010 1:00:00 AM",
                endDate: "June 14 2010 3:00:00 AM",
                status: ['Scheduled', ''],
                actions: ['Accept', 'Decline']
            },
            {
                id: 10,
                title: 'Ashes of Eye',
                focus: 'Childcare',
                raised: 71,
                entries: 10,
                startDate: "July 12 2014 6:00:00 AM",
                endDate: "July 13 2014 10:00:00 AM",
                status: ['Inactive', ''],
                actions: ['Promote']
            },
            {
                id: 11,
                title: 'Sweepstakes Title',
                focus: 'Contraceptive Health',
                raised: 5,
                entries: 10,
                startDate: "Feb 16 2018 10:00:00 AM",
                endDate: "Feb 18 2018 11:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 12,
                title: 'Silken Darkness',
                focus: 'Childcare',
                raised: 7,
                entries: 9,
                startDate: "Mar 20 2016 10:00:00 PM",
                endDate: "Mar 27 2016 12:00:00 PM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 13,
                title: 'The Last Petals',
                focus: 'Education',
                raised: 3,
                entries: 11,
                startDate: "Jan 29 2001 4:00:00 PM",
                endDate: "Jan 30 2001 7:00:00 PM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 14,
                title: 'Dream of Years',
                focus: 'Medical Infrastructure',
                raised: 8,
                entries: 10,
                startDate: "Apr 11 2006 8:00:00 AM",
                endDate: "Apr 14 2006 10:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 15,
                title: 'The Worlds Hunter',
                focus: 'Food Access',
                raised: 12,
                entries: 10,
                startDate: "Sep 28 2009 10:00:00 AM",
                endDate: "Sep 29 2009 14:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 16,
                title: 'The Nothing of the Wings',
                focus: 'Clothing Drive',
                raised: 1,
                entries: 10,
                startDate: "May 3 2017 5:00:00 PM",
                endDate: "May 5 2017 8:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 17,
                title: 'Angel in the Sky',
                focus: 'Vaccines',
                raised: 1.6,
                entries: 10,
                startDate: "Mar 14 2012 3:00:00 AM",
                endDate: "Mar 16 2012 10:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 18,
                title: 'Cold Bride',
                focus: 'Water Independence',
                raised: 5,
                entries: 10,
                startDate: "Mar 22 2011 9:00:00 AM",
                endDate: "Mar 24 2011 10:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 19,
                title: 'The Ragged Luck',
                focus: 'Prenatal Health',
                raised: 11,
                entries: 10,
                startDate: "June 7 2010 1:00:00 AM",
                endDate: "June 14 2010 3:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
            {
                id: 20,
                title: 'Ashes of Eye',
                focus: 'Childcare',
                raised: 71,
                entries: 10,
                startDate: "July 12 2014 6:00:00 AM",
                endDate: "July 13 2014 10:00:00 AM",
                status: ['Active', 'Scheduled', 'Inactive', 'Winner notified', 'Completed', 'Draft']
            },
        ],
    },
    methods: {
    },
    getters: {
        sweepstakes(state) {
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