import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

// Base url for the api
const BASE_URL = "https://dummyjson.com";

// Async function to fetch the api usig axios
const getProductsCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Async function to fetch the api usig axios
const getAlllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const useProductCategories = defineStore(
  "ProductCategoriesStore",
  () => {
    // This is the initial state of the store
    const productCategories = ref({
      categories: null,
      products: null,
      productBasedOnCategory: null,
      singleProduct: null,
      isLoading: false,
      error: null,
    });

    // Getters

    // This is an action to get the product categories from the api

    const fetchProductsCategories = async () => {
      productCategories.value.isLoading = true;
      try {
        const response = await getProductsCategories();
        productCategories.value.categories = response;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllProducts = async () => {
      productCategories.value.isLoading = true;
      try {
        const response = await getAlllProducts();
        productCategories.value.products = response;
      } catch (error) {
        console.log(error);
      }
    };

    //action to update the single product
    const updateSingleProduct = (product) => {
      productCategories.value.singleProduct = product;
    };
    // Action to update the product based on the category
    const updateProductBasedOnCategory = (category) => {
      productCategories.value.productBasedOnCategory = category;
    };
    return {
      productCategories,
      fetchProductsCategories,
      fetchAllProducts,
      updateSingleProduct,
      updateProductBasedOnCategory,
    };
  }
);
