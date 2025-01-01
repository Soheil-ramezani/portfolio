<template>
  <header class="flex flex-row justify-around pt-3 pb-3">
    <!-- PagePartsLink -->
    <div class="PagePartsLink flex flex-row justify-around align-middle">
      <a href="#" class="mt-1 mr-4 ml-4">درباره من</a>
      <a href="#" class="mt-1 mr-4 ml-4">پروژه ها</a>
      <a href="#" class="mt-1 mr-4 ml-4">ارتباط با من</a>
    </div>
    <!-- SocialMediaLink -->
    <div class="SocialMediaLink flex flex-row justify-around align-middle">
      <!-- LinkedIn -->
      <a
        href="#"
        class="header__links mr-2 ml-2"
        title="ارتباط از طریق لینکدین"
      >
        <lord-icon
          src="https://cdn.lordicon.com/dsdlqjde.json"
          trigger="hover"
          state="hover-draw"
          colors="primary:#191970,secondary:#3080e8"
          style="width: 32px; height: 32px"
        >
        </lord-icon>
      </a>
      <!-- Telegram -->
      <a href="#" class="header__links mr-2 ml-2" title="ارتباط از طریق تلگرام">
        <img src="../../assets/icons/icons8-telegram.svg" alt="Telegram" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style>
</style>