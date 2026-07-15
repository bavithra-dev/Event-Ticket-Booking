let form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let eventName = document.getElementById("event").value;
    let tickets = document.getElementById("tickets").value;

    if(name === "" || email === "" || eventName === "" || tickets === ""){
        alert("Please fill all fields");
        return;
    }

if (!/^[A-Za-z ]+$/.test(name)) {
    alert("Enter a valid name");
    return;
}
  if(!email.includes("@") || !email.includes(".")){
    alert("An email must contain both '@' and '.'");
    return;
}

    if(tickets < 1){
    alert("Enter valid ticket count");
    return;
}

    document.getElementById("message").innerText =
    "Booking Successful!";

    form.reset();
});

function bookTicket(btn){
    btn.innerHTML = "Booked";
    btn.style.backgroundColor = "green";
}

function selectEvent(eventName){

    document.getElementById("event").value = eventName;

    location.href = "#booking";
}

function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all fields");
        return false;
    }

    alert("Booking Successful");
    return true;
}



