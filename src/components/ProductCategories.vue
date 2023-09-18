<template>
  <h2 v-if="user && user.user.username">Welcome {{ user.user.username }}</h2>
  <div v-if="productCategories.categories">
    <h1 class="font-weight-bold h1 text-capitalize">product categories</h1>
    <div
      class="text-capitalize font-weight-bold text-center row row-cols-1 row-cols-sm-3 list-unstyled my-5"
    >
      <div
        class="col my-3 cursor-pointer"
        v-for="(productCategory, index) of productCategories.categories"
        :key="index"
        @click="showProductListOfSelCategory(productCategory)"
      >
        {{ productCategory }}
      </div>
    </div>
  </div>

  <div v-if="productCategories.products">
    <h1 class="font-weight-bold h1 text-capitalize">List of all products</h1>
    <div
      class="text-capitalize font-weight-bold text-center row row-cols-1 row-cols-sm-1 list-unstyled my-5"
    >
      <ul
        @click="showProductDetails(item.id)"
        v-for="item in productCategories.products.products"
        :key="item.id"
        class="mb-5"
      >
        <li class="col font-weight-bold h1 text-capitalize">
          title: {{ item.title }}
        </li>
        <img class="col" :src="item.thumbnail" alt="thumbnail" />
        <li class="col my-1">description: {{ item.description }}</li>
        <li class="col">price: {{ item.price }}</li>
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
  <input type="text" placeholder="name of product" />
  <button class="btn btn-primary" @click="handleSubmit">Submit</button>
</template>

<script setup>
import { useUserlogin } from "@/stores/UserLogin";
import { useProductCategories } from "@/stores/ProductsCategoriesStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

// init the store
const userLoginData = useUserlogin();

//destructuring the store state
const { user } = storeToRefs(userLoginData);

//init the store
const productCategoriesStore = useProductCategories();

// destructuring the store state
const { productCategories } = storeToRefs(productCategoriesStore);

// destructuring the store action
const {
  fetchProductsCategories,
  fetchAllProducts,
  updateSingleProduct,
  updateProductBasedOnCategory,
} = productCategoriesStore;

// method for showing product details
const showProductDetails = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    // console.log(response.data);
    updateSingleProduct(response.data);
    console.log(productCategories.singleProduct);
    router.push("/product-details");
  } catch (error) {
    console.log(error);
  }
};

const showProductListOfSelCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    console.log(response.data);
    updateProductBasedOnCategory(response.data);
    router.push("/product-list");
  } catch (error) {
    console.log(error);
  }
};

// onmount hook
onMounted(async () => {
  await fetchProductsCategories();
  await fetchAllProducts();
});
</script>
