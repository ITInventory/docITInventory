
<template>
 <main class="main"> 
    <h1 class="title">Django Content</h1>
    <br>
    <p>On this page its tell the content of backend code of the project. The backend code use 3 file and a template folder .
    </p>
    <br>
    <h3 class="title">The local python environment setup</h3>
    <br>
    <p>To create the local python environment setup, the device need have python language install. To check if the device has the python language install, run this code on cmd to check whatever the python installed in the device :</p>
    <br>
    <div class="command">
        <p>python --version</p>
    </div>
    <br>
    <p>If the python already install on the device, use this command to create the virtual environment :</p>
    <br>
    <div class="command">
        <p>pip install virtualenv</p>
    </div>
    <br>
    <p>For the next step, run these command :</p>
    <br>
      <div class="command">
        <p>virtualenv env</p>
    </div>
    <br>
    <p>The file directory should have env folder in its. Then we need to activate
         the virtual environment for use to install django package and etc. To activate
          the virtual environment we need to run these command :</p>
    <br>
        <div class="command">
            <p class="comment">*note : the cmd must be in the project directory for executing this process</p>
            <br>
            <p>myenv\Scripts\activate</p>
            <br>
            <p class="comment">*If want to deactivate the environment just run "deactivate" command on the cmd</p>
        </div>
    <br>
     <h3 class="title">The Python Package Installation</h3>
        <br>
        <p>As we activate the environment we need to install the package for us to run the django command.
             First, we need to create a require.txt file for the list of package that we want to install.
            The content of the require.txt file is as show below  </p>
        <br>
         <div class="command" style="overflow: scroll;">
            <div v-for="x of  requireP">
            <p class="comment">{{x.data}}</p>
               
            </div>
          
            <br>
           
        </div>

        <p>Then we will run these command to install the package :</p>
        <br>
        <div class="command">
            <p>py -m pip install -r require.txt</p>
        </div>
        <br>
        <p>Then just clone the project from github using the cmd line : </p>
    <br>
    <div class="command">
        <p>git clone https://github.com/ITInventory/ITInventory-System.git</p>
    </div>
    <br>
    <h3 class="title">Run the development environment</h3>
    <br>
    <p>To test run the project, we need to go the project directory that has manage.py file for us to test run the development environment. We use the CD command to go the target directory via cmd</p>
    <br>
    <div class="command">
            <p>cd ITInventory-System</p>
            <br>
            <p>cd itinventory</p>
    </div>
    <br>
    <p>Then we run the command :</p>
    <br>
     <div class="command">
            <p>py manage.py runserver</p>
            
    </div>
    <br>
    <p>its will run the a development server for development purpose</p>
    
 </main>
</template>
<script>
    export default {
         data() {
  return {
    requireP : [ {data:'amqp==5.1.0'}, {data:'asgiref==3.5.0'}, {data:'billiard==3.6.4.0'}, {data:'celery==5.0.0'}, {data:'click==8.1.2'},
     {data:'click-didyoumean==0.3.0'},{data:'click-repl==0.2.0'}, {data:'colorama==0.4.4'}, {data:'cv==1.0.0'}, {data:'Django==4.0.2'},
      {data:'django-celery-beat==2.1.0'}, {data:'django-celery-results==2.0.0'},{data:'django-timezone-field==4.2.3'}, {data:'fpdf==1.7.2'},
       {data:'gunicorn==20.1.0'}, {data:'kombu==5.2.4'}, {data:'mssql-django==1.1.2'}, {data:'numpy==1.22.2'},
       {data:'opencv-python==4.5.5.64'}, {data:'overlap==0.1.0'}, {data:'pandas==1.4.1'}, {data:'Pillow==9.1.0'},{data:'prompt-toolkit==3.0.28'},
        {data:'PyMuPDF==1.19.6'},{data:'pyodbc==4.0.32'}, {data:'PyPDF2==1.26.0'},{data:'pypng==0.0.21'}, {data:'PyQRCode==1.2.1'},
         {data:'python-crontab==2.6.0'}, {data:'python-dateutil==2.8.2'},{data:'pytz==2021.3'}, {data:'redis==3.5.3'}, 
         {data:'reportlab==3.6.9'}, {data:'six==1.16.0'}, {data:'sqlparse==0.4.2'}, {data:'tzdata==2022.1'}, {data:'vine==5.0.0'}, {data:'wcwidth==0.2.5'}]
  }
}
    }
</script>