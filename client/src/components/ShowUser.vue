<template>
  <div>
    <h1>Show Mouse</h1>
    <p>id: {{ mouseId }}</p>
    <p>ยี่ห้อ: {{ mouse.model }}}</p>
    <p>ขนาด: {{ mouse.size }}</p>
    <p>ปุ่ม: {{ mouse.button }}</p>
  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      mouse: null,
    };
  },
  async created() {
    try {
      let mouseId = this.$route.params.mouseId;
      this.mouse = (await UserService.show(mouseId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>