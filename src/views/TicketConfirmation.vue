<template>
    <div class="d-flex flex-column">
        <div class="mt-15 mx-auto">
            <div
                class="font-weight-bold font-extra-big text-center mx-auto"
                style="width: 85vw; max-width: 55rem;"
            >
                Congrats,
                <span class="red-gradient-text"> Jonatan Kirstof! </span>
                Your ticket is ready
            </div>
            <div
                class="mt-8 font-weight-regular font-big text-center mx-auto"
                style="width: 60vw; max-width: 40rem;"
            >
                We've emailed your ticket to
                <span class="red-text">jonatan@email.com</span>
                and will send update in the run up to the event.
            </div>
        </div>
    </div>
</template>

<script>
import image_avatar from '@src/assets/images/image-avatar.jpg'
import Ticket from '@src/components/Ticket.vue'

export default {
    components: {
        Ticket,
    },
    data() {
        return {
            image_avatar,
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
