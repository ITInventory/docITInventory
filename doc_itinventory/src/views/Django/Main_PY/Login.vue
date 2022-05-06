
<template>
 <main class="main"> 
    <h1 class="title">Login</h1>
    <br>
    <p>On this page its tell the content of login function in the Main.py.
    </p>
    <br>
    <p>The code will be look like this : </p>
    <div class="command">
        <pre class="codeblock">
                <code>def login_user(request):
                    if request.method == "POST":
                        username_login = request.POST['username']
                        password_login = request.POST['password']
                        user = authenticate(request, username=username_login, password=password_login)
                        if user is not None:
                            login(request, user)
                            request.session['name'] = username_login
                            if request.user.is_staff:
                                request.session['role'] = 'staff'
                                request.session['styledivstaff'] = "display:block"
                            else:
                                request.session['role'] = 'Not staff'
                                request.session['styledivNotstaff'] = "display:none"

                            return redirect("dashboard", )
                    
                        else:
                            messages.success(request, ("There was an Error Logging in, Try Again"))
                            return redirect("login")

                    return render(request, "login.html", {})
            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Explanation :</h3>
   <img class="imgFlowchart" alt="image" src="@/assets/images/login/login flowchart.svg">
   <br>
   <br>
   <p>The login function will receive a post request from login form. Then its store the data into local variable and use the  builtin function authenticate().
       The function will compare the sended data with the user data store in user table. If the credential data sended exits in the database, the function will
        proceed login into the system and create 3 session key that is name, role and styledivstaff. After its done create the session key its will go to urls path of dashboard.

   </p>
   <br>
   <p></p>
    <br>
 </main>
</template>
<script>
// import image from "./assets/images/test.jpg"
    export default {
//          data() {
//   return {
//      images : image
//   }
// }
    }
</script>
<style  scoped>
.codeblock {
    max-height: 290px;
    scroll-behavior: smooth;
    overflow-y: scroll;

}
.imgFlowchart {
    max-width: 600px;
    max-height: 800px;
    margin-left: 350px;
;
    left: 0;


}
</style>