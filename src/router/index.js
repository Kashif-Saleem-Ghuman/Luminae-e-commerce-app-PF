import { createRouter, createWebHistory } from "vue-router";

import LoginForm from "../components/LoginForm";

const routes = [
  {
    path: "/",
    name: "LoginForm",
    component: <LoginForm title="LOGIN" />,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
