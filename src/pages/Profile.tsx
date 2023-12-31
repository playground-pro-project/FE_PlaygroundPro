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
import {
  BsFillCloudArrowUpFill,
  BsFillPlusCircleFill,
  BsFillTrash3Fill,
} from "react-icons/bs";

const Profile = () => {
  const [dataProfile, setDataProfile] = useState<GetProfil>();
  const [load, setLoad] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    token,
    setPP,
    setFullname,
    setPhone,
    setBio,
    setAddress,
    removeToken,
    removeAddress,
    removeBio,
    removeEmail,
    removeFullname,
    removeIdUser,
    removePP,
    removePassword,
    removePhone,
    removeRole,
  } = useStore();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchProfile = async () => {
    setLoad(true);
    await Api.getProfile(token)
      .then((response) => {
        const { data } = response.data;
        setDataProfile(data);
        setPP(data.profile_picture);
        setFullname(data.fullname);
        setPhone(data.phone);
        setAddress(data.address);
        setBio(data.bio);
      })
      .catch((error) => {
        console.log(error);
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

  const DeletePict = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        HandleDelete();
      }
    });
  };

  const HandleDelete = async () => {
    try {
      const response = await Api.deleteImageProfile(token);
      console.log(response);
      Swal.fire("Log Out", "Delete Venue Success", "success");
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  const delClass = async () => {
    await Api.delUser(token)
      .then((response) => {
        const { message } = response.data;
        removeFullname();
        removeEmail();
        removePhone();
        removeAddress();
        removeBio();
        removeAddress();
        removeIdUser();
        removeToken();
        removeRole();
        removePP();
        removePassword();
        navigate("/");

        Swal.fire({
          icon: "success",
          title: message,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `error :  ${error.message}`,
          showCancelButton: false,
        });
      });
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        delClass();
      }
    });
  };
  useEffect(() => {
    fetchProfile();
  }, []);

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
          <div className="flex flex-col md:p-10">
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
                    <div className="flex flex-col w-full h-full">
                      <div className="hero-content flex-col lg:flex-row w-full justify-start items-start">
                        <div className="flex justify-center">
                          <img
                            src={dataProfile?.profile_picture || "no image"}
                            alt={``}
                            className="max-w-sm  rounded-full shadow-2xl object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="mt-0 modal-action flex flex-row justify-center items-center">
                        <label
                          htmlFor="modal-add-image"
                          className="flex items-center justify-center h-12 gap-3 font-semibold text-white btn btn-ghost hover:text-black bg-primary rounded-xl"
                        >
                          Add Image
                          <BsFillPlusCircleFill />
                        </label>
                        <label
                          htmlFor="modal-remove-image"
                          className="flex items-center justify-center h-12 gap-3 font-semibold text-white btn btn-ghost hover:text-black bg-error rounded-xl"
                          onClick={DeletePict}
                        >
                          Remove Image
                          <BsFillTrash3Fill />
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full m-3">
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
                      onClick={handleDelete}
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
