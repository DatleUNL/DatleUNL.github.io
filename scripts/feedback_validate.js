function feedback_validate() {
    var contactFormObj = document.getElementById("feedback_form");
    var rating = contactFormObj.rating.value;
    var email = contactFormObj.email.value;
    var everythingOK = true;

    showRating(rating);

    if (!validateEmail(email)) {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }

    if (everythingOK) {
        if (contactFormObj.reply.checked)
            alert("Warning: The e-mail feature is currently not supported.");
        alert("All the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}

function validateEmail(address) {
    var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

function showRating(numStar) { 
    alert("You rated" + numStar + "stars");
    return;
}