import axios, { AxiosInstance } from "axios";


const apiClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.100.19:1337/graphql",
  withCredentials: true,
});

let isRefreshing = false;

apiClient.interceptors.response.use(
  async (response) => {
    const config = response?.config;
    let errors: any = response?.data?.errors;
    if (Array.isArray(errors)) errors = errors[0];
    if (errors?.extensions?.code === 401 && !config?.sent) {
      config.sent = true;
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const { data } = await apiClient.post("", {
            query: `
          mutation RefreshToken {
            refreshToken {
                accessToken
            }
          }
        `,
          });
          const accessToken = data?.data?.refreshToken?.accessToken;
          console.log(data);
          localStorage.setItem("accessToken", accessToken);
          isRefreshing = false;
          return data;
        } catch (err) {
          isRefreshing = false;
          throw err;
        }
      } else return response;
    }
    return response;
  },
  (error) => {
    console.error("GraphQL Network Error:", error);
    throw error;
  }
);

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
