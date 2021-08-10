var op=0
var op2=0
function openwin(){
    
    document.getElementById("addEmployeeModal").style.display="block"
    document.getElementById("blur").style.display="inline"
    document.getElementById("addEmployeeModal").style.opacity=0
    document.getElementById("blur").style.opacity=0
    op=0
    fade2=setInterval(function(){fading2()} ,50)

    fade=setInterval(function(){fading()} ,20)

}
function fading()
    {
            if(document.getElementById("blur").style.opacity>1)
                clearInterval(fade)
            
            var slides =document.getElementById("blur")
            op+=0.06
            slides.style.opacity=op

        }
function fading2()
    {
        if( document.getElementById("addEmployeeModal").style.opacity>1)
                clearInterval(fade2)
            
            var slides2 = document.getElementById("addEmployeeModal")
            op2+=0.6
            slides2.style.opacity=op2
 
		}
function closewin(){
document.getElementById("addEmployeeModal").style.display="none"
var op=0
document.getElementById("blur").style.opacity=i
document.getElementById("blur").style.display="none"
 
for(var i=0;i<5;i++){
    document.getElementsByClassName("input")[i].onclick=function(){nothing(this)}

    document.getElementsByClassName("input")[i].value=""
    document.getElementsByClassName("input")[i].style.color="black"                        

}
}
function nothing(elem){
 }
function Addrow(){
    var fname = document.getElementById('name').value
    var lname = document.getElementById('lastname').value
    var std= document.getElementById('stdnumber').value
    var tel = document.getElementById('phonenumber').value
    var bdate = document.getElementById('birth').value

    $.ajax({

        url: "base.php",

        type: "POST",

        data: {

            Name: fname,

            Lastname: lname,

            stdnumber: std,

            phonenumber: tel,

            birth: bdate

        },

        success: function (dataResult) {

            var dataResult = JSON.parse(dataResult);

            if (dataResult.statusCode == 200) {

                // use sweet alert2 to show message
                Swal.fire({

                    icon: 'success',

                    title: 'ثبت ',

                    confirmButtonText: "باشه"

                })

            } else if (dataResult.statusCode == 400) {


                Swal.fire({

                    icon: 'error',

                    title: "خطا در وارد کردن اطلاعات",

                    html: dataResult.msg,

                    confirmButtonText: "باشه"

                })
            } else if (dataResult.statusCode == 500) {

                Swal.fire({

                    icon: 'error',

                    title: 'خطایی در سمت سرور رخ داد!',

                    confirmButtonText: "باشه"

                })

            }

        }

    });

    $.ajax({

        url: "base.php",

        type: "POST",

        data: {

            Name: fname,

            Lastname: lname,

            stdnumber: std,

            phonenumber: tel,

            birth: bdate

        },

        success: function (dataResult) {

            var dataResult = JSON.parse(dataResult);

            if (dataResult.statusCode == 200) {

                // use sweet alert2 to show message
                Swal.fire({

                    icon: 'success',

                    title: 'ثبت ',

                    confirmButtonText: "باشه"

                })

            } else if (dataResult.statusCode == 400) {


                Swal.fire({

                    icon: 'error',

                    title: "خطا در وارد کردن اطلاعات",

                    html: dataResult.msg,

                    confirmButtonText: "باشه"

                })
            } else if (dataResult.statusCode == 500) {

                Swal.fire({

                    icon: 'error',

                    title: 'خطایی در سمت سرور رخ داد!',

                    confirmButtonText: "باشه"

                })

            }

        }

    });
    var editbtn = document.createElement("BUTTON")
    editbtn.id="edit"
    
    editbtn.innerHTML="Edit"
    var deletebtn = document.createElement("BUTTON")
    deletebtn.innerHTML="Delete row"
    deletebtn.id="delete"

    deletebtn.onclick=function(){RemoveRow(this)}
    editbtn.onclick=function(){openwinedit(this)}
    
    if (document.getElementById('name').value!="" && document.getElementById('lastname').value!=""  && document.getElementById('stdnumber').value!=""&& document.getElementById('phonenumber').value!="" && document.getElementById('birth').value!="" && 
    document.getElementById('name').value!="*" && document.getElementById('lastname').value!="*" && document.getElementById('stdnumber').value!="*" && document.getElementById('phonenumber').value!="*" && document.getElementById('birth').value!="*"){
        var person = document.createElement('tr')
        var chekCell = document.createElement('td')
        chekCell.innerHTML="<input type='checkbox' class='checking' onclick='notcheckAll(this)'/>"
        var fnCell = document.createElement('td')
        var fnNode = document.createTextNode(fname)
        var lnCell = document.createElement('td')
        var lnNode = document.createTextNode(lname)
        var telCell = document.createElement('td')
        var stdCell = document.createElement('td')
        var stdNode = document.createTextNode(std)
        var tellNode = document.createTextNode(tel)
        var bdateCell = document.createElement('td')
        var bdateNode = document.createTextNode(bdate)
        var editCell = document.createElement('td')
        

        fnCell.appendChild(fnNode)
        lnCell.appendChild(lnNode)
        telCell.appendChild(tellNode)
        stdCell.appendChild(stdNode)
        bdateCell.appendChild(bdateNode)


        //fnCell.innerHTML = fname
        editCell.appendChild(editbtn)
        editCell.appendChild(deletebtn)

        person.appendChild(chekCell)

        person.appendChild(fnCell)
        person.appendChild(lnCell)
        person.appendChild(telCell)
        person.appendChild(stdCell)
        person.appendChild(bdateCell)
        
        person.appendChild(editCell)
        
        document.getElementById('table').appendChild(person)

        document.getElementById('name').value=""
        document.getElementById('lastname').value=""
        document.getElementById('phonenumber').value=""
        document.getElementById('birth').value=""
        document.getElementById('stdnumber').value=""
        closewin()
        
    }
    else{
        star()
    }

}
function star(){
    var column=document.getElementById('tr').getElementsByTagName('th')
    for(var i=0;i<column.length;i++){
        if(document.getElementsByClassName("input")[i].value==""){

        document.getElementsByClassName("input")[i].value="*"
        document.getElementsByClassName("input")[i].style.color="red"                        
        document.getElementsByClassName("input")[i].style.textAlign="left" 
        document.getElementsByClassName("input")[i].onclick=function(){clearstar(this)}
        }
    else{

    }
    }
    document.getElementById("cancel").onclick=function(){closewin()}
    document.getElementsByTagName("img")[0].onclick=function(){closewin()}

}

