<template>
    <div class="mt-10 d-flex justify-center">
        <div>
            <v-img :src="log_full_url" :width="200" />
        </div>
    </div>
    <div v-if="currentView === 'ticketGen'">
        <TicketGenView />
    </div>

    <div v-else-if="currentView === 'ticketConfirmation'">
        <TicketConfirmationView :ticketInfo="ticketInfo" />
    </div>
</template>

<script>
import log_full_url from '@src/assets/svgs/logo-full.svg'

import TicketConfirmationView from '@src/views/TicketConfirmationView.vue'
import TicketGenView from '@src/views/TicketGenView.vue'

import { mapState } from 'pinia'
import { useUserInfoStore, useConfInfoStore } from '@src/store/store.js'

export default {
    components: {
        TicketConfirmationView,
        TicketGenView,
    },
    data() {
        return {
            currentView: 'ticketGen',
            log_full_url,
        }
    },
    computed: {
        ...mapState(useUserInfoStore, ['userInfo']),
        ...mapState(useConfInfoStore, ['confInfo']),
        ticketInfo() {
            return {
                ...this.userInfo,
                ...this.confInfo,
            }
        },
    },
    watch: {
        userInfo(newValue, oldValue) {
            this.currentView = 'ticketConfirmation'
        },
    },
}
</script>

<style>
.red-gradient-text {
    background-color: white;
    background-image: linear-gradient(to right, var(--primary-red), white);
    background-clip: text;
    color: transparent;
}
</style>
