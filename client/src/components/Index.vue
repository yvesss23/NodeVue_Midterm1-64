<template>
  <div>
    <h1>Get All Mouses</h1>
    <div v-if="Mouses.length">
      <h4>จำนวนเม้า {{ Mouses.length }}</h4>
      <p>
        <button v-on:click="navigateTo('/mouse/create')">
            สร้างผู้ใช้งาน
          </button>
      </p>
      <div v-for="mouse in mouses" v-bind:key="mouse.id">
        <p>id: {{ mouse.id }}</p>
        <p>ชื่อ-นามสกุล: {{ mouse.model }}}</p>
        <p>Email: {{ mouse.size }}</p>
        <p>Password: {{ mouse.buttons }}</p>
        <p>
          <button v-on:click="navigateTo('/mouse/' + mouse.id)">
            ดูข้อมูลผู้ใช้
          </button>
          <button v-on:click="navigateTo('/mouse/edit/' + mouse.id)">
            แก้ไขข้อมูล
          </button>
          <button v-on:click="deletemouse(mouse)">
            ลบข้อมูล
          </button>
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deletemousue(mouse){
      let result = confirm("Want to delete")
      if(result){
        try{
          await UsersService.delete(mouse)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.users = (await UsersService.index()).data
    }
  },
};
</script>
<style scoped>
</style>