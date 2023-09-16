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
            <button @click="submitForm" class="button-login">Login</button>
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

<!-- <script>
export default {
  name: "HeaderForm",
  components: {},
  props: {
    title: String,
    defaultText: {
      type: String,
      default: "Form by Kashif Saleem",
    },
  },
};
</script> -->

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const user = ref(null);
const router = useRouter();

// create an async function to fetch the api usig axios

const getUserData = async () => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: "kminchelle",
      password: "0lelplR",
    });
    const data = await response.data;
    //store data in user ref
    user.value = data;
  } catch (error) {
    console.error(error);
  }
};

//Function to validate form fields
const valditeFormInputs = async () => {
  await getUserData();
  if (username.value === "" || password.value === "") {
    alert("please fill out all the fields");
  }
};

// Function to set the user data to local storage
const storeDataToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

//Function to redirect to page
const redirectToPage = (page) => {
  router.push(page);
};

//Function to submit the form
const submitForm = async (e) => {
  e.preventDefault();
  await valditeFormInputs();
  await getUserData();
  storeDataToLocalStorage("UserData", user.value);
  redirectToPage("/product-categories");
};

// Props
const props = defineProps({
  title: String,
  defaultText: {
    type: String,
    default: "Login asdasd",
  },
});

// state
const username = ref("kminchelle");
const password = ref("0lelplR");

//actions on submit form add data to local storage

// const addLoginData = () => {
//   const loginData = {
//     email: email.value,
//     password: password.value,
//   };

//   // validate the form
//   if (!email.value || !password.value) {
//     alert("Please fill out all the fields");
//     return;
//   } else {
//     localStorage.setItem("loginData", JSON.stringify(loginData));
//     // empty the form
//     email.value = "";
//     password.value = "";
//     alert("Login Successful");
//     window.location.href = "./index.html";
//   }
// };
</script>
