<template>
  <div class="AboutMe flex flex-row-reverse align-middle justify-center">
    <!-- LeftSide -->
    <div class="leftSide w-[40%]">
      <!-- Photo -->
    <div class="AboutMePhoto">
      <img src="../../assets/images/resume.png" alt="" />
    </div>
    </div>
    <!-- rightSide -->
    <div class="rightSide w-[40%]  flex flex-col items-end pr-[5%] justify-center ">
      <!-- AboutMe & -->
     <div class="AboutMeText w-[100%] flex flex-col  ">
      <h1 class="AboutMeText__h1 pr-[10%]  mb-10  text-nowrap amiri-regular-italic " >سهیل رمضانی</h1>
      <p class="AboutMeText__p  mr-[5%] lateef-regular text-nowrap ">
      برنامه نویس فرانت اند
      <span class="playwrite-vn">(Front End-developer)</span>  
      </p>
     </div>
     <!-- DownloadResume -->
      <div class="DownloadResume ">
        <button class="DownloadResume__btn text-center p-1 mr-5">
          دانلود رزومه
         
        </button>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
</style>