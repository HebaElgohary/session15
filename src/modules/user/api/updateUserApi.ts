import apiClient from "../../../services/apiClient";
interface User{
    
  name: string

}
export const updateUserApi:()=>Promise<User>=async()=>{
    return await apiClient.put<User>('users') 

}