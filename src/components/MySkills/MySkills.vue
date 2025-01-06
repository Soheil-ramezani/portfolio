<template>
  <div class="MySkills w-[100%] flex flex-col justify-center items-center">
    <div class="SkillsTitle w-[100%] flex flex-col justify-center items-center">
      <h1 class="SkillsTitle__h1 text-center mb-5">مهارت های من</h1>
      <hr class="SkillsTitle__hr mb-5" />
    </div>
    <!-- Swiper Carousel -->
    <div class="skills-LogoCarousel w-[80%] flex flex-row">

      </div>
  </div>
</template>

<script>
export default {
  name: "MySkills",
  data() {
    return {
      logos: [
        {
          src: "",
          alt: "Logo",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUWfSb6lv-_qrWulMbAgCt1h2d-kvl7yOUQ&s",
          alt: "Logo",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFK64QcwedBq6nTkXnnGIA_GIXVjzX_Ci3g&s",
          alt: "Logo",
        },

        // Add more logos as needed
      ],
    };
  },
};
</script>