<template>
  <Navbar />

  <div>
    <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >                
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">                     
        <img class="preview" :src="picture">
        <br>
      <button @click="onUpload">Upload</button>
    </div>   
  </div>

  <div class="Box pt-5 pb-5">
    <div class="box p-4">
      <h2>เพิ่มกิจกรรมที่ชอบ</h2>

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
          @click="submit(data.Name, data.Description, data.Website)"
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
import firebase from "../../firebase";
import axios from "axios";
import Navbar from "../../components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      Name: "",
      Website: "",
      Description: "",
      data: [],

      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  methods: {
    submit(Name, Description, Website) {
      // const formData = new FormData();
      // formData.append("Text", this.Text);
      axios
        .post(
          "http://localhost:5050/insertactivity/" +
            Name +
            "/" +
            Description +
            "/" +
            Website
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/activity");
          // console.log(response.data)
        });
    },
    reset() {
      this.data.Name = "";
      this.data.Description = "";
      this.data.Website = "";
    },

    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }      
      );
    }
  },
};
</script>
    
<style  scoped>
img.preview {
  width: 200px;
}
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
    