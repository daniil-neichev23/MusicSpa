import { Guid } from "guid-typescript";

export interface TrackReview {
    Id : string;
    ReviewerId: string;
    RecordingId: string;
    Ranking: string;
    Comment: string;
}