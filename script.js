createPage();

function createPage() {
    loadCells();

    const customizeButton = document.querySelector('button#customize');
    attachButtonListeners(customizeButton);
    
}

function loadCells(sideLength = 16, userSelected = false) {
    const containerDiv = document.querySelector('#cells-container');

    if (userSelected) {
        const cells = document.querySelectorAll('div.cell');
        for (const cell of cells) {
            cell.remove();
        }
    }

    for (let i = 0; i < sideLength; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        rowDiv.setAttribute('display', 'flex');
        rowDiv.setAttribute('align-items', 'stretch');
    
        for (let j = 0; j < sideLength; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.setAttribute('class', 'cell');
            cellDiv.style.backgroundColor = 'darkgray';
            cellDiv.style.height = '40px';
            cellDiv.style.width = '40px';
            cellDiv.style.border = '1px dotted gray';
                
            containerDiv.appendChild(cellDiv);
        }
        containerDiv.appendChild(rowDiv);
    }
    
    const cells = document.querySelectorAll('div.cell');
    for (const cell of cells) {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = '#2E2E2E'; // dark gray
        });
    }
}

function attachButtonListeners(button) {
    button.addEventListener('mouseover', () => {
        customizeButton.style.backgroundColor = 'rgb(211, 211, 186)';
    });

    button.addEventListener('mouseout', () => {
        customizeButton.style.backgroundColor = 'beige';
    });

    button.addEventListener('click', () => {
        const sideLength = prompt('Enter the number of cells (1-100) on each side.');
        if (sideLength < 0 || sideLength > 100 || isNaN(sideLength)) {
            return alert(`Please enter a valid value between 1-100. \nYou entered ${sideLength}`);
        }

        loadCells(sideLength, true);
    });
}