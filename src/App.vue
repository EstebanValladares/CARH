<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useAuthStore } from './stores/auth'

const auth = useAuthStore();

</script>

<template>
  <v-card elevation="3" max-with="1200" class="mx-auto">
    <v-layout>
      <v-app-bar color="green-lighten-1">
        <template v-slot:prepend>
          <v-btn :to="{name:'home'}"><v-img width="35" :aspect-ratio="1" src="../public/CARH.png" ></v-img></v-btn>
        </template>
        <template v-slot:append>
          <div v-if="auth.isAuth">
            <v-btn :to="{name:'admin-user'}">ADMIN</v-btn>
            <v-btn @click="auth.logout"><i class="fa-solid fa-right-from-bracket"></i></v-btn>
          </div>
          <div v-else>
            <v-btn :to="{name:'home'}">Regeneration</v-btn>
            <v-btn :to="{name:'thin'}">Thinking</v-btn>
            <v-btn :to="{name:'disc'}">Discovering</v-btn>
            <v-btn :to="{name:'maint'}">Maintaining</v-btn>
            <v-btn :to="{name:'us'}">Us</v-btn>
            <v-btn :to="{name:'login'}"><i class="fa-solid fa-user"></i></v-btn>
          </div>
        </template>
      </v-app-bar>
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>