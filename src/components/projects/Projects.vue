<template>
  <div id="Projects" class="Projects mt-10  flex flex-col justify-center items-center">
    <div class="Projects-title mb-10 self-center">
        <h1 class="Projects-title__h1">آثار من: سفرهای خلاقانه</h1>
        
    </div>
    <!-- Projects List -->
    <div class="projects-list mb-10">
        <div class="project-list-item flex flex-col items-center bg-gray-700 pt-5 pl-3" v-for="project in MyProjects" :key="project.id" >
            <div class="item__img w-[90%] ">
                <img :src="project.img" :alt="project.name">
            </div>
            <div class="item-title mb-2 mt-3">
            <h1 class="niconne-regular">
            {{ project.name }}
          </h1>
          <button class="item__btn text-center w-[90%]" @click="OpenModal(project.img , project.name ,project.name ,project.area , project.pages, project.techs , project.address)">مشاهده جزئیات</button>
          </div> 
        </div>
    </div>
 <!-- Project-Modal -->
 <div ref="ProjectModal" class="Project-modal">
      <!-- Modal content -->
      <div class="modal-content flex flex-col justify-center align-middle">
        <span class="close text-end" @click="CloseModal()">&times;</span>
        <img ref="modal__img" class="modal__img self-center mb-4" src="" alt="" />
        <h1  class="modal__h1 mb-3 text-center dir--rtl niconne-regular" ref="modal__h1"></h1>
        <h3 class="dir--rtl text-center" ref="modal__h3_title"></h3>
        <h3 class="dir--rtl text-center" ref="modal__h3_area"></h3>
        <h3 class="dir--rtl text-center" ref="modal__h3_pages"></h3>
        <h3 class="dir--rtl text-center" ref="modal__h3_techs"></h3>
        <button class="modal__btn mt-5"><a ref="modal__btn_a" class="modal__btn_a dir--rtl" href="" type="blank"></a></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:"MyProjects",
data(){
  return{
    MyProjects:[
      {id:1 , name:"Golden Movie" , img:"https://portfolio-86pt2r9j4-soheil-ramezanis-projects.vercel.app/src/assets/images/GoldenMovie.png" , address:"https://golden-movie-tau.vercel.app/",pages:["LogIn","خانه","توضیحات فیلم"],area:"یک سایت برای دانلود فیلم و سریال است  " , techs:"JavaScript ،Vite ، Vue js ، Sass ، Bootstrap"  }
    ]

  }
},
methods: {
    OpenModal(imgSrc,imgAlt,title,area,pages, techs,address) {
      this.$refs.modal__img.src = imgSrc;
      this.$refs.modal__img.alt = imgAlt;
      this.$refs.modal__h1.innerHTML = title;
      this.$refs.modal__h3_area.innerHTML = "حوزه:"+'</br>'+area;
      this.$refs.modal__h3_pages.innerHTML = "صفحات:"+'</br>'+pages;
      this.$refs.modal__h3_techs.innerHTML = "زبان و فریمورک ها:"+'</br>'+techs;
      this.$refs.modal__btn_a.href=address;
      this.$refs.modal__btn_a.innerHTML= title+"رفتن به سایت";
      this.$refs.ProjectModal.style.display = "block";
    },
    CloseModal() {
      this.$refs.ProjectModal.style.display = "none";
    },
    handleClickOutside(event) {
      if (event.target === this.$refs.ProjectModal) {
        this.CloseModal();
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.handleClickOutside);
  },
}
</script>

