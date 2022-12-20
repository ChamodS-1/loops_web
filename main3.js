const displayData= document.getElementById('display-data');

let newData ={

fistname:'chamod',
lastname:'basnayake',
age:26

};

displayData.addEventListener('click',getData);

function getData(){

    const newList =document.querySelector('ul');
    newList.innerHTML='';

    for(const user in newData){


        console.log(user);
        console.log(newData[user]);
        const newDataPart =document.createElement('li');
        newDataPart.textContent=user.toUpperCase() +':'+' '+ newData[user];
         newList.append(newDataPart);



    }

}