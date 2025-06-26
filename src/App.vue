<template>
    <TicketConfirmation/>
</template>

<script>
import TicketConfirmation from "./views/TicketConfirmation.vue"
export default {
    components: {
        TicketConfirmation
    }
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
