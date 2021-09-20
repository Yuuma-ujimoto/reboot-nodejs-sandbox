<template>

  <form  @submit.prevent="submit">
    <input type="file" @change="file_change">
    <button type="submit">送信</button>
  </form>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data(){
    return {
      file:null
    }
  },
  methods:{
    file_change(event){
      const file = event.target.files[0]
      if(file){
        this.file = file
      }
    },
    submit:async function(){
      if (!this.file){
        alert("画像がない")
        return
      }
      // FormDataはmultipart/form-data形式
      // URLSearchParamsはapplication/x-www-form-urlencoded形式
      const postParams = new FormData()
      postParams.append("file",this.file)
      const axios_result = await axios.post("http://localhost:3000/post",postParams)
      console.log(axios_result)
    }
  }
}
</script>
