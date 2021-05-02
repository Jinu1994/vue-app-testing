<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div class="post-title pa-1">
        {{ post.title }}
      </div>
      <div class="text--primary post-body">
        {{ post.body }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-icon
        large
        color="blue darken-2"
      >
        mdi-message-text
      </v-icon>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['post']
}
</script>
<style scoped>
  .post-body{
    min-height: 5rem;
    max-height: 5rem;
    text-overflow: ellipsis;
  }
  .post-title{
    min-height: 2rem;
    max-height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>