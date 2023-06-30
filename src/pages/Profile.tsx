import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Layout from "../components/Layout";
import Api from "../routes/Routes";
import { useStore } from "../routes/store/store";
import { GetProfil } from "../routes/Utils";
import Loading from "../components/Loading";
import { Input } from "../components/Input";
import { Modals } from "../components/Modal";
import { BsFillCloudArrowUpFill, BsFillPlusCircleFill } from "react-icons/bs";

const Profile = () => {
  const [dataProfile, setDataProfile] = useState<GetProfil>();
  const [load, setLoad] = useState<boolean>(false);
  const navigate = useNavigate();
  const { token } = useStore();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchProfile = async () => {
    setLoad(true);
    await Api.getProfile(token)
      .then((response) => {
        const { data } = response.data;
        setDataProfile(data);
        console.log(data);
      })
      .catch((error) => {
        const { data } = error.response;
        console.log(data);
      })
      .finally(() => setLoad(false));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("profile_picture", selectedFile);

    try {
      await Api.putImageProfile(token, formData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Upload Image Success",
        showConfirmButton: false,
        timer: 1800,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed Upload Image",
      });
    }
  };

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  useEffect(() => {}, []);

  return (
    <Layout chose="layout">
      <Modals id="modal-add-image">
        <div className="w-full ">
          <div className="flex justify-center mb-5 text-xl font-bold text-darkBlue">
            Add Image
          </div>
          <div className="w-full">
            <div
              className="flex flex-col items-center justify-center w-full border-2 border-gray-800 border-dashed rounded-xl h-52 bg-base-100 hover:cursor-pointer hover:animate-pulse"
              onClick={handleFileUpload}
            >
              <input
                type="file"
                className="hidden"
                onChange={handleSelectedFile}
                ref={fileInputRef}
              />
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              ) : (
                <div className="text-center">
                  <div className="flex justify-center">
                    <BsFillCloudArrowUpFill class="text-5xl" />
                  </div>
                  <span className="text-sm">
                    Drag and drop or browse to choose a file{" "}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end w-full gap-2 mt-10">
            <div className="mt-0 modal-action ">
              <label htmlFor="modal-add-image" className="btn btn-ghost">
                Close
              </label>
            </div>
            <button
              className="w-32 text-white btn btn-primary"
              onClick={handleUpload}
            >
              Submit
            </button>
          </div>
        </div>
      </Modals>
      {load ? (
        <Loading />
      ) : (
        <Layout
          chose="section"
          addClass="bg-base-100 flex py-12 justify-center px-20"
        >
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="flex flex-row pb-5">
                <p className="text-[#291334] text-5xl tracking-wider font-bold text-center">
                  Profile&nbsp;
                </p>
                <div
                  className={`w-16 h-10 rounded-full flex items-center justify-center , ${
                    dataProfile?.role !== "user" ? "bg-warning" : "bg-success"
                  }`}
                >
                  <div className="text-white text-center font-bold uppercase">
                    {dataProfile?.role}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center pb-5">
                <form className="flex flex-col mb-20 pt-10">
                  <div className="flex w-full">
                    <div className="flex flex-col w-3/6 m-3 justify-center items-center">
                      <div className="card w-fit h-fit pb-5">
                        <div className="p-1 bg-slate-300 rounded-full">
                          <img
                            src={dataProfile?.profile_picture || "no image"}
                            alt={``}
                            className="h-52 w-52 border-spacing-1 rounded-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="mt-0 modal-action ">
                        <label
                          htmlFor="modal-add-image"
                          className="flex items-center justify-center h-12 gap-3 font-semibold text-white btn btn-ghost hover:text-black bg-warning rounded-xl"
                        >
                          Add Image
                          <BsFillPlusCircleFill />
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 w-3/6 m-3">
                      <div className="w-full">
                        <label htmlFor="fullname" className="label">
                          <p className="label-text">Name: </p>
                        </label>
                        <Input
                          id="fullname"
                          name="fullname"
                          value={dataProfile?.fullname}
                          type="text"
                          disabled={true}
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="email" className="label">
                          <p className="label-text">Email: </p>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          value={dataProfile?.email}
                          type="email"
                          disabled={true}
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="phone" className="label">
                          <p className="label-text">Phone: </p>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={dataProfile?.phone}
                          type="text"
                          disabled={true}
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="email" className="label">
                          <p className="label-text">Address: </p>
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={dataProfile?.address}
                          type="address"
                          disabled={true}
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="email" className="label">
                          <p className="label-text">Bio: </p>
                        </label>
                        <Input
                          id="bio"
                          name="bio"
                          value={dataProfile?.bio}
                          type="bio"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center gap-5 mt-5">
                    <button
                      className="btn btn-primary text-white px-3 py-2 rounded-md text-center text-bold"
                      onClick={() => navigate("/editprofile")}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="btn btn-error text-white px-3 rounded-md text-center text-bold"
                      type="button"
                    >
                      Delete Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </Layout>
  );
};
export default Profile;
