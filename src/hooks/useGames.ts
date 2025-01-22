import useData from "@/hooks/useData.ts";
import {Platform} from "@/hooks/usePlatforms.ts";
import {GameQuery} from "@/App.tsx";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id:number;
    name:string;
    background_image:string;
    parent_platforms: {platform:Platform} [];
    metacritic: number;
    rating_top:number;
}

export const useGames = (
    gameQuery:GameQuery
    ) =>
    useData<Game>('/games',{
        params:{
            genres:gameQuery.genre?.id,
            platforms:gameQuery.platform?.id,
            ordering:gameQuery.sortOrder,
            search:gameQuery.searchText,
        }},
        [gameQuery]);