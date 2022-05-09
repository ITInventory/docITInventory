
<template>
 <main class="main"> 
    <h1 class="title">Introduction</h1>
    <br>
    <p>On this page its tell on how to set up the documentation and how to trouble shoot the problem of the documentation. The OS that will be use is Ubuntu Lts Version, for the sake of this project
        the documentation will assume the OS already being install. If the OS is not yet being install yet please refer The Ubuntu official page for the installation guide as show in this <a href="https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview">link</a> .
    </p>
    <br>
    <p>The list of section of the Hosting Documentation as show below : </p>
        <br>

    <ul>
        <li>Installing the package needed for the hosting.
            <ul><li>
                This Section will tell the require package and software needed for the website hosting.
            </li></ul>
        </li>
        <br>
        <li>Create a Gunicorn systemd Service File and the Gunicorn Socket File
            <ul><li>
                 This Section will tell on how to create a gunicorn systemd service file and the gunicorn socket file.
            </li></ul>
        </li>
        <br>

        <li>Configure Nginx to Proxy Pass to Gunicorn
            <ul><li>
                 This Section will tell on how to configure Nginx to proxy pass to gunicorn.
            </li></ul>
        </li>
        <br>

         <li>Troubleshooting Nginx and Gunicorn
            <ul><li>
                 This Section will tell on how to troubleshooting Nginx and Gunicorn also apply change made in source code.
            </li></ul>
        </li>
       
    </ul>
   
 </main>
</template>
<script>
    export default {
         data() {
  return {
   
  }
}
    }
</script>