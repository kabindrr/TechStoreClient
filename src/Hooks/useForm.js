import { useState } from "react";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });
};

const handleOnImgChange = ({ e, setImages }) => {
  const { files } = e.target;
  setImages(files);
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [images, setImages] = useState([]);
  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
    handleOnImgChange,
    images,
    setImages,
  };
};

export default useForm;
