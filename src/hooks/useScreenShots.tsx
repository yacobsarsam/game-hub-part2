import {useQuery} from "@tanstack/react-query";
import ApiClient from "@/services/api-client.ts";

interface Props {
    gameId:number
}
const UseScreenShots = ({gameId}:Props) => {
  const apiClient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll
  })
}
export default UseScreenShots;