<template>
  <v-navigation-drawer color="grey-darken-2" v-if="drawer">
    <v-row class="ma-3" align="center" justify="center">
      <v-avatar color="grey darken-1" size="150"></v-avatar>
    </v-row>

    <v-list v-model:opened="open" bg-color="transparent">
      <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions"></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {},
  name: "",
  props: {},
  data: () => ({
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
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
