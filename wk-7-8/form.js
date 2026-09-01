// Use these ticket Arrays (JSON) - Use these for our other algo's later
let ticketNames = [];
let ticketDetails = [];
 
function renderTickets() {
    let list = document.getElementById("ticketListDisplay");
    let html = "";
    for (let i = 0; i < ticketNames.length; i++) {
        html += `<li><strong>Ticket ${i + 1}: ${ticketNames[i]}</strong><br>${ticketDetails[i]} <button>X</button></li>`;
    }
    list.innerHTML = html === "" ?
        "<li>No adoption tickets...</li>" : html;

    /*Something to consider > Add a button to:
        Approve: Ticket resolved
        Cancel: Ticket delete
        Follow Up: Response 
        Do something with cool X button that doesn't work right now   
    */
}
renderTickets();
 
function insertTicketAt(index, name, details) {
    ticketNames[ticketNames.length] = undefined;
    ticketDetails[ticketDetails.length] = undefined;
 
    for (let i = ticketNames.length - 1; i > index; i--) {
        ticketNames[i] = ticketNames[i - 1];
        ticketDetails[i] = ticketDetails[i - 1];
    }
 
    ticketNames[index] = name;
    ticketDetails[index] = details;
}
 
function submitApplication() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let petSelect = document.getElementById("pet");
    let message = document.getElementById("message").value.trim();
 
    let petLabel = petSelect.value === "" ?
        "No pet selected" : petSelect.selectedOptions[0].text;
 
    let details = `Email: ${email} | Phone: ${phone === "" ? "Not provided" : phone} | Pet: ${petLabel} | Message: ${message}`;
 
    insertTicketAt(ticketNames.length, name, details);
    renderTickets();
 
    document.getElementById("adoptionForm").reset();
    
    //Don't refresh the page > Block the POST of form data
    return false;
}


//Search Algo's
//One way we can do a search
function sequentialSearchTicket(name) {
    for (let i = 0; i < ticketNames.length; i++) {
        if (ticketNames[i] === name) {
            return i; //Found index
        }
    }
    return -1; //Negative 1 becuase we didn't find what we are looking for
}

function searchTicket(){
    let name = document.getElementById("ticketSearchInput").value.trim();
    let index = sequentialSearchTicket(name);

    if(index === -1){
        document.getElementById("ticketResult").textContent =
            `No ticket found for ${name}`;
    }
    else {
        document.getElementById("ticketResult").textContent =
            `Ticket ${index + 1} — ${ticketNames[index]}: ${ticketDetails[index]}`;
    }

}

//Delete Algo
function deleteTicketAt(index) {
    for (let i = index; i < ticketNames.length - 1; i++) {
        ticketNames[i] = ticketNames[i + 1];
        ticketDetails[i] = ticketDetails[i + 1];
    }
    ticketNames.length = ticketNames.length - 1;
    ticketDetails.length = ticketDetails.length - 1;
}

//TODO: We need to add a way to make tickets SOLVED
// follow up chat, email, resolved 
function cancelTicket() {
    let name = document.getElementById("ticketSearchInput").value.trim();
    let index = sequentialSearchTicket(name);
 
    if (index === -1) {
        document.getElementById("ticketResult").textContent =
            `Can't cancel - no ticket found for "${name}".`;
        return;
    }
 
    deleteTicketAt(index);
    renderTickets();
    document.getElementById("ticketResult").textContent =
        `Cancelled the ticket for "${name}".`;
}

