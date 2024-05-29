<template>
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
<body>
  <div class="background">
    <!-- <img src="" alt="bg"> -->
    <div class="wrapper">
  <div class="container mt-5">
    <div class="table-responsive" >
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th colspan="2" class="text-center"><u><b>Air Quality Information</b></u></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b> City Name</b></td>
            <td><b> {{ aqiData.cityName }}</b></td>
          </tr>
          <tr>
            <td><b> CO Concentration</b></td>
            <td><b> {{ aqiData.CO.concentration }}</b></td>
          </tr>
          <tr>
            <td><b> CO AQI</b></td>
            <td><b> {{ aqiData.CO.aqi }}</b></td>
          </tr>
          <tr>
            <td><b> NO2 Concentration</b></td>
            <td><b> {{ aqiData.NO2.concentration }}</b></td>
          </tr>
          <tr>
            <td><b> NO2 AQI</b></td>
            <td><b> {{ aqiData.NO2.aqi }}</b></td>
          </tr>
          <tr>
            <td><b> O3 Concentration</b></td>
            <td><b> {{ aqiData.O3.concentration }}</b></td>
          </tr>
          <tr>
            <td><b> O3 AQI</b></td>
            <td><b> {{ aqiData.O3.aqi }}</b></td>
          </tr>
          <tr>
            <td><b> SO2 Concentration</b></td>
            <td><b> {{ aqiData.SO2.concentration }}</b></td>
          </tr>
          <tr>
            <td><b> SO2 AQI</b></td>
            <td><b> {{ aqiData.SO2.aqi }}</b></td>
          </tr>
         <tr>
            <td><b> PM2.5 Concentration</b></td>
            <td><b> {{ aqiData.PM2_5.concentration }}</b></td>
          </tr>
          <tr>
            <td><b>PM2.5 AQI</b></td>
            <td><b>{{ aqiData.PM2_5.aqi }}</b></td>
          </tr>
          <tr>
            <td><b>PM10 Concentration</b></td>
            <td><b>{{ aqiData.PM10.concentration }}</b></td>
          </tr>
          <tr>
             <td><b>PM10 AQI</b></td>
            <td><b>{{ aqiData.PM10.aqi }}</b></td>
          </tr>
          <tr>
            <td><b>Overall AQI</b></td>
            <td><b>{{ aqiData.overall_aqi }}</b></td>
          </tr>
          <tr>
             <td><b>Date</b></td>
            <td><b>{{ formattedDate }}</b></td>
          </tr>
          <tr>
            <td><b>Time</b></td>
            <td><b>{{ formattedTime }}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="text-center mt-3">
      <button class="btn btn-info" @click="goBack">Back</button>
    </div>
  </div>
  </div>
  </div>
</body>
</template>
  <script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
  import axios from 'axios';
  // import router from '@/router';
  import { useRoute } from 'vue-router';

  export default {
    name: "ShowTable",
    data() {
      return {
        searchQuery:'',
        apiData: {},
        aqiData: {
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
        },
      };
    },
    created(){
       this.getvalues();

    },
    
    computed: {
      formattedDate() {
        return this.aqiData.createdAt.toLocaleDateString();
      },
      formattedTime() {
        return this.aqiData.createdAt.toLocaleTimeString();
      }
    },
    methods: {
      goBack() {
        window.history.back();
      },
      async getvalues() {
        try{
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
            this.aqiData= this.aqiData.toObject();
            console.log("$$$$$$$$$$$$$$",this.aqiData,"$$$$$$$$$$$$$$$");
          }
        catch(e)    {  console.log(e.message,"error");        }
            
            
      },
    },
    
  };
  </script>
  
  <style scoped>
  .table-responsive {
    margin-top: -14px;
    box-shadow: 10px 10px 10000px 20px;
    color: rgb(0, 0, 0); 
    

  }
  .btn-info {
    margin-top: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  td {
    border: 1px solid #ddd;
    padding: 7px;
  }
  
  button {
    margin-top: 5rem;
    margin-bottom: 10rem;
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
    padding: auto;
  }
  .wrapper {
    padding: 20px; /* Adjust as needed */
}
  .background{
    background-image:url("@/assets/new3.jpg");
    background-size: cover ;
    margin: auto;
    margin-top: -0px;
    padding: auto;
  background-repeat: no-repeat; /* Do not repeat the image */
  scroll-behavior: none;

  }
  </style>
  