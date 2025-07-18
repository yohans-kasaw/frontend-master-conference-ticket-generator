<template>
    <div class="mt-10 d-flex justify-center">
        <div>
            <v-img :src="log_full_url" :width="300" />
        </div>
    </div>
    <router-view> 
    </router-view>
</template>

<script>
import log_full_url from '@src/assets/svgs/logo-full.svg'
export default {
    data() {
        return {
            log_full_url,
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
