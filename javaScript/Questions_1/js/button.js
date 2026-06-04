const button = document.getElementById('btn');

button.addEventListener('click', 
() => {
    let x = Number(button.innerHTML);
    button.innerHTML = x+1;
});
