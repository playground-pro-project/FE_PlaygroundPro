import Layout from "../components/Layout";
import { Input } from "../components/Input";
import { useStore } from "../routes/store/store";
import Swal from "sweetalert2";
import Api from "../routes/Routes";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  full_name: Yup.string(),
  email: Yup.string(),
  phone: Yup.string(),
  address: Yup.string(),
  bio: Yup.string(),
});
const schemaPassword = Yup.object().shape({
  new_password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "password must match")
    .required("Required"),
});

const EditProfile = () => {
  const { token, profile_picture, full_name, email, phone, address, bio } =
    useStore();
  const navigate = useNavigate();

  const fetchProfile = async () => {
    await Api.getProfile(token)
      .then((response) => {
        const { data } = response.data;
        formik.setFieldValue("full_name", data.full_name);
        formik.setFieldValue("email", data.email);
        formik.setFieldValue("phone", data.phone);
        formik.setFieldValue("address", data.address);
        formik.setFieldValue("bio", data.bio);
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
  const formikPassword = useFormik({
    initialValues: {
      new_password: "",
    },
    validationSchema: schemaPassword,
    onSubmit: async (values) => {
      await putPassword(values);
    },
  });
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      address: "",
      bio: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await formDataToPut(values);
    },
  });
  const formDataToPut = async (datad?: any) => {
    const formData = new FormData();
    formData.append("email", datad.email);
    formData.append("full_name", datad.full_name);
    formData.append("phone", datad.phone);
    formData.append("address", datad.address);
    formData.append("bio", datad.bio);

    await putUsers(formData);
  };
  const putPassword = async (datad?: any) => {
    await Api.putPassword(token, datad)
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
  const putUsers = async (datad?: any) => {
    await Api.editProfile(token, datad)
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

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <Layout chose="layout">
      <Layout
        chose="section"
        addClass="bg-base-100 flex items-center justify-center"
      >
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />

          {/* Modal */}
          <div className="modal">
            <form
              className="modal-box relative flex flex-col gap-3"
              onSubmit={formikPassword.handleSubmit}
            >
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-error absolute right-2 top-2 text-white"
              >
                ✕
              </label>

              <div className="w-full">
                <label htmlFor="password" className="label">
                  <p className="label-text">New Password: </p>
                </label>
                <Input
                  id="new_password"
                  name="new_password"
                  label="type your new password here"
                  type="password"
                  value={formikPassword.values.new_password}
                  onChange={formikPassword.handleChange}
                  onBlur={formikPassword.handleBlur}
                  error={formikPassword.errors.new_password}
                  touch={formikPassword.touched.new_password}
                />
              </div>

              <div className="w-full">
                <label htmlFor="confirmPassword" className="label">
                  <p className="label-text">Confirm Password: </p>
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  label="type your confirm password here"
                  type="password"
                  onChange={formikPassword.handleChange}
                  onBlur={formikPassword.handleBlur}
                />
              </div>

              <div className="flex justify-center mr-4 mt-5">
                <button
                  type="submit"
                  className="btn btn-wide btn-primary text-white translate-y-1"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
        <div className="px-10 py-10">
          <p className="text-[#291334] text-5xl tracking-wider font-bold text-center">
            Edit Profile
          </p>

          <form
            className="flex flex-col mb-20 pt-10"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex w-full">
              <div className="flex flex-row w-3/6 m-3 items-center">
                <div className="card w-fit h-fit pb-5">
                  <div className="p-1 bg-slate-300 rounded-full">
                    <img
                      src={profile_picture || "no image"}
                      alt={`User's profile picture`}
                      className="h-52 w-52 border-spacing-1 rounded-full object-cover object-center"
                    />
                  </div>
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
                    label={full_name || ""}
                    onChange={formik.handleChange}
                    value={formik.values.full_name}
                    onBlur={formik.handleBlur}
                    error={formik.errors.full_name}
                    touch={formik.touched.full_name}
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="label">
                    <p className="label-text">Email: </p>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    label={email || ""}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touch={formik.touched.email}
                    type="email"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className="label">
                    <p className="label-text">Phone: </p>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    label={phone || ""}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phone}
                    touch={formik.touched.phone}
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="address" className="label">
                    <p className="label-text">Address: </p>
                  </label>
                  <Input
                    id="address"
                    name="address"
                    label={address || ""}
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                    error={formik.errors.address}
                    touch={formik.touched.address}
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="bio" className="label">
                    <p className="label-text">Bio: </p>
                  </label>
                  <Input
                    id="bio"
                    name="bio"
                    label={bio || ""}
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                    onBlur={formik.handleBlur}
                    error={formik.errors.bio}
                    touch={formik.touched.bio}
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-end gap-5 mt-5">
              <button
                type="submit"
                className="btn btn-primary text-white px-3 py-2 rounded-md text-center text-bold"
              >
                Save change
              </button>
              <button
                className="btn btn-error text-white px-3 rounded-md text-center text-bold"
                type="button"
                onClick={() => navigate("/profile")}
              >
                Back
              </button>
            </div>
          </form>

          <div className="flex flex-row justify-center mb-20">
            <div className="">
              <label
                className="btn btn-wide btn-primary text-white"
                htmlFor="my-modal-3"
              >
                Change password?
              </label>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};
export default EditProfile;
