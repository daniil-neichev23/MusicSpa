import { Guid } from "guid-typescript";

export interface Recording {
    Id : string;
    AlbumId: string;
    GenreId: string;
    TrackNumber: string;
    Title: string;
    Length : string;
}