<template>
    <div>
        <v-img
            :src="ticket_background_url"
            class="d-flex justify-center align-stretch"
            style="padding-top: 0px !important"
        >
            <div class="pa-sm-3 h-100 d-flex">
                <v-col
                    cols="10"
                    class="d-flex flex-column justify-space-between"
                >
                    <v-row align="start">
                        <v-col style="height: 100px">
                            <div>
                                <img
                                    :src="log_full_url"
                                    class="img-long-logo"
                                    style="width: 75%"
                                />
                            </div>
                            <div class="font-mid text-center">
                                {{ userInfo.event_date }} /
                                {{ userInfo.event_city }}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row dense align="end">
                        <v-col class="d-flex ga-2" cols="auto">
                            <v-img
                                :src="userInfo.avatar_url"
                                style="border-radius: 20%"
                                width="15vw"
                                max-width="80px"
                            />
                            <div class="d-flex flex-column justify-center">
                                <div class="font-weight-medium font-big">
                                    {{ userInfo.name }}
                                </div>
                                <div class="d-flex">
                                    <img :src="icon_github" class="img-icon" />
                                    <span
                                        class="font-weight-medium font-mid pl-1"
                                    >
                                        {{ userInfo.github }}
                                    </span>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="2" class="d-flex justify-center align-center">
                    <div class="vertical-text font-big" style="color: gray">
                        #{{ userInfo.ticket_number }}
                    </div>
                </v-col>
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
