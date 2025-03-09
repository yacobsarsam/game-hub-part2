import {useQuery} from "@tanstack/react-query";
import APIClient from "@/services/api-client.ts";

import {Game} from "@/entities/Game.ts";

const ApiClient = new APIClient<Game>('/games');

const useGame = (slug:string) => useQuery({
    queryKey:['game',slug],
    queryFn:()=>ApiClient.get(slug)
})
export  default useGame;