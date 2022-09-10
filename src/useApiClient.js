// /**
//  * Thsi function send API request to the server
//  * @param {String} query
//  * @param {Object} variables
//  * @returns {Promise} a promise response of the request
//  *
//  */

const apiClient = async (query, token) => {
  const response = await fetch("http://172.17.17.136:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: `jwt ${token || ''}`,
    },
    body: JSON.stringify({
      query,
      // variables: {
      //   input: inputData,
      // },
    }),
  });

  return response;
};

export default apiClient;
