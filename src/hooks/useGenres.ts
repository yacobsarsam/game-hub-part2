import {useQuery} from "@tanstack/react-query";
import genres from "@/data/genres.ts";
import APIClient from "@/services/api-client.ts";
import ms from 'ms'
const ApiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id:number;
    name:string;
    image_background :string;
}
//const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: ApiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
    //initialData: {count:genres.length, results:genres}
    })

export default useGenres;
