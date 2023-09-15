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
            <button @click="getUserData" class="button-login">Login</button>
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
// import axios from "axios";

const user = ref(null);

// create an async functio to fetch the api usig axios
// c

const getUserData = async (e) => {
  e.preventDefault();

  console.log("clicked");
  await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      user.value = data;
      console.log("User", user.value);
    });
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
