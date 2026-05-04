import {useApiMutation} from "../../../hooks/useApiMutation";
import {postUserApi} from "../api/postUserApi";

export const useAddUser = useApiMutation({
    mutationFn: postUserApi,
})