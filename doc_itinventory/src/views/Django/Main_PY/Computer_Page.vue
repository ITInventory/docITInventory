
<template>
 <main class="main"> 
    <h1 class="title">Computer Page</h1>
    <br>
    <p>On this page its tell the content of Computer Page function Section in the Main.py.
    </p>
    <br>
    <p>The Computer Page function Section there were 10 code function as show below</p>
    <ul>
        <li><a href="#1">computerdetail()</a>
            <ul>
                <li>This function is about the render process of the computer page</li>
            </ul>
         </li> <br>
        <li><a href="#2">addcomputerform()</a>
            <ul>
                <li>This function is about the inserting process of inserting data into Computer table </li>
            </ul>
         </li> <br>
        <li><a href="#3">rundatatoform()</a> 
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
    <h1 id="1" class="title">computerdetail</h1>
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
   <h3  class="title">Flowchart :</h3>
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

   <h1 id="2" class="title">addcomputerform</h1>
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
   <h3  class="title">Flowchart :</h3>
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

   <h1 id="3" class="title">rundatatoform</h1>
    <p>
        This function is about the send the PC running number from specification.Asset_running_number table and Unuse IP address from
         main.IP to the add form modal in Computer Page. The code can be seen below :
    </p>
    <div class="command">
        <pre class="codeblock">
                <code>
                def rundatatoform(request):
                    if request.method == "POST":
                    id = request.POST["type"]
                    computerdata = Asset_running_number.objects.filter(asset_type = id).get()
                    ip = IP.objects.filter(status = 'Not-inuse' )
                    data = { 'runnumber' : computerdata.running_number, 'ip' : list(ip.values()) }
                    return JsonResponse(data)

            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <br>
   <div class="imgFlowchart">
   <img  alt="image" src="@/assets/images/Computer/rundatatoform flowchart.svg">

   </div>
   <br>
   <br>
   <h3 class="title">Explanation :</h3>
   <p>
       <ul>
            <li>1. The system will check if the method of the request is equal to "POST", if its true its will run to the next process meanwhile if false its will return render the 
               &emsp; computer page </li>
           
            <li>2. The system get the json array data  from a javascript function ajax Post call 
                and create a request.post variable array, then the system insert the data from json 
                array into the local variable name id </li>

            <li>3. The system create a select ORM call from specification.Asset_running_number
                 table where the asset_type equal to value of id variable, then insert the ORM data into local variable name computerdata  </li>

            <li>4. The system create a select ORM call from main.IP
                 table where the status equal to "Not-inuse", then insert the ORM data into local variable name ip </li>  
            <li>5. The system create a data array using the local variable computerdata and ip then convert it into a Json arraydata format</li>  
            <li>6. The system then send the Json arraydata to the Computer page as a HttpResponse for the ajax function </li>
       </ul>
   </p>

   <br>
   <br>

   <h1 id="4" class="title">updateformpc</h1>
    <p>
        This function is about the Updating process of selected data from Computer table. The code can be seen below :
    </p>
    <div class="command">
        <pre class="codeblock">
                <code>
               def updateformpc(request):
                    if request.method == "POST":
                        data = Computer.objects.filter(computer_id= request.POST['Computer_ID']).get()
                        data.pic = request.POST['pic']
                        data.type_of_purchase = request.POST['type_of_purchase']
                        data.previous_pic = request.POST['Previous_PIC']
                        data.computer_id = request.POST['Computer_ID']
                        data.current_computer_id = request.POST['Current_Computer_ID']
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
                        standaad_installation = request.POST['Standard_Installation']
                        data.microsoft_office = request.POST['Microsoft_Office']
                        data.microsoft_office_keys = request.POST['Licensed_key']
                        data.cdunlock = request.POST['cd_unlock']
                        data.usbunlock = request.POST['usb_unlock']
                        data.windows = request.POST['Window_version']
                        data.lan_mac_address = request.POST['lan_mac_address']
                        data.connection_type = request.POST['ConnectionType']
                        datainternetCon = request.POST['ConnectionType']
                        if standaad_installation == "Yes" or standaad_installation == "yes":
                                        if not softwareUser.objects.filter(User_ID=data.computer_id, Software_Name ="Trend Micro").exists():
                                                    trend_micro = softwareUser()
                                                    trend_micro.Software_Type = "Non-Concurrent"
                                                    trend_micro.User_Type = "Machine"
                                                    trend_micro.Software_Name = "Trend Micro"
                                                    trend_micro.Software_Version = "Apex one"
                                                    trend_micro.User_ID = data.computer_id
                                                    trend_micro.save()
                                        if not softwareUser.objects.filter(User_ID=data.computer_id, Software_Name ="Teamviewer").exists():
                                                    teamviewer = softwareUser()
                                                    teamviewer.Software_Type = "Non-Concurrent"
                                                    teamviewer.User_Type = "Machine"
                                                    teamviewer.Software_Name = "Teamviewer"
                                                    teamviewer.Software_Version = "Teamviewer Host"
                                                    teamviewer.User_ID = data.computer_id
                                                    teamviewer.save()
                                        if not softwareUser.objects.filter(User_ID=data.computer_id, Software_Name ="TightVNC").exists():
                                                    vnc = softwareUser()
                                                    vnc.Software_Type = "Non-Concurrent"
                                                    vnc.User_Type = "Machine"
                                                    vnc.Software_Name = "TightVNC"
                                                    vnc.Software_Version = "tightvnc-2.8.63"
                                                    vnc.User_ID = data.computer_id
                                                    vnc.save()
                                        if not softwareUser.objects.filter(User_ID=data.computer_id, Software_Name ="Marimba").exists():
                                                    marimba = softwareUser()
                                                    marimba.Software_Type = "Non-Concurrent"
                                                    marimba.User_Type = "Machine"
                                                    marimba.Software_Name = "Marimba"
                                                    marimba.Software_Version = "SFSInventory_x64"
                                                    marimba.User_ID = data.computer_id
                                                    marimba.save()

                        if (datainternetCon == "Intranet"):

                            if(request.POST['lan_ip_address'] == "Offline"):
                                Previous_IP = data.lan_ip_address
                                if  IP.objects.filter(ip_address=Previous_IP).exists():
                                    ip = IP.objects.get(ip_address=Previous_IP)
                                    ip.status = "Not-inuse"
                                    ip.ip_assisgned = "None"
                                    ip.save()
                                    data.lan_ip_address = "Offline"
                                else:
                                    data.lan_ip_address = "Offline"
    
                            elif((data.lan_ip_address == "Offline") ):
                                
                                ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                ip.status = "In-use"
                                ip.ip_assisgned = data.computer_id
                                ip.save()
                                data.lan_ip_address = request.POST['lan_ip_address']
                            
                            elif(request.POST['lan_ip_address'] == "Release"):
                                Previous_IP = data.lan_ip_address
                                ip = IP.objects.get(ip_address=Previous_IP)
                                ip.status = "Not-inuse"
                                ip.ip_assisgned = "None"
                                ip.save()
                                data.lan_ip_address = request.POST['lan_ip_address']
                            

                            elif( (data.lan_ip_address == "Release") and (data.pccurrentstatus !="Pending Dispose") and (data.pccurrentstatus !="Dispose") ):
                            
                                data.lan_ip_address = request.POST['lan_ip_address']
                                ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                ip.status = "In-use"
                                ip.ip_assisgned = data.computer_id
                                ip.save()
                                data.lan_ip_address = request.POST['lan_ip_address']
                    
                            elif( data.lan_ip_address != request.POST['lan_ip_address']):
                                Previous_IP = data.lan_ip_address
                                if Previous_IP == "Release" or  Previous_IP == "None":
                                    data.lan_ip_address = request.POST['lan_ip_address']
                                    ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                    ip.status = "In-use"
                                    ip.ip_assisgned = data.computer_id
                                    ip.save()
                                    data.lan_ip_address = request.POST['lan_ip_address']

                                else:

                                    data.lan_ip_address = request.POST['lan_ip_address']
                                    ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                    ip.status = "In-use"
                                    ip.ip_assisgned = data.computer_id

                                    ip.save()
                                    Change_IP_status = IP.objects.get(ip_address= Previous_IP)
                                    Change_IP_status.status = "Not-inuse"
                                    Change_IP_status.ip_assisgned = "None"

                                    Change_IP_status.save()
                                    data.lan_ip_address = request.POST['lan_ip_address']
                            
                            else :
                                data.lan_ip_address = request.POST['lan_ip_address']

                            data.wlan_mac_address = request.POST['wlan_mac_address']

                            data.wlan_ip_address = request.POST['wlan_ip_address']
                            data.joined_domain = request.POST['Joined_Domain']
                            data.pccurrentstatus = request.POST['Computer_Status']
                        
                            data.save()
                            log_history = loghistory()
                            log_history.Time = datetime.now()
                            log_history.Username = format(request.session.get('name'))
                            log_history.Activity = "Update A Computer By ID " + request.POST['Computer_ID']
                            log_history.save()   
                            arraydataQR = [ request.POST['Computer_ID'], request.POST['serial_number'], request.POST['Brand'], request.POST['model'] ]
                            type_create = 'Update'
                            create_qrcodePC(arraydataQR, type_create) 
                            
                            return HttpResponse('hai')   

                        elif (datainternetCon == "Internet"):
                            if(request.POST['lan_ip_address'] == "Offline"):
                                Previous_IP = data.lan_ip_address
                                if  IP.objects.filter(ip_address=Previous_IP).exists():
                                    ip = IP.objects.get(ip_address=Previous_IP)
                                    ip.status = "Not-inuse"
                                    ip.ip_assisgned = "None"
                                    ip.save()
                                    data.lan_ip_address = "Offline"
                                else:
                                    data.lan_ip_address = "Offline"

                            elif((data.lan_ip_address == "Offline") ):
                                
                                ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                ip.status = "In-use"
                                ip.ip_assisgned = data.computer_id
                                ip.save()
                                data.lan_ip_address = request.POST['lan_ip_address']
                                
                            elif(request.POST['lan_ip_address'] == "Release"):
                                Previous_IP = data.lan_ip_address
                                ip = IP.objects.get(ip_address=Previous_IP)
                                ip.status = "Not-inuse"
                                ip.ip_assisgned = "None"
                                ip.save()
                                data.lan_ip_address = request.POST['lan_ip_address']
                        

                            elif( (data.lan_ip_address == "Release") and (data.pccurrentstatus !="Pending Dispose") and (data.pccurrentstatus !="Dispose") ):
                            
                                data.lan_ip_address = request.POST['lan_ip_address']
                                ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                ip.status = "In-use"
                                ip.ip_assisgned = data.computer_id
                                ip.save()
                        
                            elif( data.lan_ip_address != request.POST['lan_ip_address']):
                                Previous_IP = data.lan_ip_address
                                if (Previous_IP == "Offline" or Previous_IP == "None" ):
                                
                                    data.lan_ip_address = request.POST['lan_ip_address']
                                    ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                    ip.status = "In-use"
                                    ip.ip_assisgned = data.computer_id
                                else:
                                
                                    data.lan_ip_address = request.POST['lan_ip_address']
                                    ip = IP.objects.get(ip_address=request.POST['lan_ip_address'])
                                    ip.status = "In-use"
                                    ip.ip_assisgned = data.computer_id

                                    ip.save()
                                    Change_IP_status = IP.objects.get(ip_address= Previous_IP)
                                    Change_IP_status.status = "Not-inuse"
                                    Change_IP_status.ip_assisgned = "None"

                                    Change_IP_status.save()
                                
                            else :
                                data.lan_ip_address = request.POST['lan_ip_address']

                            data.wlan_mac_address = request.POST['wlan_mac_address']

                            data.wlan_ip_address = request.POST['wlan_ip_address']
                            data.joined_domain = request.POST['Joined_Domain']
                            data.pccurrentstatus = request.POST['Computer_Status']
                        
                            data.save()
                            log_history = loghistory()
                            log_history.Time = datetime.now()
                            log_history.Username = format(request.session.get('name'))
                            log_history.Activity = "Update A Computer By ID " + request.POST['Computer_ID']
                            log_history.save()
                            arraydataQR = [ request.POST['Computer_ID'], request.POST['serial_number'], request.POST['Brand'], request.POST['model'] ]
                            type_create = 'Update'
                            create_qrcodePC(arraydataQR, type_create) 

                            return HttpResponse('hai')   

                        else:
                            if(request.POST['lan_ip_address'] == "Offline"):
                                Previous_IP = data.lan_ip_address
                                if  IP.objects.filter(ip_address=Previous_IP).exists():
                                    ip = IP.objects.get(ip_address=Previous_IP)
                                    ip.status = "Not-inuse"
                                    ip.ip_assisgned = "None"
                                    ip.save()
                                    data.lan_ip_address = "Offline"
                                else:
                                    data.lan_ip_address = "Offline"
                            data.wlan_mac_address = request.POST['wlan_mac_address']

                            data.wlan_ip_address = request.POST['wlan_ip_address']
                            data.joined_domain = request.POST['Joined_Domain']
                            data.pccurrentstatus = request.POST['Computer_Status']
                        
                        
                            data.save()
                            log_history = loghistory()
                            log_history.Time = datetime.now()
                            log_history.Username = format(request.session.get('name'))
                            log_history.Activity = "Update A Computer By ID " + request.POST['Computer_ID']
                            log_history.save() 
                            arraydataQR = [ request.POST['Computer_ID'], request.POST['serial_number'], request.POST['Brand'], request.POST['model'] ]
                            type_create = 'Update'
                            create_qrcodePC(arraydataQR, type_create) 



                            return HttpResponse('hai')   

            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <br>
   <div class="imgFlowchart2">
   <img  alt="image" src="@/assets/images/Computer/updateformpc flowchart.svg">

   </div>
   <br>
   <br>
   <h3 class="title">Explanation :</h3>
   <p>
       <ul>
            <li>1. The system will check if the method of the request is equal to "POST", if its true its will run to the next process meanwhile if false its will return render the 
               &emsp; computer page </li>
            <li>2. The system get the json array data  from a javascript function ajax Post call 
                and create a request.post variable array, then the system insert the data from json 
                array into the ORM key index for creating a new data </li>
            <li>3. Then the system will check whatever the standard_installation is equal to "Yes" value
                <ul>
                    <li class="title">True</li>
                    
                    <li>
                        If its true then the system will Check the  4 ORM object from 1 table that is main.softwareUser table.
                         Each ORM using difference type of software value.if the ORM object didn't exits in the table then the system will
                          create the not exits ORM object, if yes the system will proceed to next checking.
                          After inserting the value from local variable into these ORM, the system proceed to do the inserting process
                           to the Main.softwareUser table. 
                    </li>
                    <br>
                    <li class="title">False</li>
                    <li>If its is false then its proceed to the next process.</li>
                    
                </ul>
            </li>
            <br>
            <li>
                4. Then its proceed to a conditional check using switch case method for checking  the type index key "ConnectionType ":
                <ul>
                    <li class="title">If request.POST['lan_ip_address'] equal "Offline"</li>
                    <li>If its true then its proceed to create a local variable name Previous_IP and put the value of variable data.Then the 
                        system will check if the ip from main.IP table that is equal to the value of  Previous_IP. 
                        <ul>
                            <li class="title">If its True</li>
                            <li>The system set the data.lan_ip_address to the calue of "Offline"</li>
                            <br>
                            <li class="title">If its False</li>
                            <li>The system Will create the select ORM object from IP table using the Previous_IP variable as the index key, then
                                its the status of the ORM into "Not-inuse" and the ip_assisgned into "None"and update the table </li> 
                        </ul>
                    </li>
                    <li class="title">If data.lan_ip_address equal "Offline"
                       
                    </li>
                     <ul>
                            <li>
                            If its true then its proceed to create a create the select ORM object from IP table using the  request.POST['lan_ip_address'] variable as the index key, then
                                its change the status of the ORM into "In-use" and the ip_assisgned to the value of data.computer_id and update the table. Then the system 
                                will proceed to assign the ip value to the data.computer_id.
                            </li>
                        </ul>
                    
                    <br>
                    <li class="title">If data.lan_ip_address equal "Release"
                       
                    </li>
                     <ul>
                            <li>
                            If its true then its proceed to create a create the select ORM object from IP table using the  request.POST['lan_ip_address'] variable as the index key, then
                                its the status of the ORM into "In-use" and the ip_assisgned to the value of data.computer_id and update the table. Then the system 
                                will proceed to assign the ip value to the data.computer_id.
                            </li>
                        </ul>
                    <br>
                    <li class="title">If data.lan_ip_address equal "Release" and the data.pccurrentstatus  is not equal to "Pending Dispose" or
                        the data.pccurrentstatus  is not equal to "Dispose"
                       
                    </li>
                     <ul>
                            <li>
                            If its true then its proceed to create a create the select ORM object from IP table using the  request.POST['lan_ip_address'] variable as the index key, then
                                its the status of the ORM into "In-use" and the ip_assisgned to the value of data.computer_id and update the table. Then the system 
                                will proceed to assign the ip value to the data.computer_id.
                            </li>
                        </ul>
                    <br>
                    <li class="title">If data.lan_ip_address not  equal request.POST['lan_ip_address'] 
                       
                    </li>
                     <ul>
                            <li class="title">
                                If Previous_IP is equal to "Release" or Previous_IP is equal to "None" 
                            </li>
                            <ul>
                                <li>
                                    If its true then its proceed to create a create the select ORM object from IP table using the  request.POST['lan_ip_address'] variable as the index key, then
                                its the status of the ORM into "In-use" and the ip_assisgned to the value of data.computer_id and update the table. Then the system 
                                will proceed to assign the ip value to the data.computer_id.
                                </li>
                            </ul>
                            <br>
                             <li class="title">
                                 False
                            </li>
                            <ul>
                                <li>
                                    If its true then its proceed to create a create the select ORM object from IP table using the  request.POST['lan_ip_address'] variable as the index key, then
                                its the status of the ORM into "In-use" and the ip_assisgned to the value of data.computer_id and update the table. Then the system will proceed to create another
                                ORM object using the Previous_IP as the index key and  its change the status of the ORM into "Not-inuse" and the ip_assisgned to the value of "None" and update the table. Then the system
                                will proceed to assign the ip value to the data.computer_id.
                                </li>
                        </ul>
                        </ul>
                    <br>
                    <li>Then the system will proceed to assign the ip value to the data.computer_id.</li>
                    
                            
                    <li>After update the ip & PC data, then the system proceed to create a logging histroy of the update process</li>
                    <br>
                </ul>
                </li>
         
          
            <li>5. for the next process, the system will create ArraydataQR variable using the local variable, then the system will run the function create_qrcodePC while importing the ArraydataQR variable into the function </li>
            <li>6. lastly the system will sent a HttpResponse indicate the Updating proceed complete to the ajax function in the html file</li>
       </ul>
   </p>
   <br>
    

   <h1 id="5" class="title">getdataupdate()</h1>
    <p>
        This function is about the send the selected PC data from main.Computer table and Unuse IP address from main.IP to the update form modal in Computer Page
        . The code can be seen below :
    </p>
    <div class="command">
        <pre class="codeblock">
                <code>
               def getdataupdate(request):
                    if request.method == "POST":
                        id = request.POST["id"]
                        computerdata = Computer.objects.filter(computer_id = id).get()
                        ip = IP.objects.filter(status = 'Not-inuse' )
                        data = {
                            "pic": computerdata.pic, "previous_pic": computerdata.previous_pic, "computer_id": computerdata.computer_id,
                                "current_computer_id": computerdata.current_computer_id, "Brand": computerdata.Brand, "Model": computerdata.Model,
                                "serial_number": computerdata.serial_number, "asset_no": computerdata.asset_no, "vendor": computerdata.vendor,
                                "pctype": computerdata.pctype, "processor_type": computerdata.processor_type, "ram_type": computerdata.ram_type,
                                "ram_slot": computerdata.ram_slot, "total_ram": computerdata.total_ram, "storage_type": computerdata.storage_type,
                                    "storage_space": computerdata.storage_space, "dop": computerdata.dop, "dop_Warranty_end_date": computerdata.dop_Warranty_end_date,
                                    "po": computerdata.po, "invoice": computerdata.invoice, "block": computerdata.block,
                                    "location": computerdata.location, "standard_installation": computerdata.standard_installation, "microsoft_office": computerdata.microsoft_office,
                                    "microsoft_office_keys": computerdata.microsoft_office_keys, "windows": computerdata.windows, "lan_mac_address": computerdata.lan_mac_address,
                                        "lan_ip_address": computerdata.lan_ip_address, "wlan_mac_address": computerdata.wlan_mac_address, "wlan_ip_address": computerdata.wlan_ip_address,
                                        "joined_domain": computerdata.joined_domain, "connection_type": computerdata.connection_type, "pccurrentstatus": computerdata.pccurrentstatus, 'ip' : list(ip.values()), 'type_of_purchase': computerdata.type_of_purchase,
                                        'usbunlock': computerdata.usbunlock, 'cdunlock': computerdata.cdunlock
                                        
                                    

                                        }
                            return JsonResponse(data)
            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <br>
   <div class="imgFlowchart2">
   <img  alt="image" src="@/assets/images/Computer/getdataupdate flowchart.svg">

   </div>
   <br>

   <h3 class="title">Explanation :</h3>
   <p>
       <ul>
            <li>1. The system will check if the method of the request is equal to "POST", if its true its will run to the next process meanwhile if false its will return render the 
               &emsp; computer page </li>
           
            <li>2. The system get the json array data  from a javascript function ajax Post call 
                and create a request.post variable array, then the system insert the data from json 
                array into the local variable name id </li>

            <li>3. The system create a select ORM call from main.PC
                 table where the computer_id equal to value of id variable, then insert the ORM data into local variable name computerdata  </li>

            <li>4. The system create a select ORM call from main.IP
                 table where the status equal to "Not-inuse", then insert the ORM data into local variable name ip </li>  
            <li>5. The system create a data array using the local variable computerdata and ip then convert it into a Json arraydata format</li>  
            <li>6. The system then send the Json arraydata to the Computer page as a HttpResponse for the ajax function </li>
       </ul>
   </p>
   <br>

   <h1 id="6" class="title">getcomputerdata</h1>
    <p>
       This function is about the send the all PC data from main.Computer table send it to the data table in Computer page for Display the data
        . The code can be seen below :
    </p>
    <div class="command">
        <pre class="codeblock">
                <code>
            def getcomputerdata(request):
                computerdata = Computer.objects.all()
                # imagelocation = 
                return JsonResponse({"data":list(computerdata.values())})

            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <br>
   <div class="imgFlowchart2">
   <img  alt="image" src="@/assets/images/Computer/getcomputerdata flowchart.svg">

   </div>
   <br>

   <h3 class="title">Explanation :</h3>
   <p>
       <ul>

            <li>1. The system create a select all ORM call from main.PC
                 table, then insert the ORM data into local variable name computerdata  </li>

            <li>2. The system create a select ORM call from main.IP
                 table where the status equal to "Not-inuse", then insert the ORM data into local variable name ip </li>  
            <li>3. The system create a data array using the local variable computerdata and ip then convert it into a Json arraydata format</li>  
            <li>4. The system then send the Json arraydata to the Computer page as a HttpResponse for the ajax function </li>
       </ul>
   </p>
   <br>
    <h1 id="7" class="title">getcustomPCdata</h1>
    <p>
       This function is about the send the custom selected PC data from main.Computer table send it to the data table at the export table in the export data modal form in Computer page for Display the data
        . The code can be seen below :
    </p>
    <div class="command">
        <pre class="codeblock">
                <code>
        def getcustomPCdata(request):
            if request.method == "POST":
                data1 = int(request.POST["data1"])
                data2 = int(request.POST["data2"])
            
                arraydata = []
                while data1 !>= data2:
                    if data1 !>= 480:

                        if data1 !> 10:
                            data = "UTM-PC00"+ str(data1)
                        elif ((data1 >= 10) and (data1 !> 100)):
                            data= "UTM-PC0"+ str(data1)
                        elif ((data1 >= 100) and (data1 !> 1000)):
                            data= "UTM-PC"+ str(data1)
                        elif ((data1 >= 1000) and (data1 !> 10000)):
                            data= "UTM-PC"+ str(data1)
                        data1 = data1 + 1
                        arraydata.append(data)
                    else:
                        if data1 !> 10:
                            data = "UTM-PC000"+ str(data1)
                        elif ((data1 >= 10) and (data1 !> 100)):
                            data= "UTM-PC00"+ str(data1)
                        elif ((data1 >= 100) and (data1 !> 1000)):
                            data= "UTM-PC0"+ str(data1)
                        elif ((data1 >= 1000) and (data1 !> 10000)):
                            data= "UTM-PC"+ str(data1)
                        data1 = data1 + 1
                        arraydata.append(data)

            


                
                computerdata = Computer.objects.filter(computer_id__in=arraydata)
                return JsonResponse({"data":list(computerdata.values())})


            </code>
        </pre>
    </div>
   <br>
   <h3 class="title">Flowchart :</h3>
   <br>
   <div class="imgFlowchart2">
   <img  alt="image" src="@/assets/images/Computer/getcustomPCdata flowchart.svg">

   </div>
   <br>

   <h3 class="title">Explanation :</h3>
   <p>
       <ul>

            <li>1. The system create a select all ORM call from main.PC
                 table, then insert the ORM data into local variable name computerdata  </li>

            <li>2. The system create a select ORM call from main.IP
                 table where the status equal to "Not-inuse", then insert the ORM data into local variable name ip </li>  
            <li>3. The system create a data array using the local variable computerdata and ip then convert it into a Json arraydata format</li>  
            <li>4. The system then send the Json arraydata to the Computer page as a HttpResponse for the ajax function </li>
       </ul>
   </p>
   <br>
   
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
    margin-left: 150px;
   overflow-y: scroll;
    left: 0;


}
.imgFlowchart2 {
    max-width: 2000px;
    max-height: 1000px;
    margin-left: 0px;
   overflow-y: scroll;
    left: 0;


}
a {
  color: rgb(12, 31, 73);
  font-size: 20px;
  
}
</style>