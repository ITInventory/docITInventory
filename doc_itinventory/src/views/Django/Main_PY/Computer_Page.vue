
<template>
 <main class="main"> 
    <h1 class="title">Computer Page</h1>
    <br>
    <p>On this page its tell the content of Computer Page function Section in the Main.py.
    </p>
    <br>
    <p>The Computer Page function Section there were 10 code function as show below</p>
    <ul>
        <li><a href="#">computerdetail()</a>
            <ul>
                <li>This function is about the render process of the computer page</li>
            </ul>
         </li> <br>
        <li><a href="#">addcomputerform()</a>
            <ul>
                <li>This function is about the inserting process of inserting data into Computer table </li>
            </ul>
         </li> <br>
        <li><a href="#">rundatatoform()</a> 
            <ul>
                <li>This function is about the send the PC running number from specification.Asset_running_number table and Unuse IP address from main.IP 
                    to the add form modal in Computer Page </li>
            </ul>
        </li> <br>
        <li><a href="#">updateformpc()</a> 
            <ul>
                <li>This function is about the Updating process of selected data from Computer table </li>
            </ul>
        </li> <br>
        <li><a href="#">getdataupdate()</a> 
            <ul>
                <li>This function is about the send the selected PC data  from main.Computer table and Unuse IP address from main.IP 
                    to the update form modal in Computer Page </li>
            </ul>
        </li> <br>
        <li><a href="#">getcomputerdata()</a>
            <ul>
                <li>This function is about the send the all PC data  from main.Computer table send it
                    to the data table in Computer page for Display the data </li>
            </ul>
        </li> <br>
        <li><a href="#">getcustomPCdata()</a> 
            <ul>
                <li>This function is about the send the custom selected PC data  from main.Computer table send it
                    to the data table at the export table in the export data modal form in Computer page for Display the data </li>
            </ul>
        </li> <br>
        <li><a href="#">exportdatapc()</a>
            <ul>
                <li>This function is about the send the all PC data  from main.Computer table send it
                    to the a javascript function name download_csv() in Computer page for exporting the data in csv file form  </li>
            </ul> 
        </li> <br>
        <li><a href="#">GetQRPCData()</a> 
            <ul>
                <li>This function is about the Create a qr code image based on the selected PC data  from main.Computer table send it
                    and insert the image urls into the image field in  PC data  from main.Computer</li>
            </ul> 
        </li> <br>
        <li><a href="#">searchPCdata()</a> 
        <ul>
            <li>This function is about the search computer data based on sended pc data id from main.Computer table and send back  
                the search data to the html views.
            </li>
        </ul>
        
        </li>
      

    </ul>
    <br>
    <h1 class="title">computerdetail</h1>
    <p>This function is about the render process of the computer page. The code can be seen as shown below :</p>
    <div class="command">
        <pre class="codeblock">
                <code>
                    def computerdetail(request):
                        #get data from table specification.ModelPC
                        pctype = ModelPC.objects.all()

                        #get data from table specification.Processor_type
                        processorType = Processor_type.objects.all()

                        #get data from table specification.Brand
                        brand = Brand.objects.all()

                        #get data from table specification.Ram_type
                        ram_type = Ram_type.objects.all()

                        #get data from table specification.Microsoft_office
                        microsoft_office = Microsoft_office.objects.all()

                        #get data from table specification.Location
                        location = Location.objects.all()

                        #get data from table specification.Windows
                        window = Windows.objects.all()

                        #get data from table Main.Computer
                        displaydata = Computer.objects.all()

                        #get data from table specification.storagevalue
                        storage_value = storagevalue.objects.all()

                        #get amount data from table Main.Computer 
                        tableend = Computer.objects.all().count()
                        tablestart = 0

                        #get data from table specification.vendor
                        Vendor = vendor.objects.all()

                        #create a range of data using tablestart and tableend
                        tablerange = range(tablestart, tableend)

                        #get data from table specification.Asset_running_number
                        runing_number = Asset_running_number.objects.filter(asset_type='PC').get()
                    
                        #Get a value from session key name  "name"
                        username =  format(request.session.get('name'))
                        if (format(request.session.get('role')) == "staff"):
                            style = format(request.session.get('styledivstaff'))
                        else:
                            style = format(request.session.get('styledivNotstaff'))

                        #Create a context data array
                        context = {'pctype':pctype,
                        'processorType':processorType,
                        'brand':brand,
                        'ram_type':ram_type,
                        'processorType':processorType,
                        'microsoft_office':microsoft_office,
                        'location':location,
                        'window':window,
                        'Vendor':Vendor,
                        'runing_number':runing_number,
                        'tablerange':tablerange,
                        
                        'displaydata':displaydata,
                        'storage_value': storage_value,  "Username": username,
                            "Style" : style}

                        #Render the page
                        return render(request, 'Computer Page.html', context)
            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <img class="imgFlowchart" alt="image" src="@/assets/images/Computer/computerdetail flowchart.svg">
   <br>
     <h3 class="title">Explanation :</h3>
   <br>
   <p>
       The computerdetail function will send a ORM request to the main database and specification database for 
       getting data from selected table. Then the system create a local variable pctype, processorType,  brand,  
        ram_type, microsoft_office, location , storage_value, Vendor,runing_numberand window variable from getting
        the data from selected specification table and a display data variable from Main table. After that its call
        the session key name  and put its into local variable username and do a condition if the role match with staff then
        its will get the value session key styledivstaff and put its into local variable style, if not match then 
        its will call the value of the session key styledivNotstaff and put its into local variable style.
        lastly its will create a data array with the name context by using the all the local variable. 
        After the context array created the server will render the file " Computer Page.html" and put the context array data in the request of the render.

   </p>
   <br>

   <h1 class="title">addcomputerform</h1>
    <p>This function is about the inserting process of inserting data into Computer table. The code can be seen as shown below :</p>
    <div class="command">
        <pre class="codeblock">
                <code>
                 def addcomputerform(request):
                    if request.method == "POST":
                        #Get the running number from specification.Asset_running_number
                        runing_number = Asset_running_number.objects.filter(asset_type='PC').get()

                        #create a ORM object form Main.Computer table
                        data = Computer()

                        #Get the data from form via json data sent via ajax function in html file 
                        data.pic = request.POST['pic']
                        data.previous_pic = request.POST['Previous_PIC']
                        data.computer_id = request.POST['Computer_ID']
                        data.current_computer_id = request.POST['Current_Computer_ID']
                        data.type_of_purchase = request.POST['type_of_purchase']
                        data.Brand = request.POST['Brand']
                        data.Model = request.POST['model']
                        data.serial_number = request.POST['serial_number']
                        data.asset_no = request.POST['asset_no']
                        data.vendor = request.POST['vendor']
                        data.pctype = request.POST['machineType']
                        data.processor_type = request.POST['processor']
                        data.ram_type = request.POST['ram_type']
                        data.ram_slot = request.POST['ram_slot']
                        data.total_ram = request.POST['total_RAM']
                        data.storage_type = request.POST['storage_type']
                        data.storage_space = request.POST['storageSpace']
                        data.dop = request.POST['dop']
                        data.dop_Warranty_end_date = request.POST['dopYear']
                        data.po = request.POST['po']
                        data.invoice = request.POST['invoice']
                        data.block = request.POST['block']
                        data.location = request.POST['location']
                        data.standard_installation = request.POST['Standard_Installation']
                        data.cdunlock = request.POST['cd_unlock']
                        data.usbunlock = request.POST['usb_unlock']
                        data.microsoft_office = request.POST['Microsoft_Office']
                        data.microsoft_office_keys = request.POST['Licensed_key']
                        standaad_installation = data.standard_installation
                        data.windows = request.POST['Window_version']
                        data.lan_mac_address = request.POST['lan_mac_address']
                        data.lan_ip_address = request.POST['lan_ip_address']
                        data.wlan_mac_address = request.POST['wlan_mac_address']

                        data.wlan_ip_address = request.POST['wlan_ip_address']
                        data.joined_domain = request.POST['Joined_Domain']
                        data.connection_type = request.POST['ConnectionType']
                        data.pccurrentstatus = request.POST['Computer_Status']

                        #check if array key ConnectionType is equal to Offline
                        if(request.POST['ConnectionType'] == "Offline"):
                            if not Computer.objects.filter(computer_id=request.POST['Computer_ID']).exists():
                                data.lan_ip_address = "offline"

                                data.save()
                                num = int(runing_number.running_number)+1
                                updatenum = Asset_running_number.objects.get(asset_type='PC')
                                updatenum.running_number = num
                                updatenum.save()
                                log_history = loghistory()
                                log_history.Time = datetime.now()
                                log_history.Username = format(request.session.get('name'))
                                log_history.Activity = "Add A Computer By ID " + request.POST['Computer_ID']
                                log_history.save() 
                                if standaad_installation == "Yes" or standaad_installation == "yes":
                                            trend_micro = softwareUser()
                                            trend_micro.Software_Type = "Non-Concurrent"
                                            trend_micro.User_Type = "Machine"
                                            trend_micro.Software_Name = "Trend Micro"
                                            trend_micro.Software_Version = "Apex one"
                                            trend_micro.User_ID = data.computer_id
                                            trend_micro.save()
                                            teamviewer = softwareUser()
                                            teamviewer.Software_Type = "Non-Concurrent"
                                            teamviewer.User_Type = "Machine"
                                            teamviewer.Software_Name = "Teamviewer"
                                            teamviewer.Software_Version = "Teamviewer Host"
                                            teamviewer.User_ID = data.computer_id
                                            teamviewer.save()
                                            vnc = softwareUser()
                                            vnc.Software_Type = "Non-Concurrent"
                                            vnc.User_Type = "Machine"
                                            vnc.Software_Name = "TightVNC"
                                            vnc.Software_Version = "tightvnc-2.8.63"
                                            vnc.User_ID = data.computer_id
                                            vnc.save()
                                            marimba = softwareUser()
                                            marimba.Software_Type = "Non-Concurrent"
                                            marimba.User_Type = "Machine"
                                            marimba.Software_Name = "Marimba"
                                            marimba.Software_Version = "SFSInventory_x64"
                                            marimba.User_ID = data.computer_id
                                            marimba.save()
                                arraydataQR = [ request.POST['Computer_ID'], request.POST['serial_number'], request.POST['Brand'], request.POST['model'] ]
                                type_create = 'Create'
                                create_qrcodePC(arraydataQR, type_create) 
                                return HttpResponse('hai')
                        else:

                            #check if ORM object is exits in the table
                            if not Computer.objects.filter(computer_id=request.POST['Computer_ID']).exists():
                                data.save()
                                num = int(runing_number.running_number)+1
                                updatenum = Asset_running_number.objects.get(asset_type='PC')
                                updatenum.running_number = num
                                updatenum.save()

                                ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                ip.status = "In-use"
                                ip.ip_assisgned = data.computer_id
                                ip.save()
                                log_history = loghistory()
                                log_history.Time = datetime.now()
                                log_history.Username = format(request.session.get('name'))
                                log_history.Activity = "Add A Computer By ID " + request.POST['Computer_ID']
                                log_history.save()
                                if standaad_installation == "Yes" or standaad_installation == "yes":
                                            trend_micro = softwareUser()
                                            trend_micro.Software_Type = "Non-Concurrent"
                                            trend_micro.User_Type = "Machine"
                                            trend_micro.Software_Name = "Trend Micro"
                                            trend_micro.Software_Version = "Apex one"
                                            trend_micro.User_ID = data.computer_id
                                            trend_micro.save()
                                            teamviewer = softwareUser()
                                            teamviewer.Software_Type = "Non-Concurrent"
                                            teamviewer.User_Type = "Machine"
                                            teamviewer.Software_Name = "Teamviewer"
                                            teamviewer.Software_Version = "Teamviewer Host"
                                            teamviewer.User_ID = data.computer_id
                                            teamviewer.save()
                                            vnc = softwareUser()
                                            vnc.Software_Type = "Non-Concurrent"
                                            vnc.User_Type = "Machine"
                                            vnc.Software_Name = "TightVNC"
                                            vnc.Software_Version = "tightvnc-2.8.63"
                                            vnc.User_ID = data.computer_id
                                            vnc.save()
                                            marimba = softwareUser()
                                            marimba.Software_Type = "Non-Concurrent"
                                            marimba.User_Type = "Machine"
                                            marimba.Software_Name = "Marimba"
                                            marimba.Software_Version = "SFSInventory_x64"
                                            marimba.User_ID = data.computer_id
                                            marimba.save()
                                
                                arraydataQR = [ request.POST['Computer_ID'], request.POST['serial_number'], request.POST['Brand'], request.POST['model'] ]
                                type_create = 'Create'
                                create_qrcodePC(arraydataQR, type_create) 


                                return HttpResponse('hai')

            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <br>
   <div class="imgFlowchart">
   <img  alt="image" src="@/assets/images/Computer/Add Computer flowchart.svg">

   </div>
   <br>
   <br>
   <h3 class="title">Explanation :</h3>
   <p>
       <ul>
            <li>1. The system will check if the method of the request is equal to "POST", if its true its will run to the next process meanwhile if false its will return render the 
               &emsp; computer page </li>
            <li>2. The system get the PC running number from specification.Asset_running_number table and create 
                a local variable name running_number</li>
            <li>3. The system get the json array data  from a javascript function ajax Post call 
                and create a request.post variable array, then the system insert the data from json 
                array into the ORM key index for creating a new data </li>
            <li>
                4. Then its proceed to a conditional check if the index key "ConnectionType " equal to "Offline" :
                <ul>
                    <li class="title">True</li>
                    <li>If its true then its proceed to check whatever the ORM data exits in the table. if its find its a False then its return render the page,if its true its will proceed to insert the orm into the table. </li>
                    <li>
                        After that its proceed to convert the runing_number variable from string into int and increment  its by 1 value,
                        then create a ORM of PC from specification.asset_running_number and and update the orm value with the new num variable value
                    </li>
                    <li>After update the asset number , the proceed to create a ORM from specification.IP using the index key array lanip variable, its update IP status from "Not-inuse" to "In-use"</li>
                    <li>Then The system proceed to create the history log of the insertion process using the main.loghistory table ORM</li>
                    <br>
                    <li class="title">False</li>
                    <li>If its is false then  its proceed to check whatever the ORM data exits in the table. if its find its a False then its return render the page,if its true its will proceed to insert the orm into the table.</li>
                    <li>
                        After that its proceed to convert the runing_number variable from string into int and increment  its by 1 value,
                        then create a ORM of PC from specification.asset_running_number and and update the orm value with the new num variable value
                    </li>
                    <li>After update the asset number , the system proceed to create the history log of the insertion process using the main.loghistory table ORM</li>
                </ul> 
            </li>
            <br>
            <li>5. Then the system will check whatever the standard_installation is equal to "Yes" value
                <ul>
                    <li class="title">True</li>
                    
                    <li>
                        If its true then the system will create 4 ORM object from 1 table that is main.softwareUser table. Each ORM using difference type of software value. After inserting the value from local variable into these ORM, the system proceed to do the inserting process to the Main.softwareUser table. 
                    </li>
                    <br>
                    <li class="title">False</li>
                    <li>If its is false then its proceed to the next process.</li>
                    
                </ul>
            </li>
            <br>
            <li>6. for the next process, the system will create ArraydataQR variable using the local variable, then the system will run the function create_qrcodePC while importing the ArraydataQR variable into the function </li>
            <li>7. lastly the system will sent a HttpResponse indicate the inserting proceed complete to the ajax function in the html file</li>
       </ul>
   </p>

   <br>
   <p>
       

   </p>
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
    max-width: 2500px;
    max-height: 1500px;
    margin-left: 0px;
   overflow-y: scroll;
    left: 0;


}
a {
  color: rgb(12, 31, 73);
  font-size: 20px;
  
}
</style>