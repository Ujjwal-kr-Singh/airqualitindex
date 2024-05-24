<template>
    <button v-if="showScrollBtn" @click="scrollToTop" id="scrollToTopBtn" title="Go to top">
      <span class="arrow-up"></span>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ScrollToTopBtn',
    data() {
      return {
        showScrollBtn: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() { // It's good practice to remove event listeners
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showScrollBtn = window.scrollY > 20;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scrolling in most modern browsers
        });
      },
    },
  };
  <style>
  #scrollToTopBtn {
    display: none; /* Hide button by default */
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99; /* Ensure button stays on top */
    border: none;
    outline: none;
    background-color: #04AA6D; 
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
    font-size: 18px; 
  }

  #scrollToTopBtn:hover {
    background-color: #4CAF50; 
  }

  /* Arrow styling */
  .arrow-up {
    border: solid white;
    border-width: 0 3px 5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
  }
</style>