
<template>
 <main class="main"> 
    <h1 class="title">Logout</h1>
    <br>
    <p>On this page its tell the content of Logout function in the Main.py.
    </p>
    <br>
    <p>The code will be look like this : </p>
    <div class="command">
        <pre class="codeblock">
                <code>
                    def logoutsystem(request):
                        del request.session['name']
                        if (format(request.session.get('role')) == "staff"):
                            del request.session['styledivstaff']
                        else:
                            del request.session['styledivNotstaff']

                        del request.session['role']
                        logout(request)
                        return redirect("/")
            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Explanation :</h3>
   <img class="imgFlowchart" alt="image" src="@/assets/images/logout/logout flowchart.svg">
   <br>
   <br>
   <p>The logout function will receive a urls request from logout button. Then the system call the session key name
      and delete its. After its call the session key role to do a condition if the role match with staff then
      its will delete the session key styledivstaff, if not match then its will delete the session key styledivNotstaff.
      lastly its will delete the session key role then its logout the user from the system and redirect the user to the login page. 

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
    /* overflow-y: scroll; */

}
.imgFlowchart {
    max-width: 600px;
    max-height: 800px;
    margin-left: 350px;
;
    left: 0;


}
</style>