<template>
  <ion-page class="home">
    <ion-content :fullscreen="true">
      <div id="nav">
        <ion-button router-link="/about" router-direction="forward">About</ion-button>
      </div>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonPage } from '@ionic/vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    IonButton,
    IonContent,
    IonPage
  },
  setup () {
    const router = useRouter()
    return { router }
  }
})
</script>
