import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { IFormData } from "../components/Layouts/SignInUpLayout";
import { User } from "../components/AuthProvider/AuthProvider";

const apiClient = new APIClient<User>("/user");

const useSignup = () =>
  useMutation<IFormData, Error, IFormData>({
    mutationFn: (formData) => apiClient.signupRequest(formData),
  });

export default useSignup;
