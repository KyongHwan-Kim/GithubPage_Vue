<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <strong>Contact to Me</strong>
    </div>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.value"
        class="mx-4"
        :icon="icon.img"
        variant="text"
        @click="redirectPage(icon.url)"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
      Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      <strong>Copyright </strong>{{ new Date().getFullYear() }}. —
      <strong>KyoungHwan Kim</strong> all rights reserved
    </div>
  </v-footer>
</template>

<script>
export default {
  components: {},
  name: "",
  props: {},
  data: () => ({icons: [
      {
        img: "mdi-facebook",
        value: "facebook",
        url: "https://ko-kr.facebook.com/",
      },
      {
        img: "mdi-twitter",
        value: "twitter",
        url: "https://ko-kr.facebook.com/",
      },
      {
        img: "mdi-linkedin",
        value: "linkedin",
        url: "https://www.linkedin.com/in/%EA%B2%BD%ED%99%98-%EA%B9%80-050a43235/",
      },
      {
        img: "mdi-instagram",
        value: "instagram",
        url: "https://www.instagram.com/?hl=ko",
      },
    ],
  }),
  methods: {
    redirectPage(val) {
      window.location.href = val;
    },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
