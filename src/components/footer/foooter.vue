<template>
  <Footer class="footer pt-3 pb-3 flex flex-row-reverse justify-around">
    <div class="contactMe" id="contactMe" >
      <ul class="contactMe__ul flex flex-row justify-center items-end">
        <!--LinkedIn -->
        <li class="contactMe__li m-2">
          <a href="#" class="contactMe__a flex items-center justify-end" title="ارتباط از طریق لینکدین">
            LinkedIn
            <lord-icon 
              src="https://cdn.lordicon.com/euybrknk.json"
              trigger="in"
              stroke="bold"
              delay="1500"
              state="in-reveal"
              colors="  primary:#191970,secondary:#3080e8"
              style="width: 32px; height: 32px ;margin-left: 5px; "
            >
            </lord-icon>
            
          </a>
        </li>
        <!-- telegram -->
        <li class="contactMe__li m-2">
          <a href="#" class="contactMe__a flex items-center justify-end" title="ارتباط از طریق تلگرام">
            Telegram
            <img src="../../assets/icons/icons8-telegram.svg" alt="Telegram"  style="width: 32px; height: 32px;margin-left: 5px;"/>
          </a>
        </li>
        <!-- Email -->
        <li class="contactMe__li m-2">
          <a href="#" class="contactMe__a flex items-center justify-end">
            Email
            <lord-icon 
              src="https://cdn.lordicon.com/ozlkyfxg.json"
              trigger="in"
              delay="1000"
              state="in-reveal"
              colors="primary:#213555,secondary:#213555"
              style="width: 32px; height: 32px  ;margin-left: 5px; "
            >
            </lord-icon>
          </a>
        </li>
      </ul>
    </div>
    <!-- title  -->
     <div class="footerTitle flex items-center text-center">
      <h1 class="footerTitle__h1 niconne-regular ">F.D.Ramezani</h1>
     </div>
  </Footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style>
</style>