import { Guid } from "guid-typescript";

export interface Musician {
    Id : string;
    LastName: string;
    FirstName: string;
    BirthDate: Date;
    BirthPlace: string;
}