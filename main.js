const buttonClick= document.getElementById('Calculate-sum');

buttonClick.addEventListener('click',getValue);

function getValue(){

    const numberValue= document.querySelector('input');
    const finalValue=numberValue.value;
    const displayValue= document.getElementById('final-cal');
    let totalValue=0;

    if(numberValue.value===''){

        displayValue.textContent='Please Enter Number';
        displayValue.style.display='block';    
    }
    else{

        for(let i=0;i<=finalValue;i++){

            totalValue =totalValue+i;    
        }
        displayValue.textContent=totalValue;
        displayValue.style.display='block';
     
    }
    
}