<template>
  <Footer class="footer pt-3 pb-3 flex flex-row-reverse justify-around">
    <div class="footer-contactMe" >
      <ul class="contactMe__ul  flex-row justify-center items-end">
        <!--LinkedIn -->
        <li class="contactMe__li m-2">
          <a href="#" class="contactMe__a flex items-center justify-end" title="ارتباط از طریق لینکدین">
            LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(48,128,232,1)"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
            
          </a>
        </li>
        <!-- telegram -->
        <li class="contactMe__li m-2">
          <a href="#" class="contactMe__a flex items-center justify-end" title="ارتباط از طریق تلگرام">
            Telegram
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(48, 128, 232,1)"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.666 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z"
                ></path>
              </svg>
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