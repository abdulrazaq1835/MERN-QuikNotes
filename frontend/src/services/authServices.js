import api from "../lib/axios.js";

export const Signup = async (data) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

export const Login = async (data) => {
  const res = await api.post("/auth/login", data);

  // ✅ TOKEN SAVE KARO
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};
