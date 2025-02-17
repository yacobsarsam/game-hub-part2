import {useQuery} from "@tanstack/react-query";
import genres from "@/data/genres.ts";
import APIClient from "@/services/api-client.ts";

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
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres
    //initialData: {count:genres.length, results:genres}
    })

export default useGenres;
