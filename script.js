let counter = 0;

const handleClick = () => {
    counter++;
    console.log(counter)
}

document.querySelector('h1').addEventListener('click', handleClick)