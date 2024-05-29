<!-- Login.vue -->
<template>
<div class="background">
  <!-- <img src="" alt="bg"> -->
  <div class="wrapper">
    <div class="login-container">
      <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
  </div>
  </template>
  
  <script>
     var moment = require('moment');
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
        moment
      };
    },
    methods: {
      async login() {
        try {
         
          // Replace this with your actual authentication logic
          if (this.username === 'admin1' && this.password === 'password1') {
            // Simulate successful login
            this.$router.push('/front3'); // Redirect to dashboard after login
          } 
          if (this.username === 'aman' && this.password === 'password') {
            // Simulate successful login
            this.$router.push('/front3'); // Redirect to dashboard after login
          } 
          if (this.username === 'ujjwal' && this.password === 'password') {
            // Simulate successful login
            this.$router.push('/front3'); // Redirect to dashboard after login
          }
          else {
            throw new Error('Invalid credentials❌. Please try again later.');
          }
        } catch (error) {
          this.error = error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>

  .login-container {
    background-image:url("@/assets/loginimg.jpg");
    max-width: 450px;
    margin: 0 auto;
    margin-top: 50px ;
    padding-bottom: 20px;
    padding-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 20px 20px 20px ;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 200%;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
  .wrapper {
    padding: 20px; /* Adjust as needed */
}
  .background{
    background-image:url("@/assets/new3.jpg");
    background-size:103% ;
    margin: auto;
    margin-top: -0px;
    padding-bottom:30% ;
  background-repeat: no-repeat; /* Do not repeat the image */
  scroll-behavior: none;

  }

  </style>