
<template>
  <Navbar />

  <div class="container-fluid">
    <div class="topic mb-5 pe-3 pt-3">
      <h1>แก้ไขโปรไฟล์</h1>
      <hr />
    </div>

    <div class="profile-box">
      <div class="container">
        <form class="p-0">
          <div class="row pt-5 pb-5">
            <div class="col-sm-5 col-md-6 p-0 img-padding">
              <div class="mainprofile-img mt-3 p-0">
                <img :src="photoURL" class="profile-img" alt="ProfileImage" />
              </div>
              <!-- <div class="user-name mt-4 mb-3">
                  <p class="username">alicha chinnakorn</p>
                </div> -->
            </div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 px-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="displayName"
                />
                <label for="floatingInput">User Name</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  v-model="email"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  v-model="photoURL"
                />
                <label for="floatingInput">PhotoURL</label>
              </div>

              <button
                type="button"
                class="btn btn-warning btn-sm btn-edit p-2"
                @click="updateProfiles(displayName, photoURL)"
              >
                ตกลง
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  <script >
// import router from "@/router";
import { getAuth, updateProfile } from "firebase/auth";
import Navbar from "../../../components/Navbar.vue";
export default {
  components: { Navbar },

  data() {
    return {
        displayName: '',
        photoURL: ''
    };
  },
  methods: {
    async Getuser() {
      //อันนี้ออกทาง console log
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        console.log(email, displayName, emailVerified, photoURL);
      }
    },
    async updateProfiles() {
      const auth = getAuth();
      const user = auth.currentUser;
      updateProfile(user, {
        displayName: this.displayName,
        photoURL: this.photoURL,
       
        
      })
      
        .then(() => {
            console.log(user)
           
        })
        .catch((error) => {
          console.log(error);
        });
    //     if (user) {
    //   router.push("/profile");
    // }
    },
   
  },

  created() {
    this.Getuser();
    this.updateProfiles();
    const auth = getAuth();
    const user = auth.currentUser;
    this.email = user.email;
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    
  },
};
</script>
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@400&display=swap");
* {
  font-family: "Prompt", sans-serif;
}
.container-fluid {
  background-color: #ffefd5;
  height: 50rem;
}
h1 {
  margin: 0px;
}
form {
  border-radius: 8px !important;
  width: 70%;
  margin: auto;
}
.img-padding {
  padding-left: 10px !important;
}
.mainprofile-img {
  margin: 0px !important;
}
.profile-img {
  width: 90%;
  border-radius: 5% !important;
}
.username {
  font-weight: bold;
  font-size: 1.5rem;
}
.edit {
  width: 20px;
  /* margin-left: 20px; */
  margin-top: -5px;
}

input {
  /* background-color: #e6e6fa; */
  width: 100%;
}
.btn-edit {
  width: 100%;
}
</style>