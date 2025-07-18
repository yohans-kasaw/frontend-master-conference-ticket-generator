<template>
    <div class="mt-10 d-flex justify-center">
        <div>
            <v-img :src="log_full_url" :width="200" />
        </div>
    </div>
    <div v-if="currentView === 'ticketGen'">
        <TicketGenView @update:userInfo="generateTicket" />
    </div>

    <div v-else-if="currentView === 'ticketConfirmation'">
        <TicketConfirmationView :userInfo="userInfo" />
    </div>
</template>

<script>
import log_full_url from '@src/assets/svgs/logo-full.svg'

import TicketConfirmationView from '@src/views/TicketConfirmationView.vue'
import TicketGenView from '@src/views/TicketGenView.vue'

export default {
    components: {
        TicketConfirmationView,
        TicketGenView,
    },
    data() {
        return {
            currentView: 'ticketGen',
            log_full_url,
            userInfo: null,
        }
    },
    methods: {
        generateTicket(userInfo) {
            this.userInfo = {
                ...userInfo,
                event_date: 'Jan 31, 2025',
                event_city: 'Austin, Tx',
                ticket_number: '01609',
            }

            this.currentView = 'ticketConfirmation'
            console.log(userInfo)
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
