<template>
    <div class="history-page">
      <h1>Search History</h1>
      <div class="card-container">
        <div class="card" v-for="(search, index) in searchHistory" :key="index">
          <div class="city-name">
            <h2>{{ search.city }}</h2>
          </div>
          <div class="aqi">
            <p>AQI: {{ search.aqi }}</p>
          </div>
          <div class="time">
            <p>{{ formatTimestamp(search.timestamp) }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'HistoryPage',
    data() {
      return {
        searchHistory: [
          // Example data structure:
          // { city: 'London', aqi: 52, timestamp: 1678886400000 },
          // ... more search history items
        ],
      };
    },
    created() {
      this.loadSearchHistory();
    },
    methods: {
      async loadSearchHistory() {
        // TODO: Implement logic to load search history from LocalStorage, API, etc.
        let result = await  axios ({
        method: 'GET',
        url: 'https://localhost:3000/History',
        // headers: {
        //   'x-api-key': 'YOUR_API_KEY'
        // }
       });
        this.searchHistory = result.data;
        console.log(this.searchHistory);

      },
      formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Adjust formatting as needed
      },
      
    },
  };
  </script>
  
  <style scoped>
  .history-page {
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  
  .city-name {
    font-size: 1.2em;
    font-weight: bold;
  }
  </style>