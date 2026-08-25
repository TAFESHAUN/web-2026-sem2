// @ts-check
//Array of data - Pet information - Object JS
const petInfo = [
    {
        name:"Max", 
        Type: "Dog",
        Breed: "Beagle",
        age: 4, 
        status: "Available", 
        bio: "Loves belly rubs!"
    },
    {
        name:"Buddy", 
        Type: "Dog", 
        Breed: "Golden Retriever",
        age: 3, 
        status: "Available", 
        bio: "Likes to chase his ball"
    },
    {
        name:"Luna", 
        Type: "Cat",
        Breed: "Tabby", 
        age: 2, 
        status: "Available", 
        bio: "Luna likes to climb and play with her cat toys"
    },
    {
        name:"Whiskers", 
        Type: "Cat", 
        Breed: "Siamese",
        age: 1, 
        status: "Pending", 
        bio: "His name is Whiskers but we don't actually call him that!"
    }
];

function RenderPetInformation(petInfoArray) {
    let findMyPetList = document.getElementById("petList");
    let tempHtml = "";

    for(let i = 0; i < petInfoArray.length; i++){
        let tempPet = petInfoArray[i];
        tempHtml += `
            <div class="petCard">
                <h2>${tempPet.name}</h2>
                <p>Is a ${tempPet.Type} and is ${tempPet.age} years old!</p>
                <p>Breed: ${tempPet.Breed}</p>
                <p>Bio: ${tempPet.bio}</p>
                <button class="adoptBtn" name="${tempPet.name}">Adopt Me 🐾</button>
                <br><br>
            </div>
        `
    }

    findMyPetList.innerHTML = tempHtml;
}

// NOTE: Print all the pet info using our petInfo array - As an arguement
RenderPetInformation(petInfo);

document.getElementById("petList").addEventListener("click", 
    function(event) {
        if(event.target.classList.contains("adoptBtn")) {
            let petName = event.target.getAttribute("name");
            /*alert("Thank you for your interest in adopting: " + petName + 
                " Head to our adoption page now to find out more "
            );*/
            let msg = document.getElementById("message");
            msg.innerHTML = `<p>Thank you for your interest in adopting: ${petName}. Head to our adoption page now to find out more</p>`
        }
});

function filterPets(choice) {
    if(choice === "All"){
        RenderPetInformation(petInfo);
        return;
    }
    let filterPetInfo = petInfo.filter(function (petInfo){
        return petInfo.Type === choice;
    });

    RenderPetInformation(filterPetInfo);
}