export class TimeZone {
    constructor(newId: number, newCity: string, newOffset: number) {
        this.id = newId;
        this.city = newCity;
        this.offset = newOffset;
    }
    static countId = 0;

    id: number;
    city: string;
    offset: number;
}