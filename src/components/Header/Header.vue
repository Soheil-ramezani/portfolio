<template>
  <header class="header flex flex-row justify-around pt-3 pb-3">
    <!-- Title -->
    <div class="headerTitle flex items-center text-center">
      <h1 class="headerTitle__h1 niconne-regular">F.D.Ramezani</h1>
    </div>
    <!-- PagePartsLink -->
    <div class="PagePartsLink flex flex-row justify-around align-middle">
      <a
        href="#AboutMe"
        @click="scrollToSection($event, 'AboutMe')"
        class="mt-1 mr-4 ml-4"
        >درباره من</a
      >
      <a
        href="#Projects"
        @click="scrollToSection($event, 'Projects')"
        class="mt-1 mr-4 ml-4"
        >پروژه ها</a
      >
      <a
        href="#contactMe"
        @click="scrollToSection($event, 'contactMe')"
        class="mt-1 mr-4 ml-4"
        >ارتباط با من</a
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  methods: {
    scrollToSection(event, id) {
      event.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
</style>