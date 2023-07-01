import React, { useState } from "react";
import Layout from "../components/Layout";
import { InputFile } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "../routes/Routes";
import { useStore } from "../routes/store/store";
import Swal from "sweetalert2";

const schema = Yup.object().shape({
  owner_docs: Yup.mixed().required("Image is required"),
});
const Validate = () => {
  const navigate = useNavigate();
  const { token, role, full_name } = useStore();
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formikValidate.setFieldValue("owner_docs", file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const formDataToPut = async (datad?: any) => {
    const formData = new FormData();
    formData.append("owner_docs", datad.file);

    await putUsers(formData);
  };

  const putUsers = async (datad?: any) => {
    await Api.validateUser(token, datad)
      .then((response) => {
        const { message } = response.data;
        navigate("/profile");

        Swal.fire({
          icon: "success",
          title: message,
        });
      })
      .catch((error) => {
        const { data } = error.response;
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `error :  ${data.message}`,
          showCancelButton: false,
        });
      });
  };

  const formikValidate = useFormik({
    initialValues: {
      owner_docs: null,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await formDataToPut(values);
    },
  });
  const handleCancel = () => {
    navigate("/profile");
  };
  return (
    <Layout chose="layout">
      <Layout chose="section" addClass="bg-base-100 flex flex-col items-center">
        <div className="w-1/2">
          <p className="text-4xl font-semibold text-neutral uppercase items-center">
            Validate to be Owner
          </p>
          <div className="divider"></div>
          <p className="text-xl font-semibold text-neutral capitalize mt-3 ">
            Name : &emsp;
            <span className="font-normal">{full_name}</span>
          </p>
          <div className="flex gap-3 items-end">
            <p className="text-xl font-semibold text-neutral capitalize mt-3 ">
              Role :
            </p>
            <p className="w-16 rounded-full flex items-center justify-center bg-success">
              <span className="text-white text-center font-bold">{role}</span>
            </p>
          </div>
        </div>
        <form
          className="flex flex-col gap-3 items-center w-1/2 mt-3"
          onSubmit={formikValidate.handleSubmit}
        >
          <div className="w-full h-full p-3">
            <img
              src={
                preview
                  ? preview
                  : "https://placehold.co/600x400/png?text=placeholder+image"
              }
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>

          <InputFile
            id="owner_docs"
            name="owner_docs"
            label="owner_docs name"
            onChange={handleImageChange}
          />

          <div className="w-full flex justify-end gap-3">
            <button
              type="submit"
              className="btn bg-primary w-48 h-8 text-white rounded-lg"
            >
              Became Owner
            </button>
            <button
              className="btn bg-gray-500 w-48 text-white rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </Layout>
    </Layout>
  );
};
export default Validate;
