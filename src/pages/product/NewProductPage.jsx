import React, { useEffect } from "react";
import {
  CustomInput,
  CustomSelect,
} from "../../components/common/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "../../Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../features/categories/catAction";
import { Link } from "react-router-dom";
import { createNewProductAction } from "../../features/products/productAction";

export const NewProduct = () => {
  const dispatch = useDispatch();
  const { form, setForm, handleOnChange } = useForm();
  const { cats } = useSelector((state) => state.catInfo);

  console.log(cats);
  useEffect(() => {
    !cats.length && dispatch(getCategoryAction);
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createNewProductAction(form);
  };

  const options = cats
    .filter((p) => p.status === "active")
    .map(({ title, _id }) => {
      title, _id;
    });
  console.log(options);

  const inputs = [
    {
      label: "Category",
      name: "parentCatId",
      type: "text",
      required: true,
      isSelectType: true,
      options,
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      required: true,
      placeholder: "SKU-12345",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      required: true,
      placeholder: "Product price",
    },
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
      min: 1,
      required: true,
      placeholder: "22",
    },
    {
      label: "SalesPrice",
      name: "salesprice",
      type: "number",
      min: 1,

      placeholder: "Sales Price",
    },
    {
      label: "SaleStartDate",
      name: "salestartdate",
      type: "date",
    },
    {
      label: "SalesEndDate",
      name: "salesenddate",
      type: "date",
    },

    {
      label: "Discription",
      name: "discription",
      type: "text",
      as: "textarea",
      maxLength: 5000,
      required: true,
      placeholder: "Product Discription",
    },
  ];
  return (
    <Form onSubmit={handleOnSubmit}>
      <h2>Create New Product</h2>
      <hr />

      <Link to="/admin/products/new">
        <Button>Add new Product</Button>
      </Link>

      {inputs.map((item, i) =>
        item.isSelectType ? (
          <CustomSelect key={i} {...item} handleOnChange={handleOnChange} />
        ) : (
          <CustomInput key={i} {...item} handleOnChange={handleOnChange} />
        )
      )}

      <Form.Group>
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file" multiple></Form.Control>
      </Form.Group>
    </Form>
  );
};
