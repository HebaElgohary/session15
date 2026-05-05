import apiClient from "../../../services/apiClient";
interface Payload {
  name: string;
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
) => Promise<User> = async () => {
  return await apiClient.put<User>(`users/${id}`, data);
};
