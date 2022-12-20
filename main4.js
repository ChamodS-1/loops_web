const displayInformation= document.getElementById('display-Information');

displayInformation.addEventListener('click',getNewData);

function getNewData(){
    
const firstName= document.getElementById('first-name');
const lastName= document.getElementById('last-name');
const eamilAddress= document.getElementById('email');
const ageNumber= document.getElementById('number-age');

const firstNameValue=firstName.value;
const lastNameValue=lastName.value;
const eamilAddressValue=eamilAddress.value;
const ageNumberValue=ageNumber.value;

let informationSet ={

    fistname: firstNameValue,
    lastname: lastNameValue,
    email: eamilAddressValue,
    age: ageNumberValue
    
    };

    const newListInformation =document.getElementById('informationData');
    newListInformation.innerHTML='';

    for(const userNew in informationSet){

        console.log(firstNameValue);
        console.log(userNew);
        console.log(informationSet[userNew]);
        const newDataPart =document.createElement('li');
        newDataPart.textContent=userNew.toUpperCase() +':'+' '+ informationSet[userNew];
        newListInformation.append(newDataPart);

    }

}