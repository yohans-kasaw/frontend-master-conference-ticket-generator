<template>
    <v-row dense class="mb-5 mx-1">
        <v-col
            class="upload-avatar rounded-xl cursor-pointer lighten-hover"
        >
            <div
                class="d-flex flex-column align-center justify-center ga-6 py-8"
            >
                <div class="icon-upload rounded-xl pt-4 pb-2 px-4">
                    <img :src="upload" width="40rem" />
                </div>

                <div v-if="true" class="d-flex ga-3">
                    <v-btn variant="tonal text-none"> Remove image </v-btn>
                    <v-btn variant="tonal text-none"> Change image </v-btn>
                </div>

                <div v-else class="font-mid" justify="center">
                    Drag and drop or click to upload
                </div>
                <input class="d-none" type="file" />
            </div>
        </v-col>
        <v-col cols="12" class="d-flex align-center ga-3 pt-4 opacity-80">
            <div class="d-flex align-end">
                <img :src="info" width="20px" />
            </div>
            Upload your photo (JPG or PNG, max size: 500KB)
        </v-col>
    </v-row>
</template>

<script>
import upload from '@src/assets/svgs/icon-upload.svg'
import info from '@src/assets/svgs/icon-info.svg'
export default {
    props: {},
    data() {
        return {
            upload,
            info,
        }
    },
}
</script>

<style></style>
