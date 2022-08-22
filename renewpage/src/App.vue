<template>
  <v-layout>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    blogTitle: "Bver의 개발 블로그",
    drawer: true,
    items: [
      { type: "subheader", title: "Group #1" },
      {
        title: "Item #1",
        value: 1,
      },
      {
        title: "Item #2",
        value: 2,
      },
      {
        title: "Item #3",
        value: 3,
      },
      { type: "divider" },
      { type: "subheader", title: "Group #2" },
      {
        title: "Item #4",
        value: 4,
      },
      {
        title: "Item #5",
        value: 5,
      },
      {
        title: "Item #6",
        value: 6,
      },
    ],
    open: ["Users"],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
};
</script>
