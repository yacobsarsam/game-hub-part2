import {GameQuery} from "@/App.tsx";
import {useQuery} from "@tanstack/react-query";
import ApiClient from "@/services/api-client.ts";
import {FetchResponse} from "@/services/api-client.ts";
import {Platform} from "@/hooks/usePlatforms.ts";


export interface Game {
    id:number;
    name:string;
    background_image:string;
    parent_platforms: {platform:Platform} [];
    metacritic: number;
    rating_top:number;
}

export const useGames = (gameQuery:GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => ApiClient.get<FetchResponse<Game>>('/games',{
            params:{
                genres:gameQuery.genre?.id,
                parent_platforms:gameQuery.platform?.id,
                ordering:gameQuery.sortOrder,
                search:gameQuery.searchText,
            },
        }).then(res=>res.data),
    });
