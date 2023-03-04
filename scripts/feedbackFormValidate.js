//feedbackFormValidate.js
//Functions to perform data validation on data entered by
//the user into the feedback form, and to display appropriate
//error messages if problems with the data are discovered

function feedbackFormValidate()
{
    var contactFormObj = document.getElementById("contactform");
    var email = contactFormObj.email.value;
    var textInput = contactFormObj.text.value;
    var wordcount = textInput.split(" ").length;
    var everythingOK = true;

    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }
    
    if (everythingOK)
    {
        alert("Number of word " + wordcount + "\nAll the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}


function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}

