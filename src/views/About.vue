<template>
  <ion-page class="about">
    <ion-content :fullscreen="true">
      <h1>This is an about page</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonContent, IonPage }
})
</script>
