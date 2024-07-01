import React from "react";
import { Button } from "react-bootstrap";
import { CategoryTable } from "../../components/tables/CategoryTable";
import { AddNewCategory } from "../../components/forms/AddNewCategory";
import { CustomModal } from "../../components/common/custom-modal/CustomModal";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../store/systemSlice";

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Categories</h2>
      <hr />
      <div className="text-end mb-5">
        <Button
          className="btn btn-primary"
          onClick={() => dispatch(setShowModal(true))}
        >
          Add New Category
        </Button>
      </div>

      <CustomModal title="Add New Category">
        <AddNewCategory />
      </CustomModal>

      <CategoryTable />
    </div>
  );
};

export default Categories;
