<template>
  <Navbar />

  <div class="Box pt-5 pb-5">
    <div class="box p-4">
      <h2>แก้ไขกิจกรรมที่ชอบ</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ชื่อกิจกรรม</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="เพิ่มชื่อแหล่งช่วยเหลือ"
          v-model="data.Name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >ข้อมูลเพิ่มเติม</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="ข้อมูลเพิ่มเติม"
          v-model="data.Description"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >เว็บไซต์อ้างอิง</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="เพิ่มเว็บไซต์อ้างอิง"
          v-model="data.Website"
        />
      </div>
      <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2"
          @click="updateChatopen(data.Name, data.Website, data.Description)"
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
      id: null, 
      Name : "",
      Website :"",
      Description : ""
    };
  },
  mounted() {
    this.getAcitityByID();
  },
  methods: {
    getAcitityByID() {
      axios
        .get(`http://localhost:5050/ActivityByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;
        });
    },
    updateChatopen() {
      axios
        .patch(
          `http://localhost:5050/updateActivity/${this.$route.params.id}/${this.data?.Name}/${this.data?.Website}/${this.data?.Description}`
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/activity");
        });
    },
    reset() {
      this.data.Name = "";
      this.data.Website = "";
      this.data.Description = "";
      
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
</style>>
    