const highLighted= document.getElementById('highlight-links');

highLighted.addEventListener('click',checkHighlight);

function checkHighlight(){

    const allHighlited =document.querySelectorAll('a');

    for( const key of allHighlited ){

        key.classList.add('highlighted-links');

    }

}