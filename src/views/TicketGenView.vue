<template>
    <div class="d-flex flex-column align-center">
        <div style="margin-top: 4vh">
            <div
                class="font-weight-bold font-extra-big text-center mx-auto"
                style="width: 95vw; max-width: 50rem"
            >
                Your Journey to Coding Conf 2025 Starts Here!
            </div>
            <div
                class="mt-8 font-weight-regular font-big text-center opacity-70"
                style="width: 85vw; max-width: 60rem"
            >
                Secure your spot at next year's biggest coding conference.
            </div>
        </div>
        <div
            class="mt-16"
            style="margin-bottom: 10vh; width: 95vw; max-width: 700px"
        >
            <v-form @submit.prevent ref="formRef">
                <v-row dense class="mb-5">
                    <v-col cols="12" class="font-big font-weight-medium mb-2">
                        Upload Avatar
                    </v-col>
                    <UploadAvatar
                        :avatar_url="userInfoForm.avatar_url"
                        @update:avatar_url="handelImageUrlUpdate"
                    />
                </v-row>

                <v-row dense>
                    <v-col cols="12" class="font-big font-weight-medium">
                        Full Name
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="userInfoForm.name"
                            :rules="[rules.required]"
                            placeholder="jhon doe"
                            rounded
                            variant="outlined"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" class="font-big font-weight-medium">
                        Email Adress
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="userInfoForm.email"
                            :rules="[rules.required]"
                            rounded
                            variant="outlined"
                            placeholder="example@example.com"
                            type="email"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" class="font-big font-weight-medium">
                        Github Username
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="userInfoForm.github"
                            :rules="[rules.required]"
                            placeholder="@yourusername"
                            rounded
                            variant="outlined"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-btn
                        class="ticket-btn rounded-xl w-100 text-none mt-5"
                        size="x-large"
                        variant="flat"
                        color="red-lighten-1"
                        type="submit"
                        @click="submitForm"
                    >
                        <span class="text-high-emphasis">
                            Generate My Ticket
                        </span>
                    </v-btn>
                </v-row>
            </v-form>
        </div>
    </div>
</template>

<script>
import UploadAvatar from '@src/components/UploadAvatar.vue'
import { mapActions, mapState } from 'pinia'
import { useUserInfoStore } from '@src/store/store.js'
import { createTicketNumber } from '@src/lib/utils.js'
export default {
    components: {
        UploadAvatar,
    },
    data() {
        return {
            rules: {
                required: (value) => !!value || '*Field is required',
            },
            userInfoForm: {
                name: null,
                email: null,
                github: null,
                avatar_url: null,
            },
        }
    },
    computed: {
        ...mapState(useUserInfoStore, ['userInfo']),
    },
    methods: {
        ...mapActions(useUserInfoStore, ['setUserInfo']),
        handelImageUrlUpdate(url) {
            this.userInfoForm.avatar_url = url
        },
        async submitForm() {
            const { valid } = await this.$refs.formRef.validate()
            if (!valid) return

            this.userInfoForm.ticket_number = createTicketNumber()
            this.setUserInfo(this.userInfoForm)

            this.$router.push({ name: 'TicketConfirm' })
        },
    },
    created() {
        this.userInfoForm = {
            ...this.userInfoForm,
            ...this.userInfo,
        }
    },
}
</script>

<style></style>
