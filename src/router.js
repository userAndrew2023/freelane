import { createWebHistory, createRouter } from "vue-router";
import CreateTask from "./views/CreateTask.vue";
import TasksList from "./views/TasksList.vue";

const routes = [
  {
    path: "/",
    name: "TasksList",
    component: TasksList,
  },
  {
    path: "/task/create/",
    name: "CreateTask",
    component: CreateTask,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;