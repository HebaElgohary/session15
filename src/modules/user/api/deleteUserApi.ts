import ApiClient from "../../../services/apiClient";


export const deletUserApi:(id:number)=>Promise<void>=async(id)=>{
    return await ApiClient.delete(`/users/${id}`)
}