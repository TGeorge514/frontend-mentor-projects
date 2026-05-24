/**console variables */
const pageOneForm = document.querySelector(".pageOneForm");
const pageOneInput = document.querySelector(".pageOneForm .form-control");
const changeColorBtn = document.querySelector(".submit-form");
const submitPageOneBtn = document.querySelector("#submit-form-pageOne");

/**change the color on hover */
changeColorBtn.addEventListener("mouseover", () => {
    changeColorBtn.classList.add("main-red");
});

/**remove the color on mouseout */
changeColorBtn.addEventListener("mouseout", () => {
    changeColorBtn.classList.remove("main-red"); 
});

/*validate if form is empty*/
const regExDotCom = new RegExp("\.com$|\.ca$");     //email must end with .com OR .ca
const regExNumLetters = /[a-z 0-9]i/;
if(pageOneForm){        //because the form only exists on index.html
    pageOneForm.addEventListener("submit", (event) => {
        if(pageOneInput.value ==="" || (!regExDotCom.test(pageOneInput.value) && !regExNumLetters.test(pageOneInput.value))){
            event.preventDefault();
            document.querySelector("#errorPageOne").innerText = "Please enter a valid email address. Must end with .com or .ca";
            pageOneInput.classList.add("error-input");
        }
    });
}

/*remove error message on input*/
if(pageOneInput){       //because the form only exists on index.html
    pageOneInput.addEventListener("input", () => {
        document.querySelector("#errorPageOne").innerText = "";
        pageOneInput.classList.remove("error-input");
    });
}

/*get the user email from URL and display it on success page*/
const userEmailInput = document.querySelector(".user-email");

//PRACTICE SO WE ONLY ACCEPT EMAILS WITH HOTMAIL DOMAIN USING REGEX

if(userEmailInput){
    const userEmailURL = new URLSearchParams(window.location.search);       //read the query string from the URL
    const userEmailForm = userEmailURL.get("user-email");
    
    if(userEmailForm){
        userEmailInput.textContent = userEmailForm;
        console.log(userEmailForm);
    }
}