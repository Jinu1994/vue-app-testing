<template>
  <v-container>
    <p>Users List</p>
    <v-row>
      <v-col
        md="3"
        cols="2"
        v-for="user in users"
        :key="user.id"
      >
        <user :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ApiService } from '@/services/apiService.js';
import User from '@/components/User.vue'
export default {
  async created() {
    let apiService = new ApiService();
    this.users = await apiService.getData();
  },
  data() {
    return {
      users: []
    };
  },
  components: {
    User
  }
};
</script>