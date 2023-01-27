const containerDiv = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');
    for (let j = 0; j < 16; j++) {
        const cellDiv = document.createElement('div');
        cellDiv.setAttribute('class', 'cell');
        cellDiv.style.height = '40px';
        cellDiv.style.width = '40px';
        cellDiv.style.margin = '1px';
        cellDiv.style.border = '1px dotted black';
        rowDiv.appendChild(cellDiv);
    }
    containerDiv.appendChild(rowDiv);
}