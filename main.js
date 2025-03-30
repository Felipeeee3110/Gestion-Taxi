import { TaxiManager } from './taxiManager.js';

const manager = new TaxiManager();

// Add taxis
manager.addTaxi(1);
manager.addTaxi(2);
manager.addTaxi(3);

function updatePostulatedTaxis() {
    const postulatedTaxisDiv = document.getElementById('postulatedTaxis');
    postulatedTaxisDiv.innerHTML = '';
    const postulatedTaxis = manager.getPostulatedTaxis();
    postulatedTaxis.forEach(taxi => {
        const taxiDiv = document.createElement('div');
        taxiDiv.textContent = `Taxi ${taxi.number}`;
        const assignButton = document.createElement('button');
        assignButton.textContent = 'Assign Trip';
        assignButton.onclick = () => {
            try {
                manager.assignTripToTaxi(taxi.number);
                alert(`Trip assigned to taxi number: ${taxi.number}`);
                updatePostulatedTaxis();
                updateAllTaxis();
            } catch (error) {
                alert(error.message);
            }
        };
        taxiDiv.appendChild(assignButton);
        postulatedTaxisDiv.appendChild(taxiDiv);
    });
}

function updateAllTaxis() {
    const allTaxisDiv = document.getElementById('allTaxis');
    allTaxisDiv.innerHTML = '';
    const allTaxis = manager.listTaxis();
    allTaxis.forEach(taxi => {
        const taxiDiv = document.createElement('div');
        taxiDiv.textContent = `Taxi ${taxi.number} - ${taxi.isAvailable ? 'Available' : 'Occupied'}`;
        allTaxisDiv.appendChild(taxiDiv);
    });
}

// Initial render
updatePostulatedTaxis();
updateAllTaxis();
