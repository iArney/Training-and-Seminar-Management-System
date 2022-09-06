import apiClient from "@/useApiClient";

export const registerUser = async (userData) => {
  const query = `mutation {
    register(email: "${userData.email}", 
    username:"${userData.username}",
     password1: "${userData.password}",
      password2:"${userData.confirmPassword}") {
      success
      errors
      token
      refreshToken
    }
  }
  `;
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.register;
};

export const login = async (loginData) => {
  const query = `mutation {
    tokenAuth(email: "${loginData.email}", 
    password:"${loginData.password}") {
      success
      errors
      token
      refreshToken
      user{
        id
        username
        email
      }
    }
  }
  `;
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.tokenAuth;
};
