<template>
  <div>
    <h2>Product Detail</h2>
    <p
      v-if="productCategories.singleProduct"
     
    >
    <ul class="text-capitalize font-weight-bold text-center row row-cols-1 row-cols-sm-1 list-unstyled my-5" >
      <li class="col" v-for="item in productCategories.singleProduct" :key="item.id">Title: {{ item}}</li>
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
