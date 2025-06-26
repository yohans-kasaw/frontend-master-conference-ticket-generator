<template>
    <div
        class="ticket-background d-flex justify-space-between"
        style="height: 280px; width: 600px"
    >
        <div class="pa-5 d-flex flex-column justify-space-between">
            <div class="pt-2">
                <v-img :src="log_full_url" :width="280" />
                <div class="ml-16 font-mid" variant="text">
                    {{ eventDate }} / {{ eventCity }}
                </div>
            </div>
            <div class="d-flex align-center ga-4">
                <v-avatar rounded="0" size="100">
                    <v-img :src="userAvatarUrl" style="border-radius: 16px" />
                </v-avatar>
                <div>
                    <div class="font-weight-medium font-big">
                        {{ userName }}
                    </div>
                    <div class="d-flex ga-2">
                        <img :src="icon_github" />
                        <span class="font-weight-medium font-mid">
                            {{ userGithub }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="d-flex justify-center align-center ml-4"
            style="width: 115px"
        >
            <v-chip class="vertical-text text-h5" color="grey" variant="text">
                {{ ticketNumber }}
            </v-chip>
        </div>
    </div>
</template>

<script>
import icon_github from '@src/assets/svgs/icon-github.svg'
import log_full_url from '@src/assets/svgs/logo-full.svg'

export default {
    props: {
        userName: String,
        userGithub: String,
        userAvatarUrl: String,
        eventDate: String,
        eventCity: String,
        ticketNumber: String,
    },
    data() {
        return {
            log_full_url,
            icon_github,
        }
    },
}
</script>

<style>
.ticket-background {
    background-image: url('../assets/svgs/pattern-ticket.svg');
}

.vertical-text {
    transform: rotate(90deg);
}
</style>
