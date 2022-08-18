import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from '@/views/HelloWorld.vue';
import posts from '@/views/PostsFrame.vue';
// import Error from '@/views/Error.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: HelloWorld,
  },
  {
    path: '/posts',
    name: 'posts',
    component: posts,
  },
  //   {
  //     path: '/error',
  //     name: 'Error',
  //     component: Error,
  //     meta: {
  //       hideNavbar: true,
  //     },
  //   },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
