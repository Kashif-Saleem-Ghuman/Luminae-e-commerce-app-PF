<template>
  <section class="container forms">
    <div class="form login">
      <h1>{{ props.title || props.defaultText }}</h1>
      <form id="LoginForm" action="#">
        <div class="field input-field">
          <input
            type="text"
            placeholder="username"
            id="email"
            class="input"
            v-model="username"
          />
        </div>

        <div class="field input-field">
          <input
            type="password"
            placeholder="Password"
            id="passwordLogin"
            class="password"
            v-model="password"
          />
          <i class="bx bxs-hide eye-icon"></i>
        </div>
        <div class="btn-wrapper">
          <div class="field">
            <button @click="submitForm" class="button-login">
              {{ user.isLoading ? "Loading..." : "Login" }}
            </button>
          </div>

          <div class="button-field-sign-up">
            <span style="color: red">New User?</span>
            <router-link to="/">Sign Up</router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useUserlogin } from "@/stores/UserLogin";
import { storeToRefs } from "pinia";

const userLoginData = useUserlogin();
const router = useRouter();

//destructuring the store state
const { user } = storeToRefs(userLoginData);

// destructuring the store actions
const { fetchUserData } = userLoginData;
// refs

// state
const username = ref("kminchelle");
const password = ref("0lelplR");

// Toast notifications for error
const toastNotificationsError = (message) => {
  toast.error(message, {
    position: "top-center",
    duration: 3000,
    closeButton: true,
  });
};

// Toast notifications for success
const toastNotificationsSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    duration: 1000,
    closeButton: true,
  });
};

//Function to validate form fields
const valditeFormInputs = async () => {
  await fetchUserData(username.value, password.value);
  if (username.value === "" || password.value === "") {
    // alert("please fill out all the fields");
    //send a toast error message
    toastNotificationsError("please fill out all the fields");
    return false;
  } else {
    return true;
  }
};

// Function to set the user data to local storage
const storeDataToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// Function to redirect to page
const redirectToPage = (page) => {
  setTimeout(() => {
    router.push(page);
  }, 5000);
};

//Function to submit the form
const submitForm = async (e) => {
  e.preventDefault();
  // if validation is successful then store the data to local storage
  const isValid = await valditeFormInputs();
  // check if validateFormInputs is true then store the data to local storage and redirect to page
  //please not since the the username and password are harcoded in the refs so isValid will always be true
  if (isValid) {
    storeDataToLocalStorage("UserData", user.value);
    toastNotificationsSuccess("Sign Up Successful");
    redirectToPage("/product-categories");
  }
};

// Props
const props = defineProps({
  title: String,
  defaultText: {
    type: String,
    default: "Login asdasd",
  },
});
</script>
