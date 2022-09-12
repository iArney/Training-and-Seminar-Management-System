import apiClient from "@/useApiClient";

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
        institutionId{
          id
          instituteName
          instituteAbbreviation
        }
      }
    }
  }
  `;
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.tokenAuth;
};


export const registerUser = async (userData) => {
  const query = `mutation {
    register(email: "${userData.email}", 
    username:"${userData.username}",
    password1: "${userData.password}",
    password2:"${userData.confirmPassword},  
      ") {
      id
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

export const updateUser = async (userDetails) => {
  const query = `mutation {
    updateUser(
      employId: "${userDetails.employId}", 
      firstName: "${userDetails.firstName}", 
      id: "${userDetails.id}", 
      institutionId:"${userDetails.institutionId}", 
      lastName:"${userDetails.lastName}", 
      nidaNo:"${userDetails.nidaNo}", 
      phoneNumber:"${userDetails.phone}",){
      updateUser{
        id,
        username,
        email,
        institutionId{
          id
          instituteName
          instituteAbbreviation
        }
      }
    }
  }
  `;
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.updateUser;
};

