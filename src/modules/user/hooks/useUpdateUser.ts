import { useApiMutation } from "@/src/hooks/useApiMutation";
import { updateUserApi } from "../api/updateUserApi";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateUser=()=>{
    useApiMutation({
        mutationFn:()=>updateUserApi(),
            options:{  onSuccess: (data) => {
            useQueryClient().invalidateQueries({queryKey: ['users']})
    }}
    },

)
}       