
<template>
 <main class="main"> 
    <h1 class="title">Installing the package needed for the hosting setup</h1>
    <br>
    <p>On this page, its will tell the require package and software to host the project as local area network.
    </p>
    <br>
    <h3 class="title">The package</h3>
    <br>
    <p>For the package we already install its via the django package setup require.txt installation setup. If the package went missing use this command to install its and make sure the virtual environmentis activate for the installation package</p>
    <br>
    <div class="command">
        <p>sudo apt-get install python3-pip python3-dev libpq-dev pymssql nginx</p>
    </div>
    <br>
   
   <h3 class="title">The Software</h3>
    <br>
    <p>For the Software we need a Nginx install in the hosting device. To install the software in ubuntu open the ubuntu konsole command and type these command :</p>
    <br>
    <div class="command">
        <p>sudo apt update</p>
        <p>sudo apt install nginx</p>

    </div>
    <br>
    <p>Step 2 – Adjusting the Firewall</p>
    <br>
    <p>Before testing Nginx, the firewall software needs to be adjusted to allow access to the service.
     Nginx registers itself as a service with ufw upon installation, making it straightforward to allow Nginx access.
    List the application configurations that ufw knows how to work with by typing:</p>
    <br>
     <div class="command">
        <p>sudo ufw app list</p>
    </div>
    <br>
    <p>You should get a listing of the application profiles:</p><br>
     <div class="command">
        <pre class="codeblock">
            <code>
                Output
                Available applications:
                Nginx Full
                Nginx HTTP
                Nginx HTTPS
                OpenSSH
            </code>
        </pre>
    </div>
    <br>
    <p>As demonstrated by the output, there are three profiles available for Nginx:</p>
    <br>
    <ul>
        <li>Nginx Full: This profile opens both port 80 (normal, unencrypted web traffic) and port 443 (TLS/SSL encrypted traffic)</li>
        <li>Nginx HTTP: This profile opens only port 80 (normal, unencrypted web traffic)</li>
        <li>Nginx HTTPS: This profile opens only port 443 (TLS/SSL encrypted traffic)</li>
    </ul>
    <br>
    <p>It is recommended that you enable the most restrictive profile that will still allow the traffic you’ve configured. Right now, we will only need to allow traffic on port 80.</p>
    <br>
    <p>You can enable this by typing:</p>
    <br>
     <div class="command">
        <p>sudo ufw allow 'Nginx HTTP'</p>
    </div>
    <br>
    <p>You can verify the change by typing:</p>
     <br>
     <div class="command">
        <p>sudo ufw allow 8000</p>
        <p>sudo ufw status</p>
    </div>
    <br>
    <p>The output will indicated which HTTP traffic is allowed:</p>
    <br>
    <div class="command">
        <pre class="codeblock">
            <code>
             Output
                Status: active

                To                         Action      From
                --                         ------      ----
                OpenSSH                    ALLOW       Anywhere                  
                Nginx HTTP                 ALLOW       Anywhere                  
                OpenSSH (v6)               ALLOW       Anywhere (v6)             
                Nginx HTTP (v6)            ALLOW       Anywhere (v6)
            </code>
        </pre>
    </div>
    <br>
    <p>For futher enquire please refer on this <a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04">link</a></p>


    
 </main>
</template>
<style scoped>
.codeblock {
    max-height: 290px;
    scroll-behavior: smooth;
    overflow-y: scroll;

}
</style>
<script>
    export default {
 
    }
</script>