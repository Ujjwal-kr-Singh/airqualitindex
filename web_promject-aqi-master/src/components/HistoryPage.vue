<template>
    <div class="history-page">
      <h1>Search History</h1>
      <div class="card-container">
        <div class="card" v-for="(search, index) in searchHistory" :key="index">
          <div class="city-name">
            <h2>{{ search.cityName }}</h2>
          </div>
          <div class="aqi">
            <p>AQI: {{ search.overall_aqi }}</p>
          </div>
          <div class="time">
            <p>{{ formatTimestamp(search.timestamp) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
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
        try{
        // TODO: Implement logic to load search history from LocalStorage, API, etc.
        let result = await  axios ({
        method: 'get',
        url: 'http://localhost:3000/searchistory',
       });
       console.log("result>>",result);
        this.searchHistory = result.data.data;
        console.log(this.searchHistory);
      }
        catch(e)    {  console.log(e.message,"error");        }

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
    background-color: #d6d3d3;
    box-shadow: 20px 20px 20px;
    max-width: 70%;
    margin-left: 14%;
    
  }
  
  .city-name {
    font-size: 1.2em;
    font-weight: bold;
  }
  h1{
    color: black;
  }
  .bottom{
    margin: 10rem;
  }
  </style>