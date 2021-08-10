<html>
    <head>
        <title>My table</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="assets/js/jquery.js"></script>
        <!--include sweet alert2 -->
        <script src="assets/sweetalert2/package/dist/sweetalert2.min.js"></script>
        <link type="text/css" rel="stylesheet" href="assets/sweetalert2/package/dist/sweetalert2.min.css">
        <!--include rtl semantic -->
        <script type="text/javascript" src="tablejavascript4.js"></script>
        <link type="text/css" rel="stylesheet" href="css1.css">
    </head>
    <body>
        <div class="background">
            <div class="responsive">
                        <div id="addEmployeeModal" class="modal fade">
                            <div class="headeradd"><h2 class="headeraddtext">Add Student </h2><img src="cancel.png" onclick="closewin()"></div>
                                <div class="bodyadd">
                                    <div class="divinputs">
                                        <label for="name"> Name</label><br><input type="text" name="Name"  id="name" class="input"><br>
                                        <label for="lastname"> Lastname</label><br><input type="text" name="Lastname"  id="lastname" class="input"><br>
                                        <label for="stdnumber"> Std number</label><br><input type="text" name="stdnumber"  id="stdnumber" class="input"><br>
                                        <label for="phonenumber"> Phone number</label><br><input type="text" name="phonenumber"  id="phonenumber" class="input"><br>
                                        <label for="birth"> Birth</label><br><input type="text" name="birth"  id="birth" class="input"><br>

                                    </div>
                                    <div class="divbottom">
                                        <input type="button" value="cancel" id="cancel" onclick="closewin()">
                                        <input type="button" value="Add" id="okAdd" onclick="Addrow()">

                                    </div>
                            </div>
                        </div>
                       

 
                <div class="divtable">

                        <table caption="manage" class="table" id="table">
                              <thead><tr><th colspan="3">Manage Student</th><th colspan='2'>search:  <input id='searchbox' type="text"  onkeyup="search()"></th><th colspan="3"> <input type="button" value=" Delete selected" id="deleteselected" onclick="dltselect()">
                                <input type="button" value="Add New Student" id="Add" onclick="openwin()"></th></tr></thead>
                             <tr id='tr'><td><input type="checkbox" class='checking' id="checkbox" onclick="checkAll(this)"></td><th> name</th><th >lastname</th><th >std number</th><th >phone number </th><th >birth</th><th>function</th></tr>
                        <tr id="second"><td><input class='checking' type="checkbox" onclick="notcheckAll(this)" ></td><td > matineh</td><td > nematbakhsh</td><td > 9707963</td><td >0930000000</td><td > 1378/07/26</td><td><input  class="button" id="edit" type="button" value="Edit" onclick="openwinedit(this)"/><input  class="button" id="delete" type="button" value="Delete row" onclick="RemoveRow(this)"/></td></tr>
                        </table>
                </div>
                            <div id="blur">

            </div>

            </div>
         
        </div>
      
    </body>

</html>