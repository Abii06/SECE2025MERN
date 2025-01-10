function submitform(submit,db,isFormValid){
    if(isFormValid)
    {
        console.log("Field validation Successful")
    }
    else{
        console.log("Form validation Failed")
        console.log("Form Submission Unsuccessful")
    }
}

function validations(){
    email="sece@sece.ac.in" 
    password="sece"
    if(email==="sece@sece.ac.in" && password){
        return true;
    }
    else{return false;}
    console.log("Form validation Successful")
}
submitform("Form Submitted Successfully",validations)