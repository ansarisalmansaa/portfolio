import api from "./apiConfig";

export const getAllMessages = async () => {
  const res = await api.get("/contact");
  return res.data;
};

export const getOneMessage = async (id) => {
  const res = await api.get(`/contact/${id}`);
  return res.data;
};

export const deleteMessage = async (id) => {
 const res =  await api.delete(`/contact/${id}`);
 return res.data;
};

export const createMessage = async (contactData) => {
  const res = await api.post("/contact", { contact: contactData });
  return res.data;
};