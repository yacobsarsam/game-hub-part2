import ApiClient from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import genres from "@/data/genres.ts";
import {FetchResponse} from "@/services/api-client.ts";

export interface Genre {
    id:number;
    name:string;
    image_background :string;
}
//const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>  ApiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: {count:genres.length, results:genres}
    })

export default useGenres;
