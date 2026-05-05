import  { useApiQuery } from "../../../hooks/useApiQuery"
import { getUsersApi } from "../api/getUsersApi";

export const useGetUsers:()=>Promise<any>=async()=>{
    return useApiQuery({
        queryKey:['users'],
        queryFn:getUsersApi
        }
    )
    }
