//Array of data - Pet information - Object JS
const petInfo = [
    {
        name:"Max", 
        Type: "Dog - Beagle", 
        age: 4, 
        status: "Available", 
        bio: "Loves belly rubs!"
    },
    {
        name:"Buddy", 
        Type: "Dog - Golden Retriever", 
        age: 3, 
        status: "Available", 
        bio: "Likes to chase his ball"
    },
    {
        name:"Luna", 
        Type: "Cat - Tabby", 
        age: 2, 
        status: "Available", 
        bio: "Luna likes to climb and play with her cat toys"
    },
    {
        name:"Whiskers", 
        Type: "Cat - Siamese", 
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
                <p>Bio: ${tempPet.bio}</p>
                <button class="adoptBtn">Adopt Me 🐾</button>
                <br><br>
            </div>
        `
    }

    findMyPetList.innerHTML = tempHtml;
}

// NOTE: Print all the pet info using our petInfo array - As an arguement
RenderPetInformation(petInfo);