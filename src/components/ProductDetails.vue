<template>
  <div>
    <h2>Product Details</h2>
    <p
      v-if="productCategories.singleProduct"
     
    >
    <ul  v-for="item in productCategories.singleProduct" :key="item.id">
      <li>Title: {{ item}}</li>
    </ul>
    </p>
    <div>{{ productCategories.singleProduct }}</div>
  </div>
</template>

<script setup>
import { useProductCategories } from "@/stores/ProductsCategoriesStore";
import { storeToRefs } from "pinia";

// init the store
const productCategoriesData = useProductCategories();

console.log(productCategoriesData.singleProduct);

//destructuring the store state
const { productCategories } = storeToRefs(productCategoriesData);
</script>
