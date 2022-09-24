<template>
  <Navbar />
  <div>
    <div class="box">
      <h2>แก้ไขข้อความตอบกลับประโยคทักทาย</h2>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >แก้ไขข้อความตอบกลับ</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="Text"
         
        ></textarea>
      </div>
      
      <!-- <button type="button" class="btn btn-warning" @click="updatechatopen()">
        
        ตกลง
      </button>
      <button type="button" class="btn btn-danger" @click="reset()">
        ยกเลิก
      </button> -->
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      Text: "",
      loaddata: [],
      id: null
    };
  },
    mounted() {
    this.getChatByID();
  },
  methods: {
    getChatByID() {
      axios.get(`http://localhost:5050/chatopen/${this.$route.params.id}/${this.$route.params.Text}`).then((response) => {
          this.loaddata= response.data; 
          // console.log(response)
        });
    },

    // updateChatopen(Text) {
    //   axios.post(`/insertchatopen/${this.$route.params.id}` + Text)
    //   .then(() => {
    //     // this.data = response.data
    //     this.$router.push('/chatopen')
    //     //   console.log(response.data)
    //   })
    // }

    //   submit() {
    //     const formData = new FormData();
    //     formData.append("Text", this.Text);
    //     axios
    //       .post("http://localhost:5050/insertchatopen/:text", formData)
    //       .then((response) => {
    //         this.data = response.data;
    //         this.$router.push("/chatopen");
    //         // console.log(response.data)
    //       });
    //   },
    //   reset() {
    //       this.Text = ''
    //   }
  },
};
</script>
  
  <style  scoped>
h2 {
  text-align: center;
  padding-bottom: 20px;
}
.box {
  background-color: beige;
  width: 50%;
  margin: auto;
  border-radius: 5px;
}
</style>>
  