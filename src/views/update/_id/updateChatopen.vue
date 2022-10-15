<template>
  <Navbar />

  <div class="Box pt-5 pb-5">
    <div class="box p-4">
      <h2>เพิ่มข้อความตอบกลับประโยคทักทาย</h2>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >เพิ่มข้อความตอบกลับ</label
        >
        <textarea
          class="form-control"
          id="validationDefault"
          for="validationDefault"
          placeholder="เพิ่มข้อความ"
          rows="7"
          v-model="data.Text"
          required
        ></textarea>
      </div>
      <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2 btn-1"
          @click="updateChatopen(data.Text)"
        >
          ตกลง
        </button>
        <button type="button" class="btn btn-danger" @click="reset()">
          ยกเลิก
        </button>
      </div>
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
      Text: null,
      data: {},
      // id: null,
      id: null, //this is the id from the browser
    };
  },
  mounted() {
    this.getChatByID();
  },
  methods: {
    getChatByID() {
      
      axios
        .get(`http://localhost:5050/chatopenByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;
         
        });
    },
    updateChatopen() {
      axios
        .patch(`http://localhost:5050/updatechatOpen/${this.$route.params.id}/${this.data?.Text}`)
        .then((response) => {
          this.data = response.data;
          this.$router.push("/chatopen");
        
        });
    },
    reset() {
      this.data.Text = "";
    },
  },
};
</script>
  
<style  scoped>
.Box {
  background-color: #f5f5f5;
  height: 750px;
}
h2 {
  text-align: center;
  padding-bottom: 20px;
}
.box {
  background-color: #f5e5c1;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
@media (max-width: 720px) {
  .box{
    width: 80%;
  }
  .footer{
    display: flex;
    justify-content: center !important;
    align-items: center;
  }
  .btn-1{
    margin-left: 0px !important;
  }

}
</style>