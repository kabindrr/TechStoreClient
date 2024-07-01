import React, { useEffect } from "react";
import { Button, Form, Placeholder } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { useDispatch } from "react-redux";
import useForm from "../../Hooks/useForm";
import { CustomModal } from "../common/custom-modal/CustomModal";

export const EditCategories = ({ selectedCat }) => {
  const dispatch = useDispatch();

  const { form, setForm, handleOnChange } = useForm({});

  useEffect(() => {
    setForm(selectedCat);
  }, [selectedCat]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const inputs = [
    {
      isSelectType: true,
      label: "Status",
      name: "status",
      type: "text",
      required: true,
      options: [
        {
          text: "Active",
          value: "active",
          selected: form.status === "active",
        },
        {
          value: "inactive",
          text: "Inactive",
          selected: form.status === "inactive",
        },
      ],
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      value: form.title,
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      placeholder: "Phones",
      value: form.slug,
      disabled: true,
    },
  ];
  return (
    <div>
      <CustomModal />
      <Form className="bg-dark p-5 text-light">
        {inputs.map((item, i) =>
          item.isSelectType ? (
            <CustomInput key={i} {...item} />
          ) : (
            <CustomInput key={i} {...item} />
          )
        )}
        <div className="d-grid mt-3">
          <Button type="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
