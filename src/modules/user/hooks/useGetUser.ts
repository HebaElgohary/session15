import { useApiQuery } from "@/src/hooks/useApiQuery"
import { getUserApi } from "../api/getUserApi"

export const useGetUser:(id:number)=>any=(id)=>{
    return useApiQuery({
        queryKey:['users', id],
        queryFn:() => getUserApi(id),
        options:{
            retry:true,
            retryDelay:1000
        }
    })
}