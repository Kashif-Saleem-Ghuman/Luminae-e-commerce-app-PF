import { createRouter, createWebHistory } from "vue-router";

import ProductCategories from "@/components/ProductCategories";
import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LoginForm";
import ProductDetails from "@/components/ProductDetails";

const routes = [
  {
    path: "/",
    name: "SignUpForm",
    component: <SignUpForm title="Sign Up" />,
  },
  {
    path: "/product-categories",
    name: "ProductCategories",
    component: <ProductCategories />,
  },
  {
    path: "/login",
    name: "LoginForm",
    component: <LoginForm title="Login" />,
  },
  {
    path: "/product-details",
    name: "ProductDetails",
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
