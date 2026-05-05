import { useApiMutation } from "@/src/hooks/useApiMutation";
import { updateUserApi } from "../api/updateUserApi";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateUser=(id:number)=>{
    useApiMutation({
        mutationFn:(data:any)=>updateUserApi(id, data),
            options:{  onSuccess: (data) => {
            useQueryClient().invalidateQueries({queryKey: ['users']})
    }}
    },

)
}       