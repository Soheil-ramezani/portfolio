<script setup>
import HeaderView from "@/components/Header/Header.vue"
import AboutMe from "@/components/AboutMe/AboutMe.vue"
import AboutMyJob from "@/components/AboutMyJob/AboutMyJob.vue"
import MySkills from "@/components/MySkills/MySkills.vue"
import MyProjects from "@/components/projects/Projects.vue"
import FooterView from "@/components/footer/foooter.vue"

</script>

<template>
 <HeaderView/>
 <main class="container  pt-24 flex flex-col  justify-center">
    <AboutMe/>
    <AboutMyJob/>
    <MySkills/>
    <MyProjects/>
 </main>
 <FooterView/>
</template>

<script>
export default {
name:"HomeView"
}
</script>

<style>

</style>
