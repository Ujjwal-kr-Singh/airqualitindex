<template>
    <!-- <img alt="Vue logo" src="../assets/sear.png"> -->
    <div class="container">
       
      <header class="header">
        <h1>Welcome to AQI Tracker</h1>
      </header>
  
      <main class="main">
        <!-- <div class="hero">
          <p>Track air quality, stay informed, and breathe easy.</p>
          <a href="/login" class="button primary">Login</a>
          <a href="/signup" class="button secondary">Sign Up</a>
        </div> -->
  
        <div class="search-section">
          <h1>Find Air Quality Data</h1>
          <form @submit.prevent="search">
            <input type="text" placeholder="Enter city " v-model="searchQuery" class="search-input">
            <button type="submit" class="button primary">Search</button>
            <img alt="Vue logo" src="../assets/sear.png" align="left">
          </form>
        </div>
      </main>
  
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  export default {
    name: 'HomePage2',
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      async search() {
        console.log('Search:', this.searchQuery);
        let result = await axios({
                method:'post',
                url:'http://localhost:3000/airquality?city='+this.searchQuery,
                data:{ cityName: this.searchQuery },
              });
              console.log("result", result);
              console.log("city;ssss id  ",result.data.id);
            if (result.data.success) {
                router.push({ path:"/showtable/"+  result.data.id }); 
                
      }
    },
  },
}
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    background-color: #ffacac;
    color: #333;
    background-image:url("@/assets/sear2.jpg");
    background-size: cover; 
    background-repeat: no-repeat; 
    min-height: 10vh; 
    display: flex;
    align-items: center; 
    justify-content: center;
  }
  
  .header {
    background-color: #22a3ff;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }
  
  .main {
    padding: 20px;
    flex-grow: 1;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .hero p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  .search-section {
    margin-bottom: 40px;
    color: #fa1a1a;
    font-size:bold;
    font-weight: 890;
    font-display:bold;
  }
  
  .search-input {
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
  
  .button.primary {
    background-color: #4CAF50; /* Green */
    color: #fff;
  }
  
  .button.secondary {
    background-color: #f44336; /* Red */
    color: #fff;
  }
  
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  </style>