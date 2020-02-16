function CardValidation() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var cardno = document.getElementById("card")
    if (!cardno.value.match(regex)) {
        cardno.focus();
        alert("Card number is invalid!");
    }
}
function ValidateSecurityCode() {
    var code = document.getElementById("code");
    var regex = /[0-9][0-9][0-9]/;
    if (!code.value.match(regex)) {
        code.focus();
        alert("Security code is invalid!")
    }
}
function ValidateExpiryMonth() {
    var month = document.getElementById("month").value;
    if (month == null) alert("Expiry Month is invalid!");
}
function ValidateExpiryYear() {
    var year = document.getElementById("year").value;
    if (year == null) alert("Expiry Year is invalid!");
}
function ValidateName() {
    var name = document.getElementById("name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.value.match(regex)) {
        name.focus();
        alert("Name is Invalid");
    }
}

function ValidateZipCode() {
    var zip = document.getElementById("zip");
    var regex = /[0-9]{6}/;
    if (!zip.value.match(regex)) {
        zip.focus();
        alert("Zip code is invalid!")
    }
}
function ValidateAddress() {
    var address = document.getElementById("address");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!address.value.match(regex)) {
        address.focus();
        alert("Address is invalid!");
    }
}
function ValidateCity() {
    var city = document.getElementById("city");
    var regex = /^[A-Za-z]+$/;
    if (!city.value.match(regex)) {
        city.focus();
        alert("City or town is invalid!");
    }
}
function ValidatePhoneNo() {
    var number = document.getElementById("phone");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!number.value.match(regex)) {
        number.focus();
        alert("Phone number is invalid!");
    }
}

function ValidateFax() {
    var fax = document.getElementById("fax");
    var regex = /^\+?[0-9]{6,}$/;
    if (!fax.value.match(regex)) {
        fax.focus();
        alert("Fax number is invalid!");
    }
}

function ValidateEmail() {
    var mail = document.getElementById("mail");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.value.match(regex)) {
        mail.focus();
        alert("Email is invalid!");
    }
}