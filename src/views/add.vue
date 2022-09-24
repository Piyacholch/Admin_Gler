<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2>Add Chat</h2>
            <form @submit.prevent="createChat">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="ข้อความตอบกลับด้านบวก"
                  v-model="Text"
                />
              </div>
              <button class="btn btn-primary">บันทึก</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ChatPositiveColRef from "../firebase";
  import { addDoc } from "firebase/firestore";
  export default {
    data() {
      return {
        Text: null,
      };
    },
    methods: {
      async createChat() {
        console.log("Creating Document");
        const addedDoc = await addDoc(ChatPositiveColRef, this.$data);
        alert("Document created successfully!");
        console.log(addedDoc);
        this.$router.push("/list");
      },
    },
  };
  </script>
  
  <style>
  </style>