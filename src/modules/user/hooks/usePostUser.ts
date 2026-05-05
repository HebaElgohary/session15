import {useApiMutation} from "../../../hooks/useApiMutation";
import {postUserApi} from "../api/postUserApi";
import {useQueryClient} from "@tanstack/react-query";

export  const usePostUser=()=> {
   const queryClient = useQueryClient();
   return useApiMutation({
    mutationFn: postUserApi,
    options: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({queryKey: ['users']}); // Invalidate the 'users' query to refetch the updated list
      },
    },

})
}
  
