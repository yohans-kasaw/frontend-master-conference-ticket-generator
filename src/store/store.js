import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('user info', {
    state: () => ({
        userInfo: {
            name: null,
            email: null,
            github: null,
            avatar_url: null,
            ticket_number: null,
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
    persist: true,
})

export const useConfInfoStore = defineStore('conf info', {
    state: () => ({
        confInfo: {
            event_date: 'Jan 31, 2025',
            event_city: 'Austin, Tx',
            // should be randomly generated
        },
    }),
    persist: true,
})
