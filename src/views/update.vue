<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2>Edit ChatPositive</h2>
            <form @submit.prevent="updatechat">
              <div class="form-group">
                <textarea
                  class="form-control mb-2"
                  placeholder="ข้อความตอบกลับด้านบวก"
                  v-model="chatInfo.Text"
                ></textarea>
              </div>
              <button class="btn btn-primary">ยืนยันอัปเดต</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ChatPositiveColRef from "../firebase";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  export default {
    data() {
      return {
        selectedchat: {},
        chatId: null,
        docRef: null,
        chatInfo: {
          Text: null,
        },
      };
    },
  
    methods: {
      async getchat() {
        let chatRef = doc(ChatPositiveColRef, this.chatId);
        this.docRef = chatRef;
        let chat = await getDoc(this.docRef);
        let chatData = chat.data();
        this.chatInfo.Text = chatData.Text;
      },
      async updatechat() {
        await setDoc(this.docRef, this.chatInfo);
        alert(
          `chat has been updated successfully!`
        );
        this.$router.push("/list");
      },
    },
  
    created() {
      let chatId = this.$route.params.chatId;
      this.chatId = chatId;
      this.getchat();
    },
  };
  </script>
  
  <style>
  </style>