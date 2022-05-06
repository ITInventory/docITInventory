
<template>
 <main class="main"> 
    <h1 class="title">Django Content</h1>
    <br>
    <p>On this page its tell the content of backend code of the project. The backend code use 4 file and a template folder .
    </p>
    <p>The list of file use in the project is :</p>
    <ul>
        <li>main/views.py
            <ul><li>
                This file store the logic function of the project.
            </li></ul>
        </li>
        <li>main/models.py
            <ul><li>
                This file store the database main schema and table schema.
            </li></ul>
        </li>
        <li>main/urls.py
            <ul><li>
                This file store the url routing path of the project.
            </li></ul>
        </li>
         <li>main/admin.py
            <ul><li>
                This file store the logic and the look of admin panel page.
            </li></ul>
        </li>
        <li>specification/models.py
              <ul><li>
                This file store the database specification schema and table schema.
            </li></ul>
        </li>
    </ul>
    <br>
    <p>All the html file must be store in main/templates folder due to django render the file from that directory.</p>
    <br>
    <p>For any javascript or css file need to store in the main/static folder and must be  using the html tag "{% load static %}"  in the start of the html file. </p>
    <br>
    <p>For any type of media such as file or image create by the website  its must be store in itinventory/media. <span class="info">* can refer on the \itinventory\settings.py file for futher enquire.</span> </p>
 <br>
    <p> For main/views.py file its contain 18 section code block and divide with python comment code #.
         The list of the section can be seen below :  </p>
    <ul>
        <li>Login function</li>
        <li>Logout</li>
        <li>Homepage</li>
        <li>Computer Page</li>
        <li>Laptop Page</li>
        <li>Network Hardware Page</li>
        <li>User Page</li>
        <li>Loan Page</li>
        <li>IP Page</li>
        <li>Software page</li>
        <li>History log</li>
        <li>QR PC</li>
        <li>QR Laptop</li>
        <li>Upload qr image for PC</li>
        <li>Upload qr image for Laptop</li>
        <li>Download file</li>
        <li>Create PDF</li>
        <li>Mass upload page</li>
    
    </ul>
    <p> For main/model.py file its contains 8 section code block and divide with python comment code #.
         The list of the section can be seen below :</p>
    <ul>
        <li>Computer table</li>
        <li>Laptop table</li>
        <li>NetworkHardware table</li>
        <li>UserAsset table</li>
        <li>Loan table</li>
        <li>IP table</li>
        <li>softwareUser table</li>
        <li>loghistory table</li>
    </ul>
    <br>
    <p>For main/urls.py file its contains 14 section code block and divide with python comment code #.
         The list of the section can be seen below :</p>
    <ul>
        <li>Login path</li>
        <li>Logout path</li>
        <li>Homepage path</li>
        <li>Computer path</li>
        <li>Laptop path</li>
        <li>Network Hardware path</li>
        <li>User path</li>
        <li>Loan path</li>
        <li>IP path</li>
        <li>Software path</li>
        <li>History log path</li>
        <li>Download file path</li>
        <li>Create PDF path</li>
        <li>Mass upload page path</li>
    </ul>
    <br>
    <p>For main/admin.py file its contain 2 section, that is the model look section and model registration section.</p>
    <br>
    <p>For main/model.py file its contains 20 section code block and divide with python comment code #.
         The list of the section can be seen below :</p>
          <ul>
        <li>Brand table</li>
        <li>ModelPC table</li>
        <li>Modellaptop table</li>
        <li>ModelPCMachine table</li>
        <li>Processor_type table</li>
        <li>Software table</li>
        <li>softwareUser table</li>
        <li>Ram_type table</li>
        <li>Microsoft_office table</li>
        <li>Location table</li>
        <li>Windows table</li>
        <li>vendor table</li>
        <li>Hardware_type table</li>
        <li>NetworkAsset_brand table</li>
        <li>Asset_running_number table</li>
        <li>NetworkAsset_vendor table</li>
        <li>NetworkAsset_location table</li>
        <li>NetworkAsset_block table</li>
        <li>storagevalue table</li>      
    </ul>
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