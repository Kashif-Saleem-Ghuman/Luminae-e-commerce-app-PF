<template>
  <h2 v-if="user && user.user.username">Welcome {{ user.user.username }}</h2>
  <div v-if="productCategories.categories">
    <h1 class="font-weight-bold h1 text-capitalize">product categories</h1>
    <div
      class="text-capitalize font-weight-bold text-center row row-cols-1 row-cols-sm-3 list-unstyled my-5"
    >
      <div
        class="col my-3"
        v-for="(productCategory, index) of productCategories.categories"
        :key="index"
      >
        {{ productCategory }}
      </div>
    </div>
  </div>

  <div v-if="productCategories.products">
    List of all products:

    <ul
      @click="showProductDetails(item.id)"
      v-for="item in productCategories.products.products"
      :key="item.id"
    >
      <li>id: {{ item.id }}</li>
      <li>title: {{ item.title }}</li>
      <li>description: {{ item.description }}</li>
      <li>price: {{ item.price }}</li>
      <li>discount: {{ item.discountPercentage }}</li>
      <li>rating: {{ item.rating }}</li>
      <li>stock: {{ item.stock }}</li>
      <li>brand: {{ item.brand }}</li>
      <li>category: {{ item.category }}</li>
      <img :src="item.thumbnail" alt="thumbnail" />
      <!-- <li>images: {{ item.images }}</li> -->
      <!-- display images -->
      <div v-for="image in item.images" :key="image.id">
        <img :src="image" alt="product image" />
      </div>
    </ul>
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
const { fetchProductsCategories, fetchAllProducts, updateSingleProduct } =
  productCategoriesStore;

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

// onmount hook
onMounted(async () => {
  await fetchProductsCategories();
  await fetchAllProducts();
});
</script>
