function submitting(){

    let fname = document.getElementById("First_Name").value;
    let lname = document.getElementById("Last_Name").value;
    let day = document.getElementById("Birthday_day").value;
    let month = document.getElementById("Birthday_month").value;
    let year = document.getElementById("Birthday_year").value;
    let email = document.getElementById("Email_id").value;
    let cell = document.getElementById("mobile_no").value;

    let gender = document.getElementsByName("Gender");
    let Gender;
    if(gender[0].checked){
        Gender = "Male";
    }else if(gender[1].checked){
        Gender = "Female";
    }

    let address = document.getElementById("Address").value;
    let city = document.getElementById("City").value;
    let pin = document.getElementById("Pin_code").value;
    let state = document.getElementById("State").value;
    let cntry = document.getElementById("country").value;
    let hob = document.getElementById("hobbies").value;

    alert("First Name : "+fname +"\nLAST NAME : "+lname+"\nDATE OF BIRTH : "+day + " "+month+" "+year+"\nEMAIL ID : "+email+"\nMOBILE NUMBER : "+cell+"\nGENDER : "+Gender+"\nADDRESS : "+address+"\nCITY : "+city+"\nPIN CODE : "+pin+"\nSTATE : "+state+"\nCOUNTRY : "+cntry+"\nHOBBIES : "+hob);
   
}