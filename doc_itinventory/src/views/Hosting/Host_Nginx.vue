
<template>
 <main class="main"> 
    <h1 class="title">Configure Nginx to Proxy Pass to Gunicorn</h1>
    <br>
    <p>On this page, its will tell on how to configure Nginx to pass traffic to the process.
    </p>
    <br>
    
    <p>Start by creating and opening a new server block in Nginx’s sites-available directory:</p>
    <br>
    <div class="command">
        <p>sudo nano /etc/nginx/sites-available/[Project name]</p>
    </div>
    <br>
    <p>Inside, open up a new server block.
     We will start by specifying that this block should listen on the normal port 80 and that it should
      respond to our server’s domain name or IP address:</p>
      <div class="command">
        <pre class="codeblock">
            <code>
                server {
                listen 80;
                server_name server_domain_or_IP;
                }
            </code>
        </pre>
    </div>
     <br>
    <p>Next, we will tell Nginx to ignore any problems with finding a favicon. 
        We will also tell it where to find the static assets that we collected in our ~/[Project name]/static directory.
         All of these files have a standard URI prefix of “/static”,
         so we can create a location block to match those requests:</p>
      <div class="command">
        <pre class="codeblock">
            <code>
               server {
                    listen 80;
                    server_name server_domain_or_IP;

                    location = /favicon.ico { access_log off; log_not_found off; }
                    location /static/ {
                        root /home/[user account]/[Project name];
                    }
                }
            </code>
        </pre>
    </div>
    <br>
    <p>Finally, we’ll create a location / {} block to match all other requests.
    Inside of this location, we’ll include the standard proxy_params file included with the Nginx 
    installation and then we will pass the traffic to the socket that our Gunicorn process created:</p>
      <div class="command">
        <pre class="codeblock">
            <code>
               server {
                    listen 80;
                    server_name server_domain_or_IP;

                    location = /favicon.ico { access_log off; log_not_found off; }
                    location /static/ {
                        root /home/[user account]/[Project name];
                    }

                    location / {
                        include proxy_params;
                        proxy_pass http://unix:/home/[user account]/[The project directory]/[Project name].sock;
                    }
                }
            </code>
        </pre>
    </div>
    <br>
    <p>Save and close the file when you are finished. Now, we can enable the file by linking it to the sites-enabled directory:</p>
    <br>
    <div class="command">
        <p>sudo ln -s /etc/nginx/sites-available/[Project name] /etc/nginx/sites-enabled</p>
    </div>
    <p>Test the Nginx configuration for syntax errors by typing:</p>
    <br>
    <div class="command">
        <p>sudo nginx -t</p>
    </div>
    <br>
    <p>If no errors are reported, go ahead and restart Nginx by typing:</p>
    <br>
     <div class="command">
        <p>sudo systemctl restart nginx</p>
    </div>
    <br>
    <p>Finally, we need to open up our firewall to normal traffic on port 80.
    Since we no longer need access to the development server, we can remove the rule to open port 8000 as well:</p>
    <br>
    <div class="command">
        <p>sudo ufw delete allow 8000</p>
        <p>sudo ufw allow 'Nginx Full'</p>
    </div>
    <br>
    <p>You should now be able to go to your server’s domain or IP address to view your application.</p>
   

    
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