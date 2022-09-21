<template>
  <div>
    <input type="file" @change="onFileSekected"/>
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            selectedFile: null,
            data: []
        }
    },
    methods: {
        onFileSekected(event) {
            this.selectedFile = event.target.files[0]
        // console.log(event)
        },
        onUpload() {
            const formData = new FormData();
            formData.append('image', this.selectedFile,
            this.selectedFile.name)
            axios.post('asia.artifacts.gler-yglt.appspot.com', formData)
            .then(res => {
                console.log(res.data)
            })
        }
    }
}
</script>

<style>

</style>