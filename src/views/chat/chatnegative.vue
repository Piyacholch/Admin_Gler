<template>
  <Navbar />
  <div class="Box">
    <div>
      <h1>ชุดข้อความตอบกลับประโยคด้านลบ</h1>
    </div>

    <div class="search">
      <div class="row row-menu">
        <div class="col-lg-9 col-sm-10 col-md-9">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search.."
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-warning"
              type="button"
              id="button-addon2"
            >
              ค้นหา
            </button>
          </div>
        </div>
        <div class="col-3 col-sm-2 col-md-3 col-flex">
          <a href="/insertchatnegative">
            <button type="button" class="btn btn-outline-success">
              เพิ่มข้อความ
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="block">
      <div
        class="row block-item block-bm"
        v-for="(item, index) in loaddata"
        :key="index"
      >
        <!-- <div class="col-1">{{ item.id }}</div> -->
        <div class="col-8">{{ item.Text }}</div>
        <div class="col-3">
          <button
            type="button"
            class="btn btn-outline-primary edit"
            @click="$router.push(`/updatechatnegative/${item.id}/${item.Text}`)"
          >
            แก้ไข
          </button>

          <button
            type="button"
            class="btn btn-outline-danger delete"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="confirmdeletezone(item.id)"
          >
            ลบ
          </button>
        </div>
      </div>

      <!-- Button trigger modal -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content border border-warning border-5">
            <div class="modal-header border-0">
            <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
            <button
              type="button"
              class="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            </div>
            <div class="modal-body text-center fs-4 fw-bold">คุณต้องการลบข้อความนี้หรือไม่ ?</div>
            <div  class="modal-footer border-0 mt-3">

              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                @click="deletechat(id)"
              >
                ยืนยัน
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                ยกเลิก
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Navbar from "../../components/Navbar.vue";
import axios from "axios";
export default {
  components: { Navbar },
  watch: {
    search() {
      this.getchatopen();
    }
  },
  data() {
    return {
      loaddata: [],
      id: "",
      search: "",
      Text: "",
    };
  },
  mounted() {
    this.getchatopen();
  },
  methods: {
    getchatopen() {
      axios.get("http://localhost:5050/chatnegative").then((response) => {
        this.loaddata = response.data; 
        // console.log(response);
      });
    },
    // confirmdeletezone(id) {
    //   this.dialog_delete = true
    //   this.id = id
    // },
    confirmdeletezone(id) {
      this.id = id;
    },
    deletechat(id) {
      axios.delete("http://localhost:5050/chatnegative/" + id).then(() => {
        this.id = id;
        this.getchatopen();
        // console.log(response.data)
      });
    },
  },
};
</script>
  
  <style scoped>
.Box {
  background-color: #f5f5f5;
}
h1 {
  padding-left: 60px;
  padding-top: 40px;
  padding-bottom: 50px;
}
/* .search {
  padding-left: 60px;
} */
.row-menu {
  width: 90%;
  margin: auto;
}
.col-9 {
  padding: 0px;
}
.bnt-insert {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 30px;
}
.input-group {
  width: 40%;
  padding-bottom: 20px;
}
.col-flex {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px !important;
  padding-bottom: 20px !important;
}
.block-bm {
  margin-bottom: 20px !important;
}
.block-item {
  border-radius: 8px;
  background-color: #ffff;
  margin-bottom: 10px;
  width: 90%;
  margin: auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}
.block-item:hover {
  border-left: 5px solid orange;
  transform: scale(1.03, 1.03);
}
.col-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 1.2rem;
}
.col-8 {
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.2rem;
}
.col-3 {
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.2rem;
}
.edit {
  width: 30%;
}
.delete {
  width: 30%;
  margin-left: 10px;
}
</style>