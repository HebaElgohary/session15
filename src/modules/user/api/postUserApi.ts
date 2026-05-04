import apiClient from '../../../services/apiClient';


interface UserData {
  name: string;
  email: string;
  password: string;
}

export const postUserApi = async (userData: UserData) => {
  return apiClient.post('/users', userData);
};