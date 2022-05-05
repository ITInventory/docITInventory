<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="sidenav">
      <router-link to="/">Home</router-link>
      <div class="dropdown">
        <button id="DjangoNav" class="dropbtn"  @click="toggleDropDownDjango()">Django</button>
        <div id="myDropdown" class="dropdown-content" :class="{show:isDjango  }">
          <router-link to="/django_setup">Setup</router-link> 
          <div class="dropdown">
          <button id="DjangoContent" class="dropbtn1" style=" ; " @click="toggleDropDownDjangoContent()">Code Content</button>
           <div id="myDropdown" class="dropdown-content1" :class="{show:isConDjango  }">
           <router-link to="/django_content">Content</router-link> 
           </div>

          </div>
          <router-link to="/django_setup">About</router-link>
        </div>
      </div>
      <router-link to="/">Home</router-link>
    

</div>
  </header>
<div class="main">
  <RouterView/> 
</div>
</template>

<style>
@import '@/assets/base.css';

body {
  font-family: "Lato", sans-serif;
  font-size: 12px;
}
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 80px; /* Same as the width of the sidenav */
  font-size: 18px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
/* Dropdown Button */
.dropbtn {
  background-color: #111;
  color: rgb(255, 255, 255);
  padding: 6px 8px 6px 16px;
  font-size: 22px;
  border: none;
  cursor: pointer;
   display: block;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #9da4a9;
   min-width: 170px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: relative;
  background-color: #0a2543;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropbtn1 {
  background:#eca146 ;
  color: rgb(255, 255, 255);
  padding: 6px 8px 6px 16px;
  font-size: 22px;
  border: none;
  cursor: pointer;
   display: block;
}

/* Dropdown button on hover & focus */
.dropbtn1:hover, .dropbtn1:focus {
  background-color: #9da4a9;
   min-width: 170px;
}
.dropdown-content1 {
  display: none;
  position: relative;
  background-color: #efa954;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: rgb(255, 255, 255);
  padding: 6px 8px 6px 16px;
  font-size: 18px;
  left: 20px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

.command {
  background: #0a2543;
  color: rgb(190, 190, 35);
  left: 40px;
  padding: 6px 8px 6px 16px;
  font-size: 18px;
  width: 1100px;
  font-size: 16px;
  border-radius: 25px;
  max-height: 300px;
  
}
.comment{
  color: greenyellow;
  max-height: 300px;

}
</style>
<script>
export default {
 data() {
  return {
    isDjango: false,
    isConDjango : false,
    IsFront: false,
    IsHost: false,
    IsDocument: false
  }
},
methods :
{
  toggleDropDownDjango() {
    this.isDjango = !this.isDjango

  },
  toggleDropDownDjangoContent(){
    this.isConDjango = !this.isConDjango
  }
}
}
</script>
