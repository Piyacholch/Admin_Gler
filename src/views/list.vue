<template>
    <div class="home">
      <h2>Chatpositive</h2>
      <router-link
                    :to="{ path: `/add` }"
                    class="btn btn-primary ml-2"
                    id="float_right"
                    >add</router-link>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <ul class="list-group">
              <li
                v-for="chat in chats"
                :key="chat.id"
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                {{ chat.Text }}
                <span class="badge badge-primary badge-pill">
                  <router-link 
                  :to="{ path: `/update/${chat.id}` }
                   "
                    class="btn btn-primary ml-2"
                    >Edit</router-link
                  >
                  <a href="#" class="btn btn-danger" @click="deleteChat(chat.id)"
                    >Delete</a
                  >
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ChatPositiveColRef from "../firebase";
  import { getDocs, doc, deleteDoc } from "firebase/firestore";
  export default {
    name: "Home",
    components: {},
    data() {
      return {
        chats: [],
      };
    },
    methods: {
      async fetchChat() {
        let chatsSnapShot = await getDocs(ChatPositiveColRef);
        let chats = [];
        chatsSnapShot.forEach((chat) => {
          let chatData = chat.data();
          chatData.id = chat.id;
          chats.push(chatData);
        });
        console.log(chats);
        this.chats = chats;
      },
      async deleteChat(chatId) {
        let chatRef = doc(ChatPositiveColRef, chatId);
        await deleteDoc(chatRef);
        alert("chat deleted successully!");
        this.$router.go();
      },
    },
  
    created() {
      this.fetchChat();
    },
  };
  </script>
