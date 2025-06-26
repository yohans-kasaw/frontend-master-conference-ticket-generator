<template>
    <div class="d-flex flex-column">
        <div class="mt-10 d-flex justify-center">
            <div>
                <v-img :src="log_full_url" :width="280" />
            </div>
        </div>
        <div class="mt-15">
            <div class="font-weight-bold font-extra-big text-center">
                Congrats,
                <span class="red-gradient-text">Jonatan Kirstof!</span>
                <br />
                Your ticket is ready
            </div>
            <div class="mt-8 font-weight-regular font-big text-center">
                We've emailed your ticket to
                <br />
                <span class="red-text">jonatan@email.com</span>
                and will send update in
                <br />
                the run up to the event.
            </div>
            <div style="margin-top: 124px" class="d-flex justify-center">
                <Ticket
                    userName="Jonatan Kirstof"
                    userGithub="@jy-git-jonatan"
                    eventDate="Jan 31, 2025"
                    eventCity="Austin, Tx"
                    ticketNumber="#01609"
                    :userAvatarUrl="image_avatar"
                />
            </div>
        </div>
    </div>
</template>

<script>
import log_full_url from '@src/assets/svgs/logo-full.svg'
import image_avatar from '@src/assets/images/image-avatar.jpg'
import Ticket from '@src/components/Ticket.vue'

export default {
    components: {
        Ticket,
    },
    data() {
        return {
            log_full_url,
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
