import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { useDispatch } from "react-redux";
import { createNewProductAction } from "../../features/products/productAction";

export const AddNewProduct = () => {
  const titleRef = useRef("");
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    const title = titleRef.current.value;
    if (!title) {
      return alert("Must fill up the form frist");
    }

    dispatch(
      createNewProductAction({
        title,
      })
    );
  };
  const inputs = [
    {
      label: "Name",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Product Name",
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      required: true,
      placeholder: "SKU",
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
      required: true,
      placeholder: "Enter quantity",
    },
    {
      label: "SalesPrice",
      name: "salesprice",
      type: "number",
      required: true,
      placeholder: "Sales Price",
    },
    {
      label: "SaleStartDate",
      name: "salestartdate",
      type: "date",
      required: true,
      placeholder: "Sale start date",
    },
    {
      label: "SalesEndDate",
      name: "salesenddate",
      type: "date",
      required: true,
      placeholder: "Sales End Date",
    },

    {
      label: "Discription",
      name: "discription",
      type: "text",
      required: true,
      placeholder: "Product Discription",
    },
  ];
  return (
    <>
      <div>
        <Form className="">
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <div className="d-grid mt-3">
            <Button type="submit" handleOnSubmit={handleOnSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
