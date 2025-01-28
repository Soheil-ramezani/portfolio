<template>
  <header class="header flex flex-row justify-around pt-3 pb-3">
    <!-- Title -->
    <div class="headerTitle flex items-center text-center">
      <h1 class="headerTitle__h1 niconne-regular">F.D.Ramezani</h1>
    </div>
    <!-- HeaderLink -->
    <div
      ref="HeaderLink"
      class="HeaderLink flex flex-row justify-around align-middle"
    >
      <a
        href="#AboutMe"
        @click="scrollToSection($event, 'AboutMe')"
        class="mt-1 mr-4 ml-4 lateef-regular"
        >درباره من</a
      >
      <a
        href="#Projects"
        @click="scrollToSection($event, 'Projects')"
        class="mt-1 mr-4 ml-4 lateef-regular"
        >پروژه ها</a
      >
      <a
        href="#contactMe"
        @click="scrollToSection($event, 'contactMe')"
        class="mt-1 mr-4 ml-4 lateef-regular"
        >ارتباط با من</a
      >
    </div>
    <!-- HeaderMenu -->
    <div class="HeaderMenu">
      <img src="/src/assets/icons/burger-menu-svgrepo-com.svg" alt="Menu" style="width: 32px; height: 32px;"  @click="openNav()">
      <div ref="myNav" class="overlay">
        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
          >&times;</a
        >

        <!-- Overlay content -->
        <div class="overlay-content">
          <a
        href="#AboutMe"
        @click="scrollToSection($event, 'AboutMe')"
        class="mt-1 mr-4 ml-4 lateef-regular"
        >درباره من</a
      >
      <a
        href="#Projects"
        @click="scrollToSection($event, 'Projects')"
        class="mt-1 mr-4 ml-4 lateef-regular"
        >پروژه ها</a
      >
      <a
        href="#contactMe"
        @click="scrollToSection($event, 'contactMe')"
        class="mt-1 mr-4 ml-4 lateef-regular"
        >ارتباط با من</a
      >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  methods: {
    //for scroll move
    scrollToSection(event, id) {
      event.preventDefault();
      this. closeNav();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    // for slide hamburgerMenu
    /* Open when someone clicks on the span element */
 openNav() {
  this.$refs.myNav.style.width = "100%";
},
/* Close when someone clicks on the "x" symbol inside the overlay */
 closeNav() {
  this.$refs.myNav.style.width = "0%";
},
handleNavClickOutside(event) {
      if (event.target === this.$refs.myNav) {
        this.closeNav();
      }
    },
    
  },
  mounted() {
    window.addEventListener("click", this.handleNavClickOutside);
  },
};
</script>

<style>
</style>