<template>
  <v-card>
    <v-toolbar color="primary" height="120">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-container class="mb-0">
        <v-row>
          <v-col>
            <v-spacer></v-spacer>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            Developer Bever
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon @click="postData">
              <v-icon>mdi-dots-vertical</v-icon>
              <b>{{ response }}</b>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-spacer></v-spacer>
          </v-col>
          <v-col class="d-flex align-center">
            <v-tabs v-model="tab" grow>
              <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
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
