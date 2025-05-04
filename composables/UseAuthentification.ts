import type { AuthentificationModel } from "~/models/authentification/authentificationModel";
import type { RegisterModel } from "../models/authentification/registerModel";

export const useAuthentification = () => {
    const config = useRuntimeConfig();

  const sendRegister = async (registerInfo: RegisterModel) => {
  try {
    const response = await axios.post(`${config.public.apiUrl}/auth/register`, registerInfo);
    if(response.data){
      return response.data
    }
    } catch (error) {
    console.log(error)
  }
  };

  const sendLogin = async (authentification: AuthentificationModel) => {
  try {
    const response = await axios.post(`${config.public.apiUrl}/auth/login`, authentification);
    if(response.data.token.token){
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
};

  return {sendRegister, sendLogin};
}
