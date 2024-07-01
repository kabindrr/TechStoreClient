import { apiProcessor } from "../../../services/axios";

const catEP = import.meta.env.VITE_APP_SERVR_ROOT + "/api/v1/categories";

export const postNewCategory = (data) => {
  const obj = {
    url: catEP,
    method: "post",
    showToast: true,
    isPrivate: true,
    data,
  };

  return apiProcessor(obj);
};
export const getAllCategories = (data) => {
  const obj = {
    url: catEP,
    method: "post",
    showToast: true,
    isPrivate: true,
    data,
  };

  return apiProcessor(obj);
};
