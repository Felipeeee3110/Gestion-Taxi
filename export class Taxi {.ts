export class Taxi {
    constructor(public number: number, public isAvailable: boolean = true) {}

    assignTrip() {
        if (!this.isAvailable) {
            throw new Error(`Taxi ${this.number} is already occupied.`);
        }
        this.isAvailable = false;
    }

    completeTrip() {
        this.isAvailable = true;
    }
}
