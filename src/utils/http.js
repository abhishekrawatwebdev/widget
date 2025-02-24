export const createRequest = async (method, url, data = null, headers = {}, responseType = "json", isPublicApi = false) => {
    try {
      const modifiedHeaders = isPublicApi
        ? headers
        : { ...headers, authorization: getCookie("id_token") };
  
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...modifiedHeaders,
        },
      };
  
      if (data) {
        options.body = JSON.stringify(data);
      }
  
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API_FAILED", { err: errorData, response: response });
        return errorData;
      }
  
      return responseType === "json" ? await response.json() : await response.text();
    } catch (error) {
      console.error("API_FAILED", { err: error });
      return error;
    }
  };

  export const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  };

  export const get = (url, headers, responseType = "json", isPublicApi = false) =>
    createRequest("GET", url, null, headers, responseType, isPublicApi);
  
  export const put = (url, data, headers, isPublicApi = false) =>
    createRequest("PUT", url, data, headers, "json", isPublicApi);
  
  export const post = (url, data, headers, responseType = "json", isPublicApi = false) =>
    createRequest("POST", url, data, headers, responseType, isPublicApi);
  
  export const patch = (url, data, headers, isPublicApi = false) =>
    createRequest("PATCH", url, data, headers, "json", isPublicApi);
  
  export const trash = (url, data, headers, isPublicApi = false) =>
    createRequest("DELETE", url, data, headers, "json", isPublicApi);
  