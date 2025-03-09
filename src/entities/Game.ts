import {Platform} from "@/entities/Platform.ts";
import {Genre} from "@/entities/Genre.ts";
import {Publisher} from "@/entities/Publisher.ts";

export interface Game {
    id: number;
    name: string;
    slug: string;
    genres:Genre[];
    publishers:Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform } [];
    metacritic: number;
    rating_top: number;
}