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
          <router-link to="/django_syntax">Django & <br>
             Python syntax</router-link> 

        <div class="dropdown">
          <button id="DjangoContent" class="dropbtn1" style=" ; " @click="toggleDropDownDjangoContent()">Code Content</button>
            <div id="myDropdown" class="dropdown-content1" :class="{show:isConDjango  }">
              <router-link to="/django_content">Introduction</router-link>
          <div class="dropdown">
            <button id="DjangoContent" class="dropbtn2" style=" ; " @click="toggleDropDownMainContent()">Main.py</button>
            <div id="myDropdown" class="dropdown-content2" :class="{show:isConMainPY  }">
                <router-link to="/login_content">Login </router-link> 
                <router-link to="/logout_content">Logout</router-link> 
                <router-link to="/homepage_content">Homepage</router-link> 
                <router-link to="/Computer_Page">Computer  <br> Page</router-link> 
                <router-link to="/django_content">Laptop Page</router-link> 
                <router-link to="/django_content">Network <br> Hardware <br> Page</router-link> 
                <router-link to="/django_content">User Page</router-link> 
                <router-link to="/django_content">Loan Page</router-link> 
                <router-link to="/django_content">IP Page</router-link> 
                <router-link to="/django_content">Software  <br> page</router-link> 
                <router-link to="/django_content">History log</router-link> 
                <router-link to="/django_content">QR PC</router-link> 
                <router-link to="/django_content">QR Laptop</router-link> 
                <router-link to="/django_content">Upload qr  <br> image for PC</router-link> 
                <router-link to="/django_content">Upload qr  <br> image for  <br>Laptop</router-link> 
                <router-link to="/django_content">Download file</router-link> 
                <router-link to="/django_content">Create PDF</router-link> 
                <router-link to="/django_content">Mass upload <br> page</router-link> 
    

            </div>

          </div> 
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
  width: 170px;
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
  padding: 6px 35px 6px 16px;
  font-size: 20px;
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

.dropbtn2 {
  background:#8bd122 ;
  color: rgb(255, 255, 255);
  padding: 6px 90px  6px 16px;
  font-size: 20px;
  border: none;
  cursor: pointer;
   display: block;
}

/* Dropdown button on hover & focus */
.dropbtn2:hover, .dropbtn2:focus {
  background-color: #9da4a9;
   min-width: 170px;
}
.dropdown-content2 {
  display: none;
  position: relative;
  background-color: #aae650;
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
.info {
  color: rgb(203, 112, 112);
}
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 5px;
  border-radius: 15px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: #057260;
	border: 2px solid #555555;
}
</style>
<script>
export default {
 data() {
  return {
    isDjango: false,
    isConDjango : false,
    isConMainPY : false,

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
  ,
  toggleDropDownMainContent(){
    this.isConMainPY = !this.isConMainPY
  }
}
}
</script>
