import { useApiQuery } from "@/src/hooks/useApiQuery"
import { getUserApi } from "../api/getUserApi"

export const useGetUser = (id: number) => {
    return useApiQuery({
        queryKey: ['user', id],
        queryFn: () => getUserApi(id),

    })
}