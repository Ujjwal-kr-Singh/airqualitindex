<template>
  <div class="boodi">
    <div class="page">
<div class="history-page">
      <h1>Search History</h1>
      <div class="card-container">
        <div class="card" v-for="(search, index) in searchHistory" :key="index">
          <div class="city-name">
            <h2>{{ search.cityName.toUpperCase() }}</h2>
          </div>
          <div class="aqi">
            <p>Overall AQI: {{ search.overall_aqi }}</p>
          </div>
          <div class="time">
            <p>{{ new Date(search.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
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
        result: null,
        // aqiData: {},
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
       if (result.data.success==true) {
       this.searchHistory = result.data.data.slice().reverse();
       }
       else {console.log("---error data not fetched----");}
      }
        catch(e)    {  console.log(e.message,"error");  }
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
    color: rgb(255, 255, 255);
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 15px 15px 15px 20px;
    max-width: 75%;
    margin-left: 14%;
    margin-bottom: 1rem;
    
  }
  
  .city-name {
    font-size: 1.2em;
    font-weight: bold;
  }
  h1{
    color: rgb(235, 252, 0);
  }
  .bottom{
    margin: 10rem;
  }
  .boodi {
    background-image: url('@/assets/bg/R (2).jpg');
    background-repeat: repeat;
    background-attachment:scroll;
    background-size: cover;
    max-height: 100%;
  }
  .page{
    max-width: 100%;
    max-height: 100%;
    background-color: transparent;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  </style>