import { IFormData } from "../components/Layouts/SignInUpLayout";
import axiosInstance, { authenticateInstance } from "./axios-instance";

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getChats = () => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then((response) => response.data);
  };

  getMessages = (fromNumber: number, toNumber: string) => {
    return axiosInstance
      .post<T>(this.endpoint, {
        fromNumber,
        toNumber,
      })
      .then((response) => response.data);
  };

  logInRequest = (user: IFormData) => {
    console.log("user: ", user);
    return axiosInstance.post(this.endpoint, user).then((response) => {
      const { token } = response.data;
      console.log("token ", token);
      authenticateInstance(token);
      return response.data;
    });
  };

  signupRequest = (user: IFormData) => {
    console.log("user: ", user);
    return axiosInstance.post(this.endpoint, user).then((response) => {
      const { token } = response.data;
      console.log("token ", token);
      authenticateInstance(token);
      return response.data;
    });
  };

  getUserInfo = (token: string) => {
    console.log("haciendo solicitud...");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance.get(this.endpoint, config).then((response) => {
      return response.data;
    });
  };
}

export default APIClient;
