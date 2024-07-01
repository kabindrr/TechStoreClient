import { setShowModal } from "../../store/systemSlice";
import { getAllCategories, postNewCategory } from "./catAxios";
import { setCats } from "./catSlice";

export const createNewCategoryAction = (catData) => async (dispatch) => {
  const response = await postNewCategory(catData);

  console.log(response);
  if (response.status === "success") {
    dispatch(setShowModal(false));
    dispatch(getCategoryAction());
  }
};

export const getCategoryAction = () => async (dispatch) => {
  const response = await getAllCategories();

  console.log(response);
  if (response.status === "success") {
    dispatch(setCats(response.categories));
  }
};
