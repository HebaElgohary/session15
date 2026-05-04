import apiClient from '../../../services/apiClient';


interface UserData {
  name: string;
  email: string;
  password: string;
}
interface UserResponse {
    "accessToken": string,
    "user": UserData
}

export const postUserApi = async (userData: UserData): Promise<UserResponse> => {
  return apiClient.post('/users', userData);
};