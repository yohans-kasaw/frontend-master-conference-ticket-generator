<template>
    <div class="mt-10 d-flex justify-center">
        <div>
            <v-img :src="log_full_url" :width="200" />
        </div>
    </div>
    <div v-if="currentView === 'ticketGen'">
        <TicketGenView @confirm="showConfirmation" />
    </div>

    <div v-else-if="currentView === 'ticketConfirmation'">
        <TicketConfirmationView @back="showTicketGen" />
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
        }
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
