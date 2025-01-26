<template>
  <div class="Projects mt-10  flex flex-col justify-center items-center">
    <div class="Projects-title mb-10 self-end pr-[5%]">
        <h1 class="Projects-title__h1">آثار من: سفرهای خلاقانه</h1>
        
    </div>
    <div class="projects-list mb-60">
        <div class="project-list-item flex flex-col items-center bg-gray-700 pt-5 pl-3" v-for="project in MyProjects" :key="project.id">
            <div class="item__img w-[90%] ">
                <img :src="project.img" :alt="project.name">
            </div>
            <div class="item-title mb-2 mt-3">
            <h1 class="niconne-regular">
            {{ project.name }}
          </h1>
          </div> 
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
      {id:1 , name:"Golden Movie" , img:"/src/assets/images/GoldenMovie.png" , address:"https://golden-movie-tau.vercel.app/",info:"GoldenMovieیک سایت برای دانلود فیلم و سریال است  و شامل صفحات زیر میشود:" , techs:["JavaScript", "Vite"," Vue js", "Sass","Bootstrap"],pages:["Login","خانه","توضیحات فیلم"] }
    ]

  }
}
}
</script>

