import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { IFormData } from "../components/Layouts/SignInUpLayout";
import { User } from "../components/AuthProvider/AuthProvider";

const apiClient = new APIClient<User>("/user/login");

const useLogin = () =>
  useMutation<IFormData, Error, IFormData>({
    mutationFn: (formData) => apiClient.logInRequest(formData),
  });

export default useLogin;
