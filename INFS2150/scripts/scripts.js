﻿function checkReqFields() {
    var name = document.getElementById("nameinput").value;
    var email = document.getElementById("emailinput").value;
    var phone = document.getElementById("phoneinput").value;
    var athleteClass = document.getElementById("classinput").value;
    var experience = document.getElementById("experienceinput").value;
    
    if (name == null || name == "") {
        alert("Name required");
        return false;
    }
    
    if (email == null || email == "") {
        alert("Email required");
        return false;
    }
    
    if (phone == null || phone == "") {
        alert("Phone required");
        return false;
    }
    
    if (athleteClass == null || athleteClass == "") {
        alert("Class required");
        return false;
    }
    
    if (experience == null || experience == "") {
        alert("Experience required");
        return false;
    }
      
    alert("Thanks for requesting a training session! We hope to see you on the field!");
    document.forms("contactform").reset();
    
}

