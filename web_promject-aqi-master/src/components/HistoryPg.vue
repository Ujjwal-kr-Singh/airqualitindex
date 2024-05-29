<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg rounded">
            <div class="card-header bg-primary text-light text-center">
              <h3>Air Quality Information</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">Parameter</th>
                      <th scope="col" class="text-center">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>City Name</td>
                      <td>{{ apiData.cityName }}</td>
                    </tr>
                    <tr>
                      <td>Overall AQI</td>
                      <td>{{ apiData.overall_aqi }}</td>
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
                      <td>Date</td>
                      <td>{{ formattedDate }}</td>
                    </tr>
                    <tr>
                      <td>Time</td>
                      <td>{{ formattedTime }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="c">
              <button class="btn btn-info" @click="goBack">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'
    import axios from 'axios';
    // import router from '@/router';
    import { useRoute } from 'vue-router';
  
    export default {
      name: "HistoryPg",
      data() {
        return {
          searchQuery:'',
          apiData: {},
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
        },
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
              if (result.data.success== true) {
              this.apiData= await result.data.data;
              this.apiData.createdAt= new Date(this.apiData.createdAt);
              this.apiData.cityName= this.apiData.cityName.toUpperCase();
  
              // console.log(this.apiData.createdAt);
            }
              else {
                console.log("##error in get##");
              }
            }
          catch(e)    {  console.log(e.message,"error");        }
              
              
        },
      },
      
    };
    </script>
  
  
  <style scoped>
  .background {
    /* Add your background image styles here */
    background-image: url("E:\colleg proj\web_promject-aqi-master\src\assets\bg\Untitled.jpg"); /* Replace with your image URL */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }
  
  .wrapper {
    background-color: transparent; /* Semi-transparent white overlay */
    padding: 20px;
    border-radius: 10px;
  }
  .card-body{
    background: transparent;
  }
  .c{
    margin-bottom:5rem;
    padding-bottom: 5rem;
  }
  .col-md-8{
    background: transparent;
  }
  </style>