
var full_Name = document.getElementById("fullname") ="Vanessa Mthimkulu";
var myBio = document.getElementById("bio").innerHTML ="I Studied a Bachelor of computing degree and I have worked as a SoftwareTest engineer for one year Before that I gained experience as a librarian, Customer service administrator and as a admin assistant as well. My comfortable demeanor gives me the ability to command taxing situations while encouraging a sensible, composed atmosphere. I am confident that my detail-oriented work habits will aid in the efficiency of your institution while my positive attitude will make me a seamless addition to your team. Aiming to be an integral part of a dynamic institution where my enthusiasm and hard work will lead to success. Being part of a progressive team where creative thinking and collaboration solves problems and contributes to the well-being of the institution"
var myaddress = document.getElementById("address").innerHTML ="9053 Grassbirst street, Emaphupheni, Benoni, 1519";

var school_1 = document.getElementById("school1").innerHTML ="Belgium Campus";
var school_2 = document.getElementById("school2").innerHTML ="Belgium Campus";
var school_3 = document.getElementById("school3").innerHTML ="Spartan High School";

var course_1 = document.getElementById("course1").innerHTML ="Bachelor of computing";
var course_2 = document.getElementById("course2").innerHTML ="NQF4 Bridging Course";
var course_3 = document.getElementById("course3").innerHTML ="Grade 11";

var date_1 = document.getElementById("date1").innerHTML ="Jan 2017 - Dec 2024";
var date_2 = document.getElementById("date2").innerHTML ="Jul 2016 - Dec 2016";
var date_3 = document.getElementById("date3").innerHTML ="Jan 2009 - Dec 2009";

var company_1 = document.getElementById("company1").innerHTML ="CSG";
var company_2 = document.getElementById("company2").innerHTML ="Belgium campus";
var company_3 = document.getElementById("company3").innerHTML ="Imperial Cargo Solutions";
var company_4 = document.getElementById("company4").innerHTML ="Makoya Supply Chains";

var position_1 = document.getElementById("position1").innerHTML ="Test Engineer Graduate";
var position_2 = document.getElementById("position2").innerHTML ="Library Assistant";
var position_3 = document.getElementById("position3").innerHTML ="Customer Service Administrator";
var position_4 = document.getElementById("position4").innerHTML ="Admin Assistant";

var workDate1 = document.getElementById("workDate1").innerHTML ="Jul 2022 - Jun 2023";
var workDate2 = document.getElementById("workDate2").innerHTML ="Feb 2017 - Feb 2019";
var workDate3 = document.getElementById("workDate3").innerHTML ="May 2015 - Dec 2015";
var workDate4 = document.getElementById("workDate4").innerHTML ="Nov 2014 - Apr 2015";


function formValidation(event){

    event.preventDefault()

    var form_Name = document.getElementById("formName");
    var form_Surname = document.getElementById("formSurname");
    var form_Email = document.getElementById("formEmail");
    var form_Message = document.getElementById("formMessage");

    let isNameValid = form_Name.value.trim() !== '';
    console.log({ isMessageValid });

    let isSurnameValid = form_Surname.value.trim() !== '';
    console.log({ isMessageValid });

    const isEmailValid = form_Email.value.trim() !== '' && form_Email.validity.valid
    console.log(isEmailValid);

    let isMessageValid = form_Message.value.trim() !== '';
    console.log({ isMessageValid });

    const isFormValid = isNameValid && isSurnameValid && isEmailValid && isMessageValid

    if(isFormValid) {
        const dataForm = new dataForm(event.target)
        console.log(dataForm);
        fetch('https://formspree.io/f/xbjnqzlr', 
            {
                method: 'POST',
                body: dataForm,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
        .then( response => response.json())
        .then( data => {
            console.log(data);
            if(data.ok) {
                alert('Email successfully sent')
            }
        })

        
    } else {
        if(isNameValid !== true) {
            
            const nameSpan = document.getElementById('name-span')
            nameSpan.classList.remove('hidden')
            console.log(nameSpan.classList);
        }
        if(isSurnameValid !== true) {
            
            const surnameSpan = document.getElementById('surname-span')
            surnameSpan.classList.remove('hidden')
            console.log(surnameSpan.classList);
        }
        if(isEmailValid !== true) {
            
            const emailSpan = document.getElementById('email-span')
            emailSpan.classList.remove('hidden')
            console.log(emailSpan.classList);
        }
        if(isMessageValid !== true) {
            
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
            console.log(messageSpan.classList);
        }
    }
}   








