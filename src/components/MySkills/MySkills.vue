<template>
  <div
    class="MySkills w-[100%] flex flex-col justify-center items-center mb-10"
  >
    <div class="SkillsTitle w-[100%] flex flex-col justify-center items-center">
      <h1 class="SkillsTitle__h1 text-center mb-5">مهارت های من</h1>
      <hr class="SkillsTitle__hr mb-5" />
    </div>
    <!-- skills list -->
    <div class="skill-List grid grid-cols-4 gap-4 w-[90%]">
      <div
        class="skill-List-item flex justify-center align-middle mb-5"
        v-for="skill in Skills"
        :key="skill.alt"
      >
        <img
          :src="skill.DarkImage"
          :alt="skill.alt"
          class="skill-List-item__img"
          @click="
            OpenModal(skill.LightImage, skill.alt, skill.title, skill.description)
          "
        />
      </div>
    </div>
    <!-- Skill-Modal -->
    <div ref="skillModal" class="skill-modal">
      <!-- Modal content -->
      <div class="modal-content flex flex-col justify-center align-middle">
        <span class="close text-end" @click="CloseModal()">&times;</span>
        <img ref="modal__img" class="modal__img self-center mb-4" src="" alt="" />
        <h1 ref="modal__h1" class="modal__h1 mb-3 text-start dir--rtl"></h1>
        <p ref="modal__p" class="modal__p dir--rtl"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySkills",
  data() {
    return {
      Skills: [
        {
          DarkImage: "/src/assets/Logos/JavaScript-logo.png",
          LightImage: "/src/assets/Logos/JavaScript-logo.png",
          alt: "js-Logo",
          title: "JavaScript",
          description:
            "JavaScript که به اختصار JS نیز نامیده می‌شود، یکی از محبوبترین زبان‌های برنامه نویسی است. جاوا اسکریپت زبانی سطح بالا، داینامیک، شی‌گرا و تفسیری است که از شیوه‌های مختلف برنامه نویسی پشتیبانی می‌کند. از این زبان می‌توان برای برنامه نویسی سمت سرور (Server Side)، اپلیکیشن‌های موبایل، بازی و اپلیکیشن‌های دسکتاپ استفاده کرد. بنابراین می‌توان اینگونه برداشت کرد که زبان برنامه نویسی جاوا اسکریپت ، یک زبان همه فن حریف است.",
        },
        {
          DarkImage: "/src/assets/Logos/vue-js-Dark.png",
          LightImage:"/src/assets/Logos/vue-js-light.png",
          alt: "Vue-Logo",
          title:"Vue",
          description:
            "ویو یک فریم‌ورک متن باز زبان javascript است که از آن برای توسعه رابط کاربری استفاده می­‌شود. Vue.js برای اولین بار در دسامبر سال 2013 توسط Evan You، یکی از کارمندان سابق گوگل، به دنیا معرفی شد. ایوان که در شغل پیشین خود از فریم­ورک Angular js در توسعه برنامه‌­ها استفاده می‌کرد، تصمیم گرفت تا فریم‌ورکی برای استفاده در پروژه‌­های خود خلق کند که به اندازه Angular قدرتمند و در عین حال سبک‌وزن و انعطاف‌پذیر باشد. شما می­‌توانید از Vue.js در ساخت اپلیکیشن­‌های تحت وب تک صفحه‌ای یا حتی وب‌سایت­‌هایی در مقیاس بزرگ با ساختارهای مختلف استفاده کنید. همچنین می‌­توانید کامپوننت‌­هایی ایجاد کرده و در سایر بخش‌های پروژه یا حتی پروژه­‌های دیگر از آن استفاده کنید.",
        },
        {
          DarkImage: "/src/assets/Logos/JQuery-dark.jpg",
          LightImage:"/src/assets/Logos/JQuery-light.jpg",
          alt: "JQuery-Logo",
          title:"jQuery",
          description:
            "jQuery یک کتابخانه سبک وزن برای جاوا اسکریپت است. این یعنی با حجم کد کمتر نسبت به جاوا اسکریپت، بیشترین کار را انجام می‌دهد. شاید کارهایی که در جاوا اسکریپت نیاز به چندین خط کدنویسی دارد، در جی کوئری تنها در یک خط انجام شود!",
        },
        {
          DarkImage: "/src/assets/Logos/Bootstrap-dark.jpg",
          LightImage:"/src/assets/Logos/Bootstrap-light.jpg",
          alt: "Bootstrap-Logo",
          title:"Bootstrap",
          description:
            "Bootstrap مجموعه ای از ابزارهای رایگان برای ایجاد صفحات وب و نرم افزارهای تحت وب است که شامل دستورات CSS و توابع جاوا اسکریپت جهت تولید و نمایش فرم ها، دکمه ها، تب ها، ستون ها و سایر المان های مورد نیاز طراحی وب می باشد.",
        },
        {
          DarkImage: "/src/assets/Logos/Tailwind-dark.jpg",
          LightImage:"/src/assets/Logos/Tailwind-light.jpg",
          alt: "Tailwind-Logo",
          title:"Tailwind",
          description:
            "Tailwind CSS یک “utility-first” فریم‌ورک CSS است که ابزارها و class‌های پر استفاده CSS را در اختیار شما قرار می‌دهد و می‌توانید به آسانی به کمک آن وبسایت یا برنامه‌تان را استایل‌دهی کنید، البته هدف اساسی این فریم‌ورک آن است که نخواهید با استایل‌های CSS سروکله بزنید و ده‌ها بار یک selector را override کنید.",
        },
        {
          DarkImage: "/src/assets/Logos/Sass_logo-dark.png",
          LightImage:"/src/assets/Logos/Sass_logo-light.png",
          alt: "Sass-Logo",
          title:"Sass",
          description:
            "Tailwind CSS یک “utility-first” فریم‌ورک CSS است که ابزارها و class‌های پر استفاده CSS را در اختیار شما قرار می‌دهد و می‌توانید به آسانی به کمک آن وبسایت یا برنامه‌تان را استایل‌دهی کنید، البته هدف اساسی این فریم‌ورک آن است که نخواهید با استایل‌های CSS سروکله بزنید و ده‌ها بار یک selector را override کنید.",
        },
        {
          DarkImage: "/src/assets/Logos/Docker-Dark.jpg",
          LightImage:"/src/assets/Logos/Docker-Light.jpg",
          alt: "Docker-Logo",
          title:"Docker",
          description:
            "داکر (Docker) یک پلتفرم متن‌­باز، برای مدیریت کانتینرها (Container) است، که سرعت توسعه، تست و اجرای برنامه­‌ها را افزایش می‌­دهد. این پلتفرم، نرم‌­افزار را در واحدهای استانداردی به نام کانتینر بسته‌­بندی می‌­کند؛ کانتینر داکر شامل تمامی کتابخانه‌­ها، ابزارهای سیستمی، ران‌تایم‌­ها و کدهای لازم برای اجرای برنامه است.",
        },
        {
          DarkImage: "/src/assets/Logos/git-dark.jpg",
          LightImage:"/src/assets/Logos/git-light.jpg",
          alt: "git-Logo",
          title:"git",
          description:
            "t قبل از هر چیز یک سیستم کنترل نسخه (VCS) است. امروزه رایج‌ترین سیستم کنترلی که در جهان وجود دارد Git نام دارد. Git یک پروژه منبع باز (open source) بالغ و فعال است که در سال 2005 توسط لینوس توروالدز خالق مشهور سیستم عامل لینوکس ساخته و توسعه یافت.",
        },
      ],
      copy: null,
    };
  },
  methods: {
    OpenModal(imgSrc,imgAlt,title,description) {
      this.$refs.modal__img.src = imgSrc;
      this.$refs.modal__img.alt = imgAlt;
      this.$refs.modal__h1.innerHTML = title +"چیست؟";
      this.$refs.modal__p.innerHTML = description;
      this.$refs.skillModal.style.display = "block";
    },
    CloseModal() {
      this.$refs.skillModal.style.display = "none";
    },
    handleClickOutside(event) {
      if (event.target === this.$refs.skillModal) {
        this.CloseModal();
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.handleClickOutside);
  },
};
</script>