<template>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
  </head>
  <div class="content">
    <Navbar />
    <h1 class="header_text">แดชบอร์ด</h1>
  </div>
  <div class="content1">
    <div class="row">
      <div class="col-sm-2">
        <div class="card">
          <div class="card-body">
            <span class="card-title"> ผู้ใช้งาน </span>
            <span class="material-symbols-outlined"> group </span>
            <h1 class="number_dashbord">
              20 
            </h1><span class="close_card">คน</span>
          </div>
        </div>
      </div>

      <div class="col-sm-2">
        <div class="card">
          <div class="card-body">
            <span class="card-title"> ประเมินอารมณ์ </span>
            <span class="material-symbols-outlined"> sentiment_satisfied </span>
            <h1 class="number_dashbord">
              20 
            </h1><span class="close_card">คน</span>
          </div>
        </div>
      </div>

      <div class="col-sm-2">
        <div class="card">
          <div class="card-body">
            <span class="card-title"> ผู้ใช้งาน </span>
            <span class="material-symbols-outlined"> group </span>
            <h1 class="number_dashbord">
              20 
            </h1><span class="close_card">คน</span>
          </div>
        </div>
      </div>

      <div class="col-sm-2">
        <div class="card">
          <div class="card-body">
            <span class="card-title"> ผู้ใช้งาน </span>
            <span class="material-symbols-outlined"> group </span>
            <h1 class="number_dashbord">
              20 
            </h1><span class="close_card">คน</span>
          </div>
        </div>
      </div>

      <div class="col-sm-2">
        <div class="card">
          <div class="card-body">
            <span class="card-title"> ผู้ใช้งาน </span>
            <span class="material-symbols-outlined"> group </span>
            <h1 class="number_dashbord">
              20 
            </h1><span class="close_card">คน</span>
          </div>
        </div>
      </div>


    </div>
  </div>
  
<iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/6f53e21c-1df3-488a-8774-677c6ab6026a">
</iframe>
      
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
/* .content {
  background-image: url("..//assets/img/BG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
} 
@media screen and (min-width: 365px) and (max-width: 700px) {
  .content {
    background-image: url("..//assets/img/BG_mobile.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 60vh;
  }
}*/
.header_text {
  padding: 2% 0% 0% 3%;
}
.content1 {
  padding: 2% 3% 0% 3%;
}
.col-sm-2 {
  text-align: center;
}
.card-title {
  font-size: 20px;
  font-weight: bold;
}
.close_card {
  font-size: 16px;
}
.number_dashbord {
  font-weight: bolder;
}
.material-symbols-outlined {
  
  color: blue;
}
.card {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
@media screen and (min-width: 365px) and (max-width: 700px) {
}
</style>