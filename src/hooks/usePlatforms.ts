import useData from "@/hooks/useData.ts";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}
const UsePlatforms = () => useData<Platform>('/platforms/lists/parents');
export default UsePlatforms;
