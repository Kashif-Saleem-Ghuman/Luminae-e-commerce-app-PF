import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

// Base url for the api
const BASE_URL = "https://dummyjson.com";

// Async function to fetch the api usig axios
const getUserData = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Store to handle the user login data and actions

export const useUserlogin = defineStore("UserLogin", () => {
  // This is the state of the store before feching data from the api
  const user = ref({
    user: {},
    isLoading: false,
    error: null,
  });

  // getters

  // This is an action to get the user data from the api

  const fetchUserData = async (username, password) => {
    user.value.isLoading = true;
    try {
      const userData = await getUserData(username, password);
      user.value.user = userData;
      user.value.isLoading = false;
    } catch (error) {
      user.value.error = error;
      user.value.isLoading = false;
    }
  };

  return {
    user,
    fetchUserData,
  };
});
