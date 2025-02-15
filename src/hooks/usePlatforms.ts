import  {FetchResponse} from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import ApiClient from "@/services/api-client.ts";
import platforms from "@/data/platforms.ts";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}
const UsePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>  ApiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res=>res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
     initialData: {count:platforms.length, results:platforms}
});
export default UsePlatforms;
