<template>
    <div class="welcome-container">
      <div class="welcome-card">
        <h1>Welcome to AQI Tracker</h1>
        <p>Monitor the air quality in your city and stay informed about the latest AQI levels.</p>
        <div class="button-group">
          <button @click="navigateToFeatures">Explore Features</button>
          <button @click="navigateToAQI">View AQI</button>
        </div>
        <p class="about-link">
          <router-link to="/about">Learn more about us</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import router from '@/router';
  export default {
    name: 'WelcomePage',
    methods: {
      navigateToFeatures() {
        // Implement navigation to features page
        this.$router.push('/front3');
      },
      navigateToAQI() {
        // Implement navigation to AQI page
        router.push('/HomePage2');
      }
    }
  }
  </script>
  
  <style scoped>
  .welcome-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  }
  
  .welcome-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    margin-top: -130px;
    border-radius: 10px;
    box-shadow: 20px 10px 20px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 500px;
    width: 100%;
  }
  
  .welcome-card h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: #333;
  }
  
  .welcome-card p {
    margin-bottom: 0.5rem;
    color: #666;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 1.5rem;
  }
  
  .button-group button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
    margin-bottom: 15px;
  }
  
  .button-group button:hover {
    background-color: #226b44;
  }
  
  .about-link {
    margin-top: 1rem;
    padding-bottom: 0px;
  }
  
  .about-link a {
    color: #42b983;
    text-decoration: none;
    font-weight: bold;
  }
  
  .about-link a:hover {
    text-decoration: underline;
    color: #10d5d8;
  }
  </style>
  