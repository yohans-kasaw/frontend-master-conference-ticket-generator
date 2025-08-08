<template>
    <div class="d-flex flex-column align-center" style="margin-bottom: 15vh">
        <div style="margin-top: 4vh">
            <div
                class="font-weight-bold font-extra-big text-center mx-auto"
                style="width: 95vw; max-width: 50rem"
            >
                Congrats,
                <span class="red-gradient-text">{{ ticketInfo.name }}!</span>
                Your ticket is ready.
            </div>
            <div
                class="mt-8 font-weight-regular font-big text-center mx-auto"
                style="width: 85vw; max-width: 40rem"
            >
                We've emailed your ticket to
                <span class="red-text">{{ ticketInfo.email }}</span>
                and will send update in the run up to the event.
            </div>
        </div>
        <div style="width: 95%; max-width: 35rem; margin-top: 10vh">
            <TicketCard :ticketInfo="ticketInfo" />
            <div class="mt-4 text-right mr-4">
                <router-link to="/">change</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import TicketCard from '@src/components/TicketCard.vue'
import { mapState } from 'pinia'
import { useUserInfoStore, useConfInfoStore } from '@src/store/store.js'

export default {
    components: {
        TicketCard,
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
