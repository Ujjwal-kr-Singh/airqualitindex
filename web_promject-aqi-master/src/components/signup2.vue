<template>
    <div class="container mt-5">
      <h1 class="mb-4 text-center">Sign Up</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="firstName"
            required
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="lastName"
            required
          />
        </div>
        <div class="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            class="form-control"
            id="city"
            v-model="city"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            v-model="phone"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "SignUp2",
    data() {
      return {
        firstName: "",
        lastName: "",
        city: "",
        phone: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async handleSubmit() {
        // Send the collected data to your backend server for user registration.
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          city: this.city,
          phone: this.phone,
          email: this.email,
          password: this.password,
        };
  
        try {
          const result = await axios({
            method: "post",
            url: "http://localhost:3000/user/create",
            data: data,
          });
  
          console.log("result", result);
  
          if (result.data.success) {
            // Handle successful registration, e.g., redirect to login page.
            //  router.push({ path: "NewLogin", data: result.data.data });
          }
        } catch (error) {
          // Handle any errors during registration.
          console.error("Error during registration:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add additional styling here as needed, but
     Bootstrap will provide the basic layout and appearance. */
  </style>