import apiClient from "@/useApiClient";

export const registerUser = async () => {
  const query =`mutation CreateMessage($input: MessageInput) {
    createMessage(input: $input) {
      id
    }
  }`

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allInstitute;
};
