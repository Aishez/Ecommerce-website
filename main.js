var a;

function show_info() {
    document.getElementById('show-info').style.display = 'block';
    document.getElementById('show-img').style.display = 'none';
    return a = 0;
}

var b;

function show_img() {
    document.getElementById('show-img').style.display = 'block';
    document.getElementById('show-info').style.display = 'none';
    return b = 0;
}

var c;

function buynow() {
    document.getElementById('buynow').style.display = 'block';
    document.getElementById('infopage').style.display = 'none';
    return c = 0;
}

var d;

function previous() {
    document.getElementById('buynow').style.display = 'none';
    document.getElementById('infopage').style.display = 'block';
    return c = 0;
}


function validation() {
    var Fname = document.getElementById('Input1').value;
    var Lname = document.getElementById('InputX1').value;
    var email = document.getElementById('Input2').value;
    var number = document.getElementById('Input3').value;
    var password = document.getElementById('Input4').value;
    var cpassword = document.getElementById('Input5').value;

    // variable to give permission

    var Fnamecheck = /^[A-Za-z ]{2,}$/; // [ all valid characters ]{min_no_of_valid_ch , max_no_of_valid_ch}
    var Lnamecheck = /^[A-Za-z ]{2,}$/; // [ all valid characters ]{min_no_of_valid_ch , max_no_of_valid_ch}
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789]{1}[0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    // FOR CHECKING THE ERROR

    if (Fnamecheck.test(Fname)) {
        document.getElementById('error-Fname').innerHTML = "";
    } else {
        document.getElementById('error-Fname').innerHTML = "Use only alphabet";
        return false; // stops the form to get submitted
    }

    if (Lnamecheck.test(Lname)) {
        document.getElementById('error-Lname').innerHTML = "";
    } else {
        document.getElementById('error-Lname').innerHTML = "Use only alphabet";
        return false; // stops the form to get submitted
    }


    if (emailcheck.test(email)) {
        document.getElementById('error-email').innerHTML = "";
    } else {
        document.getElementById('error-email').innerHTML = "incorrect format";
        return false;
    }


    if (numbercheck.test(number)) {
        document.getElementById('error-number').innerHTML = "";
    } else {
        document.getElementById('error-number').innerHTML = "invalid number";
        return false;
    }



    if (passwordcheck.test(password)) {
        document.getElementById('error-password').innerHTML = "";
    } else {
        document.getElementById('error-password').innerHTML = "invalid password format minimum 8 character maximum 16 character";
        return false;
    }


    if (cpassword.match(password)) {
        document.getElementById('error-c-password').innerHTML = "";
    } else {
        document.getElementById('error-c-password').innerHTML = "password does not match";
        return false;
    }
}


function loginvalidation() 
{
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;


    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;


    if(emailcheck.test(email))
        document.getElementById('error-email1').innerHTML="";

    else
    {
        document.getElementById('error-email1').innerHTML="Enter valid email";
        return false;
    }

    if(passwordcheck.test(password))
        document.getElementById('error-password1').innerHTML="";

    else
    {
        document.getElementById('error-password1').innerHTML="Enter valid password";
        return false;
    }


}