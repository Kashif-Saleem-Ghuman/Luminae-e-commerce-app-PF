import { createRouter, createWebHistory } from "vue-router";

import LoginForm from "../components/LoginForm";
import ProductCategories from "../components/ProductCategories";

const routes = [
  {
    path: "/",
    name: "LoginForm",
    component: <LoginForm title="LOGIN" />,
  },
  {
    path: "/product-categories",
    name: "ProductCategories",
    component: <ProductCategories />,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
