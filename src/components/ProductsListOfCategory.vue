// Products list based on category

<template>
  <div v-if="productCategories.productBasedOnCategory">
    <h1 class="font-weight-bold h1 text-capitalize">
      Product list based on category
    </h1>
    <div
      class="text-capitalize font-weight-bold text-center row row-cols-1 row-cols-sm-1 list-unstyled my-5"
    >
      <ul
        @click="showProductDetails(item.id)"
        v-for="item in productCategories.productBasedOnCategory.products"
        :key="item.id"
        class="mb-5"
      >
        <li class="col font-weight-bold h1 text-capitalize">
          {{ item.title }}
        </li>
        <img class="col" :src="item.thumbnail" alt="thumbnail" />
        <li class="col my-1">description: {{ item.description }}</li>
        <li class="col">price: $ {{ item.price }}</li>
        <li class="col my-1">discount: {{ item.discountPercentage }}</li>
        <li class="col">rating: {{ item.rating }}</li>
        <li class="col my-1">stock: {{ item.stock }}</li>
        <li class="col">brand: {{ item.brand }}</li>
        <li class="col my-2">category: {{ item.category }}</li>
        <div class="row row-cols-1 row-cols-sm-3 text-center p-5">
          <img
            v-for="image in item.images"
            :key="image.id"
            class="col my-1"
            :src="image"
            alt="product image"
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useProductCategories } from "@/stores/ProductsCategoriesStore";
import { storeToRefs } from "pinia";

// init the store
const productCategoriesData = useProductCategories();

//destructuring the store state
const { productCategories } = storeToRefs(productCategoriesData);
console.log(productCategories.productBasedOnCategory);

console.log("List page:", productCategories.categories);
</script>
