<template>
  <Navbar />

  <div class="Box pt-5 pb-5">
    <div class="box p-4">
      <h2>เพิ่มแหล่งช่วยเหลือ</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ชื่อแหล่งช่วยเหลือ</label
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
        <label for="exampleFormControlInput1" class="form-label"
          >เบอร์โทรศัพท์แหล่งช่วยเหลือ</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="เพิ่มเบอร์โทรศัพท์แหล่งช่วยเหลือ"
          v-model="data.Tel"
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

      <!-- <div class="mb-3">
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
        </div> -->
      <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2"
          @click="submit(data.Name, data.Tel, data.Description)"
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
import Navbar from "../../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      Name: "",
      Tel: "",
      Description: "",
      data: [],
    };
  },
  methods: {
    submit(Name, Tel, Description) {
      // const formData = new FormData();
      // formData.append("Text", this.Text);
      axios
        .post("http://localhost:5050/insertassistance/" + Name +"/"+ Tel +"/"+ Description)
        .then((response) => {
          this.data = response.data;
          this.$router.push("/assistance");
          // console.log(response.data)
        });
    },
    reset() {
      this.data.Name = "";
      this.data.Tel = "";
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
  