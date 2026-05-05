import apiClient from "../../../services/apiClient";
import ApiClient from "../../../services/apiClient";

interface User{
    name:string ,
    email:string,
    id:number
}
export const getUserApi:(id:number)=>Promise<User>=async(id)=>{
  return await apiClient.get<User>(`/user/${id}`)
}