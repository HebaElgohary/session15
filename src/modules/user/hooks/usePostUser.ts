import {useApiMutation} from "../../../hooks/useApiMutation";
import {postUserApi} from "../api/postUserApi";

export  const usePostUser=()=> {
   return useApiMutation({
    mutationFn: postUserApi,
    options: {
      retry: true, // Enable retry on failure
      retryDelay: 1000, // Delay between retries in milliseconds
    },

})
}
  
