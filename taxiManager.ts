import { Taxi } from './taxi';

export class TaxiManager {
    private taxis: Taxi[] = [];

    addTaxi(number: number) {
        if (this.taxis.some(taxi => taxi.number === number)) {
            throw new Error(`Taxi with number ${number} already exists.`);
        }
        this.taxis.push(new Taxi(number));
    }

    assignTrip() {
        const availableTaxi = this.taxis.find(taxi => taxi.isAvailable);
        if (!availableTaxi) {
            throw new Error('No taxis available.');
        }
        availableTaxi.assignTrip();
        return availableTaxi.number;
    }

    completeTrip(taxiNumber: number) {
        const taxi = this.taxis.find(taxi => taxi.number === taxiNumber);
        if (!taxi) {
            throw new Error(`Taxi with number ${taxiNumber} not found.`);
        }
        taxi.completeTrip();
    }

    listTaxis() {
        return this.taxis.map(taxi => ({
            number: taxi.number,
            isAvailable: taxi.isAvailable
        }));
    }

    getPostulatedTaxis() {
        return this.taxis.filter(taxi => taxi.isAvailable);
    }

    assignTripToTaxi(taxiNumber: number) {
        const taxi = this.taxis.find(taxi => taxi.number === taxiNumber && taxi.isAvailable);
        if (!taxi) {
            throw new Error(`Taxi with number ${taxiNumber} is not available or does not exist.`);
        }
        taxi.assignTrip();
        return taxi.number;
    }
}
