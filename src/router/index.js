import { createRouter, createWebHistory } from "vue-router";
import ListUser from "@/pages/users/list.vue"
import CreateUser from "@/pages/users/create.vue"
import MainLayout from "@/components/layout/Main.vue";

const routes = [
  {
    path: '/user',
    component: MainLayout,
    children: [
      {
        path: '',
        name: "list",
        component: ListUser,
      },
      {
        path: 'create',
        name: "create",
        component: CreateUser,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router