// homepage

function recommendPlant() {

    let sunlight = document.getElementById("sunlight").value;
    let care = document.getElementById("care").value;
    let pet = document.getElementById("pet").value;

    let plant = "";

    if (sunlight == "Bright" && care == "Easy") {
        plant = "Snake Plant";
    }
    else if (sunlight == "Medium") {
        plant = "Pothos";
    }
    else if (sunlight == "Low") {
        plant = "Peace Lily";
    }

    if (pet == "Yes") {
        plant = "Spider Plant";
    }

    document.getElementById("result").innerHTML = "Recommended Plant: " + plant;
}

// contactuspage
function sendMessage() {

    let message = document.getElementById("chatMessage").value;

    if (message == "") {
        document.getElementById("chatResponse").innerHTML = "Please type a message.";
    }
    else {
        document.getElementById("chatResponse").innerHTML = "Plant Specialist: Thank you! We will help you with your plant care.";
    }

}

function submitForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        document.getElementById("formResult").innerHTML = "Please fill up all fields.";
    }
    else {
        document.getElementById("formResult").innerHTML = "Your message has been submitted successfully.";
    }

}

// Productpage
function addToCart() {

    let pot = document.getElementById("pot").checked;
    let stand = document.getElementById("stand").checked;

    let message = "Plant Added To Cart";

    if (pot) {
        message += " + Plant Pot";
    }

    if (stand) {
        message += " + Plant Stand";
    }

    document.getElementById("cartResult").innerHTML = message;

}



function shareTips() {

    let tips = document.getElementById("tips").value;

    if (tips == "") {

        document.getElementById("tipsResult").innerHTML = "Please write your experience.";

    }

    else {

        document.getElementById("tipsResult").innerHTML = "Thank you for sharing your plant care experience.";

    }

}

