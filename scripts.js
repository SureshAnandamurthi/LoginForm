const emailValidation = () => {
    let email = document.getElementById("exampleInputEmail1").value;
    email = email.toLowerCase();
    if (!(email.endsWith(".com") && email.includes('@'))){
        alert("Please enter the valid email ID");
    }
};

const passwordValidation = (val) => {
    // const password = document.getElementById("exampleInputPassword1").value;
    const passChecks = document.getElementsByClassName('passval');
    const eightChars = new RegExp("(?=.{8,})");
    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const numberCheck = new RegExp("(?=.*[0-9])");
    const specialChar = new RegExp("(?=.*[!@#\$%\^&\*`~?|])");
    
    if (eightChars.test(val)){
        passChecks[0].style.color = "green";

    } else{
        passChecks[0].style.color = "grey";
    }
    if (lowerCase.test(val)){
        passChecks[1].style.color = "green";

    } else{
        passChecks[1].style.color = "grey";
    }
    if (upperCase.test(val)){
        passChecks[2].style.color = "green";

    } else{
        passChecks[2].style.color = "grey";
    }
    if (numberCheck.test(val)){
        passChecks[3].style.color = "green";

    } else{
        passChecks[3].style.color = "grey";
    }
    if (specialChar.test(val)){
        passChecks[4].style.color = "green";
    } else{
        passChecks[4].style.color = "grey";
    }

}