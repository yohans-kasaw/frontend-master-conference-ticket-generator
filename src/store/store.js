import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('count', {
    state: () => ({
        userInfo: {
            name: null,
            email: null,
            github: null,
            avatar_url: null,
        },
    }),
    actions: {
        setUserInfo(userInfo) {
            this.userInfo = {
                ...this.userInfo,
                ...userInfo,
            }
        },
    },
})

export const useConfInfoStore = defineStore('conf', {
    state: () => ({
        confInfo: {
            event_date: 'Jan 31, 2025',
            event_city: 'Austin, Tx',
            // should be randomly generated
            ticket_number: '01609',
        },
    }),
})
