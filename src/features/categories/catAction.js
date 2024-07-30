import {
  editCategoryAxios,
  getAllCategories,
  postNewCategory,
} from "./catAxios";
import { setCats } from "./catSlice";

export const createNewCategoryAction = (catData) => async (dispatch) => {
  const response = await postNewCategory(catData);

  if (response.status === "success") {
    dispatch(getCategoryAction());
    return true;
  }
};

export const getCategoryAction = () => async (dispatch) => {
  const response = await getAllCategories();

  if (response.status === "success") {
    dispatch(setCats(response.categories));
  }
};

// edit action
export const editCategoryAction = (obj, setModalShow) => async (dispatch) => {
  // obj => _id and ...rest
  //1. call the axios
  const { status, message } = await editCategoryAxios(obj);

  if (status === "success") {
    dispatch(getCategoryAction());
    setModalShow(false);
    return true;
  }
};
