<template>
    <div>
        <v-img :src="ticket_background_url">
            <div class="d-flex justify-space-between h-100" style="gap: 80px">
                <div class="pa-6 d-flex flex-column justify-space-between">
                    <div class="pt-2">
                        <img :src="log_full_url" height="45" />
                        <div class="ml-16 font-mid" variant="text">
                            {{ userInfo.event_date }} /
                            {{ userInfo.event_city }}
                        </div>
                    </div>
                    <div class="d-flex align-center ga-4">
                        <v-avatar rounded="0" size="90">
                            <v-img
                                :src="userInfo.avatar_url"
                                style="border-radius: 16px"
                            />
                        </v-avatar>
                        <div>
                            <div class="font-weight-medium font-big">
                                {{ userInfo.name }}
                            </div>
                            <div class="d-flex ga-2">
                                <img :src="icon_github" />
                                <span class="font-weight-medium font-mid">
                                    {{ userInfo.github }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-center align-center ml-4">
                    <v-chip
                        class="vertical-text text-h5"
                        color="grey"
                        variant="text"
                    >
                        #{{ userInfo.ticket_number }}
                    </v-chip>
                </div>
            </div>
        </v-img>
    </div>
</template>

<script>
import icon_github from '@src/assets/svgs/icon-github.svg'
import log_full_url from '@src/assets/svgs/logo-full.svg'
import ticket_background_url from '@src/assets/svgs/pattern-ticket.svg'

export default {
    props: {
        userInfo: Object,
    },
    data() {
        return {
            log_full_url,
            icon_github,
            ticket_background_url,
        }
    },
}
</script>

<style>
.vertical-text {
    transform: rotate(90deg);
}
</style>
