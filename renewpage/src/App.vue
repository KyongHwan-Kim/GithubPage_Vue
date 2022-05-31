<template>
  <v-app>
    <app-bar />

    <v-main>
      <v-card height="200px">
        <HelloWorld />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppBar from "@/components/appBar.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
