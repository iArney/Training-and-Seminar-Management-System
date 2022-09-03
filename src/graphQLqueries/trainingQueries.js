import apiClient from "@/useApiClient";


export const getAllInstitutions = async () => {
  const query = `query {
    allInstitute{
      id
      instituteName
    }
  }`;
  
  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allInstitute;
}