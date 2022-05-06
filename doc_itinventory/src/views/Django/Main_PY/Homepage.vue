
<template>
 <main class="main"> 
    <h1 class="title">Homepage</h1>
    <br>
    <p>On this page its tell the content of Homepage function in the Main.py.
    </p>
    <br>
    <p>The code will be look like this : </p>
    <div class="command">
        <pre class="codeblock">
                <code>
                    def homepage(request):
                        if request.session.get('name'):
                            username =  format(request.session.get('name'))
                        if (format(request.session.get('role')) == "staff"):
                            style = format(request.session.get('styledivstaff'))
                        else:
                            style = format(request.session.get('styledivNotstaff'))

                        context ={
                            "Username": username, "Style" : style
                        }
                        # startupcreateQR()
                        # create_qrcode()
                        return render(request, 'pages-blank.html', context)
            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Explanation :</h3>
   <img class="imgFlowchart" alt="image" src="@/assets/images/Dashboard/dashboard flowchart.svg">
   <br>
   <br>
   <p>The homepage function will receive a urls request from login form. Then the system call the session key name
      and put its values into local variable username. After its call the session key role to  put its values into local variable username and do a condition if the role match with staff then
      its will get the value session key styledivstaff and put its into local variable style, if not match then its will call the value of the session key styledivNotstaff and put its into local variable style.
      lastly its will create a data array with the name context by using the variable username and style. After the context array created the server will render the file page-blank.html and put the context array data in the request of the render.

   </p>
   <br>
   <p></p>
    <br>
 </main>
</template>

<style  scoped>
.codeblock {
    max-height: 290px;
    scroll-behavior: smooth;
    overflow-y: auto;

}
.imgFlowchart {
    max-width: 1000px;
    max-height: 1000px;
    margin-left: 350px;
   
    left: 0;


}
</style>