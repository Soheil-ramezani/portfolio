<script setup>
import HeaderView from "@/components/Header/Header.vue"
import NameTitle from "@/components/NameTitle/NameTitle.vue"
import AboutMe from "@/components/AboutMe/AboutMe.vue"
import MySkills from "@/components/MySkills/MySkills.vue"
import MyProjects from "@/components/projects/Projects.vue"
import FooterView from "@/components/footer/foooter.vue"

</script>

<template>
 <HeaderView/>
 <main class="container  pt-24 flex flex-col  justify-center">
    <NameTitle/>
    <AboutMe/>
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
