import {useQuery} from "@tanstack/react-query";
import genres from "@/data/genres.ts";
import APIClient from "@/services/api-client.ts";
import ms from 'ms'
import Genre from "@/entities/Genre.ts";

const ApiClient = new APIClient<Genre>('/genres');

//const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: ApiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
    //initialData: {count:genres.length, results:genres}
    })

export default useGenres;
