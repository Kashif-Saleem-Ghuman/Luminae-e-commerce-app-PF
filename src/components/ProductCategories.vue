<template>
  <h1>Welcome {{ user.user.username }}</h1>
  <p>Here is a list of the product categories: 
    <ul>
      <li v-for="(productCategory,index) in productCategories" :key="index">
        {{ productCategory }}
      </li>
    </ul>
  </p>
  <input
    type="text"
    placeholder="name of product"
  />
  <button @click="handleSubmit">Submit</button>
</template>

<script setup>
import { useUserlogin } from "@/stores/UserLogin";

import { useProductCategories } from "@/stores/ProductsCategoriesStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const userLoginData = useUserlogin();

//destructuring the store state
const { user } = storeToRefs(userLoginData);

//init the store
const productCategoriesStore = useProductCategories();


// destructuring the store state
const { productCategories } = storeToRefs(productCategoriesStore);

// destructuring the store action
const { fetchProductsCategories } = productCategoriesStore;


console.log("State: ", productCategories);

// onmount hook
onMounted(async () => {
  await fetchProductsCategories();
});
</script>
