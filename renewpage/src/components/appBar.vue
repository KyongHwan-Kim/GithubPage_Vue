<template>
  <v-card>
    <v-app-bar color="grey-lighten-2" height="60" align="bottom">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <span id="blogTitle">{{ blogTitle }}</span>
      <v-spacer></v-spacer>
      <v-tabs v-model="tab">
        <v-tab value="one">Item One</v-tab>
        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>
      </v-tabs>
    </v-app-bar>
</template>

<script>
export default {
  components: {},
  name: "app-bar",
  props: {},
  data: () => ({
    response: {},
    tab: null,
    items: ["about", "Documents", "Contest", "Life", "news"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    sendData: {
      "m2m:cin": {
        con: "on",
      },
    },
  }),
  watch: {},
  created() {},
  mounted() {},
  methods: {
    fetchData: function () {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((response) => {
          this.response = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postData: function () {
      this.$axios({
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-M2M-RI": "123aaghjhk45",
          "X-M2M-Origin": "S",
          "Content-Type": "application/json;ty=4",
        },
        // url: "https://cors-anywhere.herokuapp.com/http://203.250.148.52:20516/Mobius/setting/cnt_test",
        url: "setting/cnt_test",
        data: this.sendData,
      })
        .then((response) => {
          this.response = response;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped></style>
