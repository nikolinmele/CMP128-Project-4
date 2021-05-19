//Name: Nikolin Mele
//Date Created: 05/14/2021
//Date modified: 05/18/2021


document.getElementById("register-btn").addEventListener("click", formValidation);

document.getElementById("errorFirstName").style.display = "none";
document.getElementById("errorFirstName2").style.display = "none";
document.getElementById("errorLastName").style.display = "none";
document.getElementById("errorLastName2").style.display = "none";
document.getElementById("errorEmail").style.display = "none";
document.getElementById("errorPhone").style.display = "none";
document.getElementById("errorOrganization").style.display = "none";
document.getElementById("errorCountry").style.display = "none";
document.getElementById("errorRegistrationType").style.display = "none";

function formValidation() {
    //First Name
    let firstname = document.getElementById("firstname").value;
    firstname = firstname.trim();
    if (firstname.length <= 1) {
        document.getElementById("errorFirstName").style.display = "block";  
    }else{
        document.getElementById("errorFirstName").style.display = "none";  
    }
    if(!/^[a-zA-Z]*$/g.test(firstname)){
        document.getElementById("errorFirstName2").style.display = "block";
        return false;
    }else{
        document.getElementById("errorFirstName2").style.display = "none"; 
    }
    
    //Last Name
    let lastname = document.getElementById("lastname").value;
    lastname = lastname.trim();
    if (lastname.length <= 1) {
        document.getElementById("errorLastName").style.display = "block"; 
    }else{
        document.getElementById("errorLastName").style.display = "none";  
    }
    if(!/^[a-zA-Z]*$/g.test(lastname)){
        document.getElementById("errorLastName2").style.display = "block";
        return false;
    }else{
        document.getElementById("errorLastName2").style.display = "none"; 
    }

    //E-mail
    let email = document.getElementById("e-mail").value;
    email = email.trim();
    if (email.length <= 1 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/g.test(email)) {
        document.getElementById("errorEmail").style.display = "block";
    }else{
        document.getElementById("errorEmail").style.display = "none";  
    }

    //Phone Number
    let phoneNumber = document.getElementById("phone-number").value;
    phoneNumber = phoneNumber.trim();
    if (phoneNumber.length <= 1 || !/^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/g.test(phoneNumber)) {
        document.getElementById("errorPhone").style.display = "block";
        
    }else{
        document.getElementById("errorPhone").style.display = "none";  
    }
    
    //Organization
    let organization = document.getElementById("organization").value;
    organization = organization.trim();
    if (organization.length <= 1) {
        document.getElementById("errorOrganization").style.display = "block";
        
    }else{
        document.getElementById("errorOrganization").style.display = "none";  
    }

    //Country
    let country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("errorCountry").style.display = "block";
    }else{
        document.getElementById("errorCountry").style.display = "none";
    }

    //Registration Type
    let author = document.getElementById("author");
    let participant = document.getElementById("participant");
    let student = document.getElementById("student");
    if(author.checked || participant.checked || student.checked){
        document.getElementById("errorRegistrationType").style.display = "none";
    }else{
        document.getElementById("errorRegistrationType").style.display = "block";
    }

    //Total
    let total = document.getElementById("total").innerText;
    if( total === "0"){
        return false;
    }

    console.log(firstname, lastname);
    console.log(email);
    console.log(phoneNumber);
    console.log(organization);
    console.log(country);
    console.log("$", total);
}


document.getElementById("registration-type").addEventListener("click", formRadio);

function formRadio(){
    
    let author = document.getElementById("author");
    let participant = document.getElementById("participant");
    let student = document.getElementById("student");
    if(author.checked)
    {
        document.getElementById('total').innerText = author.value;      
    }
    
    else if(participant.checked)
    {
        document.getElementById("total").innerText = participant.value;
       
    }
    else if(student.checked)
    {
        document.getElementById("total").innerText = student.value;
    
    }

    document.getElementById("apply-btn").addEventListener("click", formDisc);
    function formDisc(){
        let discount = document.getElementById("disc-text").value;
        if(discount === "LehmanCollege" & author.checked){
            document.getElementById("total").innerText = author.value/2;
        }else if(discount === "LehmanCollege" & participant.checked){
            document.getElementById("total").innerText = participant.value/2;
        }else if(discount === "LehmanCollege" & student.checked){
            document.getElementById("total").innerText = student.value/2;
        }
    }
}