import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductCategoriesStore = defineStore(
  "ProductCategoriesStore",
  () => {
    // This is the state of the store
    const productCategories = ref({
      name: "Product Categories",
      categories: [
        {
          id: 1,
          name: "Category 1",
          description: "Category 1 description",
        },
      ],
    });

    // This is a getter
    const getProductCategories = computed(() => productCategories.value);

    // This is a mutation
    function addProductCategory(name) {
      // change the name passed in as name
      productCategories.value.name = name;
    }

    return {
      productCategories,
      getProductCategories,
      addProductCategory,
    };
  }
);
