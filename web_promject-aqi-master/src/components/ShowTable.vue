<template>
    <div class="taable" v-if="aqiData">
      <table>
        <tr>
          <td><b>City Name</b></td>
          <td>{{ api.cityName }}</td>
        </tr>
        <tr>
          <td>CO Concentration</td>
          <td>{{ apiData.CO.concentration }}</td>
        </tr>
        <tr>
          <td>CO AQI</td>
          <td>{{ apiData.CO.aqi }}</td>
        </tr>
        <tr>
          <td>NO2 Concentration</td>
          <td>{{ apiData.NO2.concentration }}</td>
        </tr>
        <tr>
          <td>NO2 AQI</td>
          <td>{{ apiData.NO2.aqi }}</td>
        </tr>
        <tr>
          <td>O3 Concentration</td>
          <td>{{ apiData.O3.concentration }}</td>
        </tr>
        <tr>
          <td>O3 AQI</td>
          <td>{{ apiData.O3.aqi }}</td>
        </tr>
        <tr>
          <td>SO2 Concentration</td>
          <td>{{ apiData.SO2.concentration }}</td>
        </tr>
        <tr>
          <td>SO2 AQI</td>
          <td>{{ apiData.SO2.aqi }}</td>
        </tr>
        <tr>
          <td>PM2.5 Concentration</td>
          <td>{{ apiData.PM2_5.concentration }}</td>
        </tr>
        <tr>
          <td>PM2.5 AQI</td>
          <td>{{ apiData.PM2_5.aqi }}</td>
        </tr>
        <tr>
          <td>PM10 Concentration</td>
          <td>{{ apiData.PM10.concentration }}</td>
        </tr>
        <tr>
          <td>PM10 AQI</td>
          <td>{{ apiData.PM10.aqi }}</td>
        </tr>
        <tr>
          <td>Overall AQI</td>
          <td>{{ apiData.overall_aqi }}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>{{ formattedDate }}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>{{ formattedTime }}</td>
        </tr>
      </table><br>
    </div>
    <p v-else>loading data</p>
      <button class="btn btn-info cutsom-btn" @click="goBack" >Back</button>

  </template>
  
  <script>
  import axios from 'axios';
  // import router from '@/router';
  import { useRoute } from 'vue-router';

  export default {
    name: "ShowTable",
    data() {
      return {
        searchQuery:'',
        // result:{},
        aqiData: null,
        apidata: {
          cityName:"ghaziabad",
          CO: { concentration: 300.41, aqi: 3 },
          NO2: { concentration: 2.4, aqi: 3 },
          O3: { concentration: 138.76, aqi: 209 },
          SO2: { concentration: 4.23, aqi: 6 },
          PM2_5: { concentration: 22.89, aqi: 64 },
          PM10: { concentration: 42.1, aqi: 38 },
          overall_aqi: 209,
          _id: '6649ddc35c17359976390161',
          createdAt: new Date('2024-05-19T11:08:51.812Z'),
          updatedAt: new Date('2024-05-19T11:08:51.812Z')
        }
      };
    },
    created(){
       this.getvalues();

    },
    
    computed: {
      formattedDate() {
        return this.apiData.createdAt.toLocaleDateString();
      },
      formattedTime() {
        return this.apiData.createdAt.toLocaleTimeString();
      }
    },
    methods: {
      goBack() {
        window.history.back();
      },
      async getvalues() {
        const route= useRoute();
        this.searchQuery = await route.params.id;
        console.log( 'Product ID:', this.searchQuery);
        let result = await axios({
                method:'get',
                url:'http://localhost:3000/get/'+this.searchQuery,
            })
            console.log(result);
            this.aqiData= await result.data.data;
            console.log("####",this.aqiData,"####");
            
            // if (result.data.success) {
            //     // router.push({path:'./showtable'}) 
            // }
      },
    },
    
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  td {
    border: 1px solid #ddd;
    padding: 7px;
  }
  
  button {
    margin-bottom: 20px;
  }
  table {
    text-align: center;
  }
  .taable{
    color: rgb(255, 255, 255); 
    margin-top: 1.5rem;
    background-image: url("E:\colleg proj\web_promject-aqi-master\src\assets\bg\bg6.jpg");
    background-repeat: no-repeat;
    background-size :  200%;  
    padding-bottom: -4rem;
    margin-bottom: 2rem;
    margin-left: 13%;
    max-width: 70%;
    box-shadow: 10px 10px 100px 20px;

  }
  .cutsom-btn{ 
    margin-bottom: 5rem;
  }
  body{
    background-color: black;
  }
  </style>
  