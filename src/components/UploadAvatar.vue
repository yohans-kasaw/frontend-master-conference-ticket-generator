<template>
    <v-row dense class="mb-5 mx-1">
        <v-col class="upload-avatar rounded-xl cursor-pointer lighten-hover">
            <div
                class="d-flex flex-column align-center justify-center ga-6 py-8"
            >
                <div v-if="image_url" class="icon-upload">
                    <img :src="image_url" width="120rem" />
                </div>

                <div
                    v-else
                    class="icon-upload rounded-xl pt-4 pb-2 px-4"
                    @click="openFileInput"
                >
                    <img :src="upload_icon" width="40rem" />
                </div>

                <div v-if="image_url" class="d-flex ga-3">
                    <v-btn
                        variant="tonal"
                        class="text-none"
                        @click="removeImage"
                    >
                        Remove image
                    </v-btn>
                    <v-btn
                        variant="tonal"
                        class="text-none"
                        @click="openFileInput"
                    >
                        Change image
                    </v-btn>
                </div>

                <div v-else class="font-mid" justify="center">
                    Drag and drop or click to upload
                </div>
                <v-file-input
                    ref="uploader"
                    accept="image/*"
                    class="d-none"
                    type="file"
                    @change="selectImage"
                />
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
import upload_icon from '@src/assets/svgs/icon-upload.svg'
import info from '@src/assets/svgs/icon-info.svg'
export default {
    emits: ['update:avatar_url'],
    props: {
        avatar_url: String,
    },
    data() {
        return {
            upload_icon,
            info,
            // used for uploading
            image_file: null,
            image_url: null,
        }
    },
    methods: {
        openFileInput() {
            this.$refs.uploader.click()
        },

        selectImage(e) {
            this.image_file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(this.image_file)

            reader.onload = (event) => {
                this.image_url = event.target.result
                this.$emit('update:avatar_url', this.image_url)
            }
        },

        removeImage(e) {
            this.image_url = null
            this.$emit('update:avatar_url', null)
        },
    },
    created() {
        if (this.avatar_url) this.image_url = this.avatar_url
    },
}
</script>

<style></style>
