import apiClient from "../../../services/apiClient";
interface Payload {
  id: number;
  name: string;
  email: string;
  password: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
export const updateUserApi: (
  id: number,
  data: Payload,
) => Promise<User> = async (id: number,data) => {
  return await apiClient.put<User>(`users/${id}`,data);
};
