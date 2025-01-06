<template>
  <div class="MySkills w-[100%] flex flex-col justify-center items-center mb-10">
    <div class="SkillsTitle w-[100%] flex flex-col justify-center items-center">
      <h1 class="SkillsTitle__h1 text-center mb-5">مهارت های من</h1>
      <hr class="SkillsTitle__hr mb-5" />
    </div>
    <!-- Swiper Carousel -->
    <div class="skill-List w-[100%] flex justify-center align-middle  ">
      <div class="skill-List-item w-[50%] flex flex-row-reverse justify-center align-middle">
        <div class="item-Logo">
        <img src="/src/assets/Logos/Bootstrap-dark.jpg" class="item-Logo__img" alt="Bootstrap-dark">
      </div>
      <!--  -->
      <div class="item-text text-wrap text-center inline-block p-5">
        <p class="item-text__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora quas veniam in ex, necessitatibus sint aut nisi officia est nulla nemo tempore hic dignissimos, aliquid omnis corrupti blanditiis eligendi possimus! Excepturi ipsam accusantium maiores ducimus illum! Sint officiis, dolore voluptatibus, non, totam voluptatem delectus adipisci consectetur veniam magnam cupiditate?</p>

      </div>
      </div>
      
      </div>
  </div>
</template>

<script>
export default {
  name: "MySkills",
  data() {
    return {
     DarkLogos: [
        {
          src: "@/src/assets/Logos/vue-js-Dark.png",
          alt: "Vue-Logo",
        },
        {
          src: "@/src/assets/Logos/JavaScript-logo.png",
          alt: "js-Logo",
        },
        {
          src: "@/src/assets/Logos/JQuery-dark.jpg",
          alt: "JQuery-Logo",
        },
        {
          src: "@/src/assets/Logos/Bootstrap-dark.jpg",
          alt: "Bootstrap-Logo",
        },
        {
          src: "@/src/assets/Logos/Tailwind-dark.jpg",
          alt: "Tailwind-Logo",
        },
        {
          src: "@/src/assets/Logos/Sass_logo-dark.png",
          alt: "Sass-Logo",
        },
        {
          src: "@/src/assets/Logos/Docker-Dark.jpg",
          alt: "Docker-Logo",
        },
        {
          src: "@/src/assets/Logos/git-dark.jpg",
          alt: "git-Logo",
        },
      ],
     LightLogos: [
        {
          src: "@/src/assets/Logos/vue-js-light.png",
          alt: "Vue-Logo",
        },
        {
          src: "@/src/assets/Logos/JavaScript-logo.png",
          alt: "js-Logo",
        },
        {
          src: "@/src/assets/Logos/JQuery-light.jpg",
          alt: "JQuery-Logo",
        },
        {
          src: "@/src/assets/Logos/Tailwind-light.jpg",
          alt: "Tailwind-Logo",
        },
        {
          src: "@/src/assets/Logos/Sass_logo-light.png",
          alt: "Sass-Logo",
        },
        {
          src: "@/src/assets/Logos/Docker-Light.jpg",
          alt: "Docker-Logo",
        },
        {
          src: "@/src/assets/Logos/git-light.jpg",
          alt: "git-Logo",
        },

      ],
    };
  },
};
</script>