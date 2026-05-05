import apiClient from "../../../services/apiClient";
import ApiClient from "../../../services/apiClient";
export interface User {
    id: number;
    name: string;
    email: string;
}

export const getUsersApi:()=>Promise<User> =async()=>{
return apiClient.get<User>('users')

}