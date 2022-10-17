
<template>
  <h1>profile</h1>
  <div class="welcomeuser">
    <span class="kk">{{email}} <br>
    {{displayName}}</span>
        <img :src="photoURL">
    <!-- <input type="text" v-model="email" class="kkk"> -->


  </div>
</template>
<script >
import { getAuth,updateProfile} from "firebase/auth";
export default {
  data() {
    return {
 
    };
  },
  methods: {
    async Getemailuser() { //อันนี้ออกทาง console log
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        console.log(email, displayName,emailVerified, photoURL);
       
        
      }
    },
    async updateProfile() {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: "Mint",
        photoURL:
          "https://image.shutterstock.com/image-photo/suraj-mukhi-flower-my-great-260nw-1467178388.jpg",
      })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },

  },

  created() {
    this.Getemailuser();
    this.updateProfile();
    /*ตั้งแต่ตรงนี้คือ ข้อมูล user เอามาแสดงหน้า vue*/
    const auth = getAuth();
    const user = auth.currentUser;
    this.email = user.email;
    this.displayName = user.displayName;
    // this.photoURL = user.photoURL;
  },
};
</script>
<style>
h1 {
  text-align: left;
  margin-left: 10%;
}
input.kkk{
    border: 2px solid black;
}
</style>