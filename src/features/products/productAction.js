import { getAllProducts, postNewProduct, updateProduct } from "./productAxios";
import { setProducts } from "./productSlice";

export const createNewProductAction = async (productData) => {
  await postNewProduct(productData);
};

export const updateProductAction = async (productData) => {
  await updateProduct(productData);
};

export const getProductAction = () => async (dispatch) => {
  const response = await getAllProducts();

  if (response.status === "success") {
    dispatch(setProducts(response.products));
  }
};
