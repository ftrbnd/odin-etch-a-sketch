const containerDiv = document.querySelector('#cells-container');

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');
    rowDiv.style.backgroundColor = 'darkgray';

    for (let j = 0; j < 16; j++) {
        const cellDiv = document.createElement('div');
        cellDiv.setAttribute('class', 'cell');
        cellDiv.style.height = '40px';
        cellDiv.style.width = '40px';
        cellDiv.style.border = '1px dotted gray';

        rowDiv.appendChild(cellDiv);
    }
    containerDiv.appendChild(rowDiv);
}

const cells = document.querySelectorAll('div.cell');
for (const cell of cells) {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#2E2E2E'; // dark gray
    });
}