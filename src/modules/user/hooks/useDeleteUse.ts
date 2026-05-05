import { useApiMutation } from "@/src/hooks/useApiMutation";
import { deletUserApi } from "../api/deleteUserApi";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteUser=(id:number)=>{
    const queryClient = useQueryClient();
    return useApiMutation({
        mutationFn:()=>deletUserApi(id),
        options:{  onSuccess: (data) => {
        queryClient.invalidateQueries({queryKey: ['users']}); 
         } },
        
    })

}