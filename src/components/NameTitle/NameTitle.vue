<template>
  <div class="AboutMe w-[100%] flex  align-middle justify-center">
    <!-- LeftSide -->
    <div class="leftSide flex items-center justify-center">
      <!-- Photo -->
    <div class="AboutMePhoto flex items-center">
      <img src="../../assets/images/resume.png" alt="" />
    </div>
    </div>
    <!-- rightSide -->
    <div class="rightSide  flex flex-col   justify-center ">
      <!-- AboutMe & -->
     <div class="AboutMeText flex flex-col z-[-1]  ">
      <h1 class="AboutMeText__h1  text-nowrap mb-10 pr-5   amiri-regular-italic " >سهیل رمضانی</h1>
      <p class="AboutMeText__p  lateef-regular text-nowrap  ">
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
  name: "NameTitle",
};
</script>

<style>
</style>