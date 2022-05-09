
<template>
 <main class="main"> 
    <h1 class="title">Create a Gunicorn systemd Service File and the Gunicorn Socket File</h1>
    <br>
    <p>On this page, its will tell on how to create and configure a Gunicorn systemd Service File and the Gunicorn Socket File.
    </p>
    <br>
    <h3 class="title">Create a Gunicorn systemd Service File and Gunicorn Socket File</h3>
    <br>
    <p>we should implement a more robust way of starting and stopping the application server. 
     To accomplish this, we’ll make a systemd service file.
     <br>

Create and open a systemd service file for Gunicorn with sudo privileges in your text editor:</p>
    <br>
    <div class="command">
        <p>sudo nano /etc/systemd/system/gunicorn.service</p>
    </div>
    <br>
    <p>The we type these text into the file :</p>
      <div class="command">
        <pre class="codeblock">
            <code>
                [Unit]
                Description=gunicorn daemon
                After=network.target

                [Service]
                User=sammy
                Group=www-data
                WorkingDirectory=/home/[user account]/[The project directory]
                ExecStart=/home/[user account]/[The project directory]/[The project Virtual environment]/bin/gunicorn --access-logfile - --workers 3 --bind unix:/home/[user account]/[The project directory]/[Project name].sock myproject.wsgi:application

                [Install]
                WantedBy=multi-user.target
            </code>
        </pre>
    </div>
    <br>
    <p>For the explantion :</p>
    <br>
    <ul>
        <li>Start with the [Unit] section, which is used to specify metadata and dependencies. We’ll put a description of our service
             here and tell the init system to only start this after the networking target has been reached</li>
        <li>Next, we’ll open up the [Service] section. We’ll specify the user and group that we want to process to run under. We will give our regular user account ownership of the process since it owns all of the relevant files. We’ll give group ownership to the www-data group so that Nginx can communicate easily with Gunicorn.
            <br>
            We’ll then map out the working directory and specify the command to use to start the service. In this case, we’ll have to specify the full path to the Gunicorn executable, which is installed within our virtual environment. We will bind it to a Unix socket within the project directory since Nginx is installed on the same computer. This is safer and faster than using a network port. We can also specify any optional Gunicorn tweaks here. For example, we specified 3 worker processes in this case.
        </li>
        <br>
        <li>
            Finally, we’ll add an [Install] section. This will tell systemd what to link this service to if we enable it to start at boot. We want this service to start when the regular multi-user system is up and running.
        </li>
    </ul>
    <br>
    <p>With that, our systemd service file is complete. Save and close it now.</p>
    <br>
    <p>We can now start the Gunicorn service we created and enable it so that it starts at boot:</p>
     <br>
    <div class="command">
        <p>sudo systemctl start gunicorn</p>
        <p>sudo systemctl enable gunicorn</p>
    </div>
   
   <h3 class="title">The Software</h3>
    <br>
    <p>For the Software we need a Nginx install in the hosting device. To install the software in ubuntu open the ubuntu konsole command and type these command :</p>
    <br>
    <h3 class="title">Check for the Gunicorn Socket File</h3>
    <br>
    <p>Check the status of the process to find out whether it was able to start:</p>
    <br>
     <div class="command">
        <p>sudo systemctl status gunicorn</p>
    </div>
    <br>
    <p>Next, check for the existence of the myproject.sock file within your project directory:</p>
     <br>
     <div class="command">
        <p>ls /home/[user account]/[The project directory]</p>
    </div>
    <br>
    <p>If the systemctl status command indicated that an error occurred
         or if you do not find the myproject.sock file in the directory
         , it’s an indication that Gunicorn was not able to start correctly.
          Check the Gunicorn process logs by typing:</p>
     <br>
     <div class="command">
        <p>sudo journalctl -u gunicorn</p>
    </div>
    <br>
    <p>Take a look at the messages in the logs to find out where Gunicorn ran into problems.
          There are many reasons that you may have run into problems,
          but often, if Gunicorn was unable to create the socket file, it is for one of these reasons::</p>
    <ul>
        <li>The project files are owned by the root user instead of a sudo user</li>
        <li>The WorkingDirectory path within the /etc/systemd/system/gunicorn.
            service file does not point to the project directory</li>
        <li>The configuration options given to the gunicorn process in the ExecStart directive are not correct.
             Check the following items:
             <ul>
                 <li>The path to the gunicorn binary points to the actual location of the binary within the virtual environment</li>
                 <li>The --bind directive defines a file to create within a directory that Gunicorn can access</li>
                 <li>The myproject.wsgi:application is an accurate path to the WSGI callable. This means that when you’re in the WorkingDirectory,
                      you should be able to reach the callable named application by looking in the myproject.wsgi module
                       (which translates to a file called ./myproject/wsgi.py)</li>
             </ul>
        </li>
    </ul>
    <br>
    <p>If you make changes to the /etc/systemd/system/gunicorn.service file, reload the daemon to reread the service definition and restart the Gunicorn process by typing:</p>
    <br>
    <div class="command">
        <p>sudo systemctl daemon-reload</p>
        <p>sudo systemctl restart gunicorn</p>
    </div>
    <p>Make sure you troubleshoot any of the above issues before continuing.</p>
    <br>


    

    
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