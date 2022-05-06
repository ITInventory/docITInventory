
<template>
 <main class="main"> 
    <h1 class="title">Django & Python syntax</h1>
    <br>
    <p>On this page, its will tell the basic code syntax of django and python such as creating function, call urls routing, create sql syntax and etc.
    </p>
    <br>
    <h3 class="title">The basic python syntax</h3>
    <br>
    <p>To Import the libabry Package into the code, the syntax must be like this  :</p>
    <br>
    <div class="command">
        <p>from [the python file want to import]  import [the package needed]</p>
        <br>
        <p class="comment">* Example import certain package</p>
        <br>
        <p>from typing import List</p>
        <br>
        <p class="comment">* Example import all package</p>
        <br>
        <p>from typing import *</p>
    </div>
    <br>
    <p>To create a function, the syntax must be like this  :</p>
    <br>
    <div class="command">
        <p>def [function name] :</p>
        <span class="comment">* note after the declaration a function  after its need to be indent a tab as python use indent as code block indicator</span>
    </div>
    <br>
    <p>To create a conditional if else, the syntax must be like this :</p>
    <br>
      <div class="command">
        <p>if [condition] :</p>
        <span class="comment">* note after the declaration a if  after its need to be indent a tab as python use indent as code block indicator</span>
        <br>
        <p>elif [condition] :</p>
        <span class="comment">* note after the declaration a elif(else if)  after its need to be indent a tab as python use indent as code block indicator</span>
        <br>
        <p>else :</p>
        <span class="comment">* note after the declaration a else  after its need to be indent a tab as python use indent as code block indicator</span>
    </div>
    <br>
    <p>To create a while or for loop , the syntax must be like this :</p>
    <br>
      <div class="command">
        <p>for variable in [array] :</p>
        <span class="comment">* note after the declaration a for  after its need to be indent a tab as python use indent as code block indicator</span>
        <br>
        <p>while [condition] :</p>
        <span class="comment">* note after the declaration a while  after its need to be indent a tab as python use indent as code block indicator</span>
       
    </div>
    <br>
    
     <h3 class="title">The basic Django syntax</h3>
        <br>
        <p> To create SQL syntax in django, the code syntax must be like the code shown below  </p>
        <br>
         <div class="command" style="overflow-y :scroll;">
           <p>from .model import *   <span class="comment"> * This import is require to do the sql syntax</span></p>
           <br>
           <p class="comment"># Select syntax</p>
           <p> data = [table name].objects.all() <span class="comment">* Select * from [table name] syntax and put the data into data variable</span></p>
           <br>
           <p> data = [table name].objects.filter([colum name ], [colum name]).get() <span class="comment">* Select "colum name", "colum name" from [table name] syntax and put the data into data variable</span></p>
            <br>
            <p> data = [table name].objects.filter([colum name ] = value, [colum name] = value).get() <span class="comment">* Select "colum name", "colum name" from [table name] where "colum name" = value AND "colum name" = value  syntax and put the data into data variable</span></p>
            <br>
            <p> data = [table name].objects.filter([colum name ]__in = Array_value ) <span class="comment">* Select "colum name" from [table name] where "colum name" IN Array_value  syntax and put the data into data variable</span></p>
            <br>
            <p> data = [table name].objects.filter(Q([colum name ]= value1 ) | Q([colum name ]= value2 )) <span class="comment">* Select "colum name" from [table name] where "colum name" = value1 OR "colum name" = value2  syntax and put the data into data variable</span></p>
           <br>
           <p class="comment"># Insert syntax</p>
           <p> data = [table name]() <span class="comment">* This call will create a table object to insert into database</span></p>
           <p> data.[colum name] = [data that want to be inserted]</p>
           <p> data.[colum name] = [data that want to be inserted]</p>
           <p> data.save() <span class="comment"> * This will push the object into database for inserting data into table </span></p>
           <br>
           <p class="comment"># Update syntax</p>
           <p> data = [table name].objects.filter([colum name ], [colum name]).get() <span class="comment">* This call will data object from  table object to change the data in it</span></p>
           <p> data.[colum name] = [data that want to be change]</p>
           <p> data.[colum name] = [data that want to be change]</p>
           <p> data.save() <span class="comment"> * This will push the data object into database for updated data into table </span></p>
           <br>
           <p class="comment"># delete syntax</p>
           <p> [table name].objects.filter([colum name ] = value).delete() <span class="comment">* Delete * from [table name] where [colum name ] = value  syntax and  this call the data object from  table object which have the same value to be delete directly</span></p>
          <br>
          <p> data = [table name].objects.filter([colum name ], [colum name]).get() <span class="comment">* This call will data object from  table object </span></p>
           <p> data.delete() <span class="comment"> * This will push delete syntax to the  data object into database for delete the  data from table </span></p>

           <br>
         
           
        </div>
<br>
        <p>To render  a static html page, the syntax must be like the code shown below  :</p>
        <br>
        <div class="command">
            <p>return render(request, [html file], context <span class="comment">* the context is for sending a data to the static page and can be access by the static page using double bracket symbol and a data name in it</span> )</p>
            <br><p class="comment"># As example</p>
            <p> context ={
        "index key": value, "index key" : value
    }</p>
    <p>return render(request, [html file], context)</p>
        </div>
        <br>
        <p>To redirect the static html page, the syntax must be like the code shown below : </p>
    <br>
    <div class="command">
        <p>return redirect("[url path routing]")</p>
    </div>
    <br>
    <p p>To create a session key, the syntax must be like the code shown below :</p>
    
    <br>
    <div class="command">
            <p> request.session['[the session key name]'] = values <span class="comment">*To create session key</span></p>
            <br>
            <p> del request.session['[the session key name]'] <span class="comment">*To Delete session key</span></p>
            <br>
            <p> data =  format(request.session.get('[the session key name]'))<span class="comment">*To get session key values and store in into variable</span></p>
            <br>
            <p> request.session.get('[the session key name]')<span class="comment">*To get session key values </span></p>

    </div>
    <br>
    <p>To get the data from form, the syntax must be like the code shown below  :</p>
    <br>
     <div class="command">
            <p>if request.method == "POST": <span class="comment">* To check if the form submition is in POST format</span></p>
            <p> &nbsp;&nbsp;&nbsp;    variable1 = request.POST['[the index key of json data send into backend via ajax post]'] <span class="comment"> * get the data from the post request via call the selected index key of the json data sent to backend and insert it into local variable</span></p>
            
    </div>
    <br>
   
    
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