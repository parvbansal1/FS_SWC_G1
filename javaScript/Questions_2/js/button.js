const clockwiseIds = ['btn1', 'btn2', 'btn3', 'btn6', 'btn9', 'btn8', 'btn7', 'btn4'];
const centerButton = document.getElementById('btn5');


centerButton.addEventListener( 'click', () => {
    let n = clockwiseIds.length;
    const values = [];
    for (let i = 0; i < n; i++) {
        values.push(document.getElementById(clockwiseIds[i]).innerHTML);
    }
    // const values2 = clockwiseIds.map(item => document.getElementById(item).innerHTML);
    
    for (let i = 0; i < n; i++) {
        const target = (i + 1) % n;
        document.getElementById(clockwiseIds[target]).innerHTML = values[i];        
    }
});