function clearstar(elem){
    elem.value=""
    elem.style=document.getElementsByTagName("style")[15]
}

function RemoveRow(r){
    if (r.parentNode.parentNode.parentNode=="[object HTMLTableSectionElement]"){
         r.parentNode.parentNode.parentNode.removeChild(r.parentNode.parentNode)

    }
    else{
    document.getElementById("table").removeChild(r.parentNode.parentNode)

    }
}
function openwinedit(elem){
            document.getElementById("addEmployeeModal").style.display="block"

            var column=document.getElementById('tr').getElementsByTagName('th')
            var edited=0
            var row=elem.parentNode.parentNode

            for(var i=0,j=1;i<column.length,j<6;i++,j++){
                document.getElementsByClassName("input")[i].value=row.childNodes[j].innerHTML
            }
            document.getElementById('okAdd').onclick=function edit(){
                        
            if (document.getElementById('name').value!=""&& document.getElementById('lastname').value!="" && document.getElementById('phonenumber').value!="" && 
            document.getElementById('stdnumber').value!="" && document.getElementById('birth').value!="" && document.getElementById('name').value!="*" && document.getElementById('lastname').value!="*" &&document.getElementById('stdnumber').value!="*" && document.getElementById('phonenumber').value!="*" && document.getElementById('birth').value!="*"){
                        for(var i=0,j=1;i<5,j<6;i++,j++){
                            row.childNodes[j].innerHTML=document.getElementsByTagName("input")[i].value
                            edited=1
                            document.getElementsByClassName("input")[i].value=""
                            document.getElementById("addEmployeeModal").style.display="none"

                        }

                    
                    }
            else{
                star()
                }
                
        }
        document.getElementsByTagName("img")[0].onclick=function(){closewin()}
        document.getElementById("cancel").onclick=function(){closewin()}
}

function checkAll(checkAll){
    var table=document.getElementById('table')
    if (checkAll.checked){
        
        if (table.childNodes=="[object HTMLTableSectionElement]"){
            document.getElementById("second").childNodes[0].childNodes[0].checked="checked"

        }
        else{

        
    for(var i=1;i<=table.childNodes.length;i++){
            table.childNodes[i].childNodes[0].childNodes[0].checked="checked"/*true or checked */
            if (document.getElementById("second")!=null){
            document.getElementById("second").childNodes[0].childNodes[0].checked="checked"
            }
}

    }
}
else{
    if (table.childNodes=="[object HTMLTableSectionElement]"){
        document.getElementById("second").childNodes[0].childNodes[0].checked=false

}
else{


for(var i=1;i<=table.childNodes.length;i++){

        table.childNodes[i].childNodes[0].childNodes[0].checked="" /* false or "" */
        if (document.getElementById("second")!=null){
                    document.getElementById("second").childNodes[0].childNodes[0].checked=false

}}

}

}

}   
function notcheckAll(check){
        var table=document.getElementById("table")
    if(check.checked==false){
            document.getElementById('checkbox').checked=false
    }
    else{   
            if (table.childNodes=="[object HTMLTableSectionElement]"){
                document.getElementById("checkbox").checked="checked"
        
            }
            else{
                      for(var i=1;i<document.getElementsByClassName("checking").length;i++){
                        if (document.getElementsByClassName("checking")[i].checked ){
                            if(i==document.getElementsByClassName("checking").length-1){
                            document.getElementById("checkbox").checked="checked"}
                        }   
                            else{
                                    break
                                }
                       
                            }
            }
}
}
function dltselect(){
    var table=document.getElementById("table")

    if((document.getElementById("second")!=null)&& (document.getElementById("second").childNodes[0].childNodes[0].checked)){
        document.getElementById("second").parentNode.removeChild(document.getElementById("second"))
        document.getElementById("checkbox").checked=""

    }
    for(var i=1;i<document.getElementsByClassName("checking").length;){
        if (document.getElementsByClassName("checking")[i].checked){
            
            table.removeChild(document.getElementsByClassName("checking")[i].parentNode.parentNode)

        }
        else{
            i++
        }
        
    }
    
}

function search() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchbox");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
         for (i = 1; i < tr.length; i++) {
            for (j = 1; j < tr[0].getElementsByTagName("th").length;j++){
                    td = tr[i].getElementsByTagName("td")[j];
                        if (td) {
                            txtValue = td.textContent || td.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                tr[i].style.display = "";
                                break
                            }
                            else {
                                tr[i].style.display = "none";
                            }
                        
                            
            }
    }
    }
    }