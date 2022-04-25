import { Guid } from "guid-typescript";

export interface GroupMember {
    Id : string;
    MusicianId: string;
    ArtistId: string;
    Joined: boolean;
    Left: boolean;
}