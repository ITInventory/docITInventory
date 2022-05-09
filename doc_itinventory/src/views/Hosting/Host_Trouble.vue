
<template>
 <main class="main"> 
    <h1 class="title">Troubleshooting Nginx and Gunicorn</h1>
    <br>
    <p>If this last step does not show your application, you will need to troubleshoot your installation.
    </p>
    <br>
    <h3 class="title">Nginx Is Showing the Default Page Instead of the Django Application</h3>
    <br>
    <p>If Nginx displays the default page instead of proxying to your application,
    it usually means that you need to adjust the server_name within
     the "/etc/nginx/sites-available/[Project name]" file to point to your server’s IP address or domain name.</p>
    <br>
    <p>Nginx uses the server_name to determine which server block to use to respond to requests.
         If you are seeing the default Nginx page, it is a sign that Nginx wasn’t able to match
          the request to a sever block explicitly,
         so it’s falling back on the default block defined in /etc/nginx/sites-available/default.</p>
    <br>
    <p>
        The server_name in your project’s server block must be more specific than the one in the default
         server block to be selected.
    </p>
    <br>
    <h3 class="title">Nginx Is Displaying a 502 Bad Gateway Error Instead of the Django Application</h3>
    <br>
    <p>
        A 502 error indicates that Nginx is unable to successfully proxy the request.
        A wide range of configuration problems express themselves with a 502 error,
        so more information is required to troubleshoot properly.
    </p>
    <br>
    <p>The primary place to look for more information is in Nginx’s error logs.
        Generally, this will tell you what conditions caused problems during the proxying event. 
        Follow the Nginx error logs by typing:
    </p>
    <br>
     <div class="command">
        <p>sudo tail -F /var/log/nginx/error.log</p>
    </div>
    <br>
    <p>
        Now, make another request in your browser to generate a fresh error (try refreshing the page).
        You should see a fresh error message written to the log. If you look at the message, 
        it should help you narrow down the problem.
    </p>
    <br>
    <p>You might see some of the following message:</p>
    <br>
    <div class="command">
        <p>connect() to unix:/home/[user account]/[The project directory]/[Project name].sock failed (2: No such file or directory)</p>
    </div>
    <br>
   <p>
       This indicates that Nginx was unable to find the [Project name].sock file at the given location. 
       You should compare the proxy_pass location defined within /etc/nginx/sites-available/[Project name] 
       file to the actual location of the [Project name].sock file generated in your project directory.
    </p>
    <br>
    <p>
        If you cannot find a [Project name].sock file within your project directory,
        it generally means that the gunicorn process was unable to create it.
        Go back to the section on checking for the Gunicorn socket file to step through 
        the troubleshooting steps for Gunicorn.
    </p>
    <br>
     <div class="command">
        <p>connect() to unix:/home/[user account]/[The project directory]/[Project name].sock failed (13: Permission denied)</p>
    </div>
    <br>
    <p>
        This indicates that Nginx was unable to connect to the Gunicorn socket because of permissions problems. 
        Usually, this happens when the procedure is followed using the root user instead of a sudo user. 
        While the Gunicorn process is able to create the socket file, Nginx is unable to access it.
    </p>
    <br>
    <p>
        This can happen if there are limited permissions at any point between the root directory (/)
         the [Project name].sock file. We can see the permissions and ownership values of the socket file and each
          of its parent directories by passing the absolute path to our socket file to the namei command:
    </p>
    <br>
    <div class="command">
        <p>namei -nom /home/[user account]/[The project directory]/[Project name].sock</p>
    </div>

    <br>
     <div class="command">
        <pre class="codeblock">
            <code>
               Output
                ~/home/[user account]/[The project directory]/[Project name].sock
                drwxr-xr-x root  root     /
                drwxr-xr-x root  root     home
                drwxr-xr-x [user account] [user account]    [user account]
                drwxrwxr-x [user account] [user account]    [Project name]
                srwxrwxrwx [user account] www-data [Project name].sock
            </code>
        </pre>
    </div>
    <br>
    <p>
        The output displays the permissions of each of the directory components. By looking at the permissions 
        (first column), owner (second column) and group owner (third column), we can figure out what type of access
        is allowed to the socket file.
    </p>
    <br>
    <p>
        In the above example, the socket file and each of the directories leading up to the socket
        file have world read and execute permissions (the permissions column for the directories end 
        with r-x instead of ---). The Nginx process should be able to access the socket successfully.
    </p>
    <br>
    <p>
        If any of the directories leading up to the socket do not have world read and execute permission, 
        Nginx will not be able to access the socket without allowing world read and execute permissions or
        making sure group ownership is given to a group that Nginx is a part of. For sensitive locations like 
        the /root directory, both of the above options are dangerous. It’s better to move the project files 
        outside of the directory, where you can safely control access without compromising security.
    </p>
    <br>
   <h3 class="title">Django Is Displaying: “could not connect to server: Connection refused”</h3>
    <br>
    <p>One message that you may see from Django when attempting to access parts of the application in the web browser is:</p>
    <br>
    <div class="command">
         <pre class="codeblock">
            <code>
                OperationalError at /admin/login/
                could not connect to server: Connection refused
                    Is the server running on host "localhost" (127.0.0.1) and accepting
                    TCP/IP connections on port 5432?
            </code>
        </pre>
    </div>
    <p>
        This indicates that Django is unable to connect to the MSSQL database.
         Make sure that the MSSQL instance is running by typing:
    </p>
    <br>
    <div class="command">
        <p>sudo systemctl status mssql-server</p>
    </div>
    <br>
    <p>If it is not, you can start it and enable it to start automatically at boot (if it is not already configured to do so) by typing:</p>
    <br>
     <div class="command">
        <p>sudo systemctl restart mssqsl-server</p>
        <p>sudo systemctl enable mssqsl-server</p>
    </div>
    <br>
    <p>If you are still having issues, make sure the database settings defined in the ~/[The project directory]/[Project name]/settings.py file are correct.</p>
    <br>
   <h3 class="title">Further Troubleshooting</h3>
   <br>
   <p>For additional troubleshooting, the logs can help narrow down root causes.
        Check each of them in turn and look for messages indicating problem areas.</p>
    <br>
    <p>The following logs may be helpful:</p>
    <ul>
        <li>Check the Nginx process logs by typing: sudo journalctl -u nginx</li>
        <li>Check the Nginx access logs by typing: sudo less /var/log/nginx/access.log</li>
        <li>Check the Nginx error logs by typing: sudo less /var/log/nginx/error.log</li>
        <li>Check the Gunicorn application logs by typing: sudo journalctl -u gunicorn</li>
    </ul>
    <br>
    <p>As you update your configuration or application, you will likely need to restart the processes to adjust to your changes.</p>
    <br>
    <p>If you update your Django application, you can restart the Gunicorn process to pick up the changes by typing:</p>
    <br>
    <div class="command">
        <p>sudo systemctl restart gunicorn</p>
    </div>
    <br>
    <p>If you change gunicorn systemd service file, reload the daemon and restart the process by typing:</p>
    <br>
    <div class="command">
        <p>sudo systemctl daemon-reload</p>
        <p>sudo systemctl restart gunicorn</p>
    </div>
    <br>
    <p>If you change the Nginx server block configuration, test the configuration and then Nginx by typing:</p>
    <br>
    <div class="command">
        <p>sudo nginx -t && sudo systemctl restart nginx</p>
    </div>
    <br>
    <p>These commands are helpful for picking up changes as you adjust your configuration.</p>
   
    
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