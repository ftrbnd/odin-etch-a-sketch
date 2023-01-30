const container = document.querySelector('.container');
const customizeButton = document.querySelector('button#customize');

createPage();

function createPage() {
    loadCells();

    attachButtonListeners(customizeButton);
}

function loadCells(sideLength = 16, userSelected = true) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${container.clientWidth / sideLength}px`;
            cell.style.height = `${container.clientWidth / sideLength}px`;

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'rgb(54, 54, 54)';
            });

            container.appendChild(cell);
        }
    }

}

function attachButtonListeners(button) {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgb(187, 187, 166)';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'beige';
    });

    button.addEventListener('click', () => {
        const sideLength = prompt('Enter the number of cells (1-100) on each side.');
        if (sideLength < 0 || sideLength > 100 || isNaN(sideLength)) {
            return alert(`Please enter a valid value between 1-100. \nYou entered ${sideLength}`);
        }

        loadCells(sideLength, true);
    });
}