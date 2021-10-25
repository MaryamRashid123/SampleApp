/**
 * Response interceptor
 */
// axios.interceptors.response.use(
//   (response) => response,
//   async function (error) {
//     const originalRequest = error.config;
//     try {
//       if (
//         error.response.status === 401 &&
//         originalRequest.url.includes("authenticate")
//       ) {
//         return Promise.reject(error);
//       } else if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         const headers = { token: AccessToken.token };
//         const res = await axios.get(
//           `${BarnManagerEnvironment.config().baseURL}${API_CONSTANTS.API_ROUTES.REFRESH_TOKEN
//           }`,
//           { headers }
//         );
//         if (res && res.status === 200) {
//           StorageService.instance.setAccessToken(res.data.result.accessToken);
//           AccessToken.token = res.data.result.accessToken;
//           originalRequest.headers[
//             "Authorization"
//           ] = `Bearer ${res.data.result.accessToken}`;
//           return axios(originalRequest);
//         }
//         return Promise.reject(error);
//       }
//       return Promise.reject(error);
//     } catch (e) {
//       return Promise.reject(e);
//     }
//   }
// );

export function handleResponseMemoryStream(response) {
  if (response.status === 200) {
      return response;
  }
  else {
      handleError(response)
  }
}

export function handleResponse(response) {
  if (response && response.status === 200) {
    return response.data;
  } else {
    handleError(response);
  }
}

export function handleError(error) {
  let errorMessage = "";
  if (typeof error === "string") {
    errorMessage = error;
  } else if (!!error.response && error.response.data) {
    errorMessage = error.response.data.message || "";
  } else {
    errorMessage = "Network error";
  }

  throw errorMessage;
}

export function handleErrorAll(error) {
  throw error;
}
