<template>
  <v-card class="mx-auto" max-width="344">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ user.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="70"
        color="grey"
      >
        {{ getUserInitials(user.name) }}
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-dialog
        v-model="dialog"
        fullscreen
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            View Posts
          </v-btn>
        </template>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Posts added by {{ user.name }}
          </v-card-title>

          <v-card-text>
            <posts :user-id="user.id" />
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>
<script>
import Posts from '@/components/Posts'
export default {
  props: ['user'],
  data(){
    return {
      dialog: false
    }
  },
  methods: {
    getUserInitials(name){
      let names = name.split(' ');
      return names[0][0] + (names[1] && names[1][0]);
    }
  },
  components: {
    Posts
  }
}
</script>