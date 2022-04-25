import { Guid } from "guid-typescript";
import { Artist } from "./artist";
import { Label } from "./label";

export interface Album {
    Id : string;
    Title: string;
    Year: string;
    ArtistId: string;
    LabelId: string;
}