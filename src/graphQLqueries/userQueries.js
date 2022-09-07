import apiClient from "@/useApiClient";

export const getUser = async () => {
  const query = `query{
    me{
      username
      email
      nidaNo
      phoneNumber
    }
  }
    `;
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.me;
};
