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
    createAccount(
    email: "${userData.email}",
    employId: "${userData.designation}",
    firstName: "${userData.firstName}",
    lastName: "${userData.lastName}",
    institutionId: "${userData.institution}",
    username:"${userData.username}",
    password1: "${userData.password}",
    phoneNumber: "${userData.phone}",
    nidaNo: "${userData.nida}",
    ) {
      user{
        id
        username
        email
      }
      success
      token
      refreshToken
    }
  }
  `;
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.createAccount;
};

export const updateUser = async (userDetails) => {
  const query = `mutation {
    updateUser(
      employId: "${userDetails.employId}", 
      firstName: "${userDetails.firstName}", 
      id: "${userDetails.id}", 
      institutionId:"${userDetails.institution}", 
      lastName:"${userDetails.lastName}", 
      nidaNo:"${userDetails.nida}", 
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

  return data.data.updateUser.updateUser;
};

