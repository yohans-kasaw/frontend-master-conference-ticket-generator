<template>
    <div class="d-flex flex-column align-center">
        <div class="mt-15">
            <div
                class="font-weight-bold font-extra-big text-center mx-auto"
                style="width: 95vw; max-width: 55rem"
            >
                Congrats,
                <span class="red-gradient-text">{{ userInfo.name }}</span>
                Your ticket is ready.
            </div>
            <div
                class="mt-8 font-weight-regular font-big text-center mx-auto"
                style="width: 85vw; max-width: 40rem"
            >
                We've emailed your ticket to
                <span class="red-text">{{ userInfo.email }}</span>
                and will send update in the run up to the event.
            </div>
        </div>
        <div style="width: 42rem; padding-top: 8rem">
            <TicketCard :userInfo="userInfo" />
        </div>
    </div>
</template>

<script>
import image_avatar from '@src/assets/images/image-avatar.jpg'
import TicketCard from '@src/components/TicketCard.vue'

export default {
    components: {
        TicketCard,
    },
    data() {
        return {
            image_avatar,
            userInfo: {
                name: 'Jonatan Kirstof',
                email: "jon@gmail.com",
                github: 'jon',
                avatar_url: image_avatar,
                event_date: 'Dec 12',
                event_city: 'Las Vegas',
                ticket_number: '123432',
            },
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
