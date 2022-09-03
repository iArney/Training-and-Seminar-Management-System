// /**
//  * Thsi function send API request to the server
//  * @param {String} query
//  * @param {Object} variables
//  * @returns {Promise} a promise response of the request
//  *
//  */
// export const useAPIClient = async (query) => {
const apiClient = async (query) => {
  const response = await fetch("http://172.17.17.136:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return response
}

export default apiClient;