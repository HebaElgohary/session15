import apiClient from "../../../services/apiClient";
export const updateUserApi=async(id:number)=>{
    return await apiClient.put('users') 

}