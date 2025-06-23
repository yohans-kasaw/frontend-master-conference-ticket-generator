<template>
    <div class="d-flex align-center flex-column ga-10">
        <div class="pt-10">
            <img :src="logUrl" />
        </div>
        <div
            class="text-center font-weight-bold font-inconsolata"
            style="font-size: 4rem; font-weight: 800"
        >
            Congrats, <span class="red-gradient-text">Jonatan Kirstof!</span>
            <br />
            Your ticket is ready
        </div>
        <div
            class="text-center font-inconsolata"
            style="font-size: 2rem; font-weight: 400"
        >
            We've emailed your ticket to
            <br />
            <span class="red-text">jonatan@email.com</span> and will send update
            in
            <br />
            the run up to the event.
        </div>
        <div class="ticket-display">
            <img :src="logUrl" />
        </div>
    </div>
</template>

<script setup>
import logUrl from './assets/svgs/logo-full.svg'
</script>

<style></style>
