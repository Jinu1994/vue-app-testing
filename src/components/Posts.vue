<template>
  <v-container>
    <div
      class="text-center"
      v-if="showLoader"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>
    <v-row v-else>
      <v-col md="3" v-for="post in posts" :key="post.id">
        <post :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ApiService } from '@/services/apiService'
import Post from '@/components/Post'
export default {
  props: ['userId'],
  async created(){
    try{
      this.showLoader = true;
      let apiService = new ApiService();
      this.posts = await apiService.getPosts(this.userId);
    } finally {
      this.showLoader = false;
    }
  },
  data(){
    return {
      posts: [],
      showLoader: false
    }
  },
  components: {
    Post
  }
}
</script>