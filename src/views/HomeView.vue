<script setup>
import HeaderView from "@/components/Header/Header.vue"
import AboutMe from "@/components/AboutMe/AboutMe.vue"
import AboutMyJob from "@/components/AboutMyJob/AboutMyJob.vue"

</script>

<template>
 <HeaderView/>
 <main class="container  pt-24 flex flex-col  justify-center">
    <AboutMe/>
    <AboutMyJob/>
 </main>
</template>

<script>
export default {
name:"HomeView"
}
</script>

<style>

</style>
