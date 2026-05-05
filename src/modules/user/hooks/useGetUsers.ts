'use client '
import  { useApiQuery } from "../../../hooks/useApiQuery"
import { getUsersApi } from "../api/getUsersApi";

export const useGetUsers=()=>{
    return useApiQuery({
        queryKey:['users'],
        queryFn:getUsersApi
        }
    )
    }
