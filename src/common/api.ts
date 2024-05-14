import WebConstants from "@constants";
import axios from "axios";

const api = axios.create({
  baseURL: WebConstants.API_URL,
});

// 나중에 언젠가 refresh token을 적용시킬 분을 위해 미리 남겨둡니다..
/*
const refreshToken = async () => {
  await axios.get("/token/refresh", {
    withCredentials: true,
  });
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
      } catch (error2) {
        return Promise.reject(error2);
      }

      return api(originalRequest);
    }
    if (error.response?.status === 401 && originalRequest._retry) {
      // 로그아웃 관련 처리하세요 요기서
    }
    return Promise.reject(error);
  }
);

*/

export default api;
