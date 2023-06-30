import React, { useState } from "react";
import Layout from "../components/Layout";
import { InputFile } from "../components/Input";
import { useNavigate } from "react-router-dom";

const Validate = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
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
            <span className="font-normal">John Doe</span>
          </p>
          <div className="flex gap-3 items-end">
            <p className="text-xl font-semibold text-neutral capitalize mt-3 ">
              Role :
            </p>
            <p className="w-16 rounded-full flex items-center justify-center bg-success">
              <span className="text-white text-center font-bold">Default</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-3 items-center w-1/2 mt-3">
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
            id="profile_picture"
            name="profile_picture"
            label="profile picture name"
            onChange={handleImageChange}
          />

          <div className="w-full flex justify-end gap-3">
            <button
              className="btn bg-gray-500 w-48 text-white rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-primary w-48 h-8 text-white rounded-lg"
            >
              Became Owner
            </button>
          </div>
        </form>
      </Layout>
    </Layout>
  );
};
export default Validate;
