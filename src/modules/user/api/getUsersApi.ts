import apiClient from "../../../services/apiClient";
export interface User {
    id: number;
    name: string;
    email: string;
}

export const getUsersApi = async (): Promise<User[]> => {
  const res = await apiClient.get<User[]>('/users');
  return res;
};