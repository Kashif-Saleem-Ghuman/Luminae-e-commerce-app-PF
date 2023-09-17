<template>
  <h1>Name is {{ productCategories.name }}</h1>
  <input
    type="text"
    placeholder="name of product"
    v-model="productCategoryName"
  />
  <button @click="handleSubmit">Submit</button>
</template>

<script setup>
import { useUserlogin } from "@/stores/UserLogin";

import { useProductCategoriesStore } from "@/stores/ProductsCategoriesStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const userLoginData = useUserlogin();
const { user } = storeToRefs(userLoginData);
console.log("User: ", user);

const productCategoriesStore = useProductCategoriesStore();

const { productCategories } = storeToRefs(productCategoriesStore);
console.log("State: ", productCategories);
// ref for the form
const productCategoryName = ref("");

//destructuring the store productCategoriesStore;

// destructuring the store action
const { addProductCategory } = productCategoriesStore;

// function to handle the submit
const handleSubmit = () => {
  addProductCategory(productCategoryName.value);
  productCategoryName.value = "";
};

console.log()
</script>
