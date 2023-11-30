const counter = document.querySelector('#counter');
const h1 = document.querySelector('h1');
const btnNode = document.querySelectorAll('.btn');
const btnHTML = document.getElementsByClassName('btn');
const newPBtn = document.querySelector('#newParagraph');
const newPContainer = document.querySelector('#p-container');

const handleClick = (event) => {
    if(event.target.id == 'random'){
        const randomNumber = Math.floor(Math.random() * 100);
        counter.innerText = randomNumber;
        console.log(randomNumber)
        return;
    }
    
    event.target.id == "increase" ? counter.innerText++ : counter.innerText-- 
}

h1.addEventListener('mouseover', ()=>{
    h1.style.backgroundColor == 'red' ? h1.style.backgroundColor = 'white' : h1.style.backgroundColor = 'red'
});

// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
btnNode.forEach(element => element.addEventListener('click', handleClick))

// https://www.w3schools.com/jsref/met_document_createelement.asp
newPBtn.addEventListener('click', ()=>{
    const newP = document.createElement('p');
    newP.innerText = 'New Paragraph';
    newPContainer.appendChild(newP);
})

const handleDelete = (event) => {
    console.log(event.target.firstChild)
    // event.target.removeChild();
}

// https://www.w3schools.com/jsref/dom_obj_event.asp

