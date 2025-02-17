import APIClient from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import platforms from "@/data/platforms.ts";

const ApiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id:number;
    name:string;
    slug:string;
}
const UsePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: ApiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms
    //initialData: {count:platforms.length, results:platforms}
});
export default UsePlatforms;
