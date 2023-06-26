import Layout from "../components/Layout";
import { Input, InputFile } from "../components/Input";
import user from "../assets/users.png";

const EditProfile = () => {
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
            <form className="modal-box relative flex flex-col gap-3">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-error absolute right-2 top-2 text-white"
              >
                ✕
              </label>
              <div className="w-full">
                <label htmlFor="old_password" className="label">
                  <p className="label-text">Old Password: </p>
                </label>
                <Input
                  id="old_password"
                  name="old_password"
                  label="type your old password here"
                  type="password"
                />
              </div>

              <div className="w-full">
                <label htmlFor="password" className="label">
                  <p className="label-text">New Password: </p>
                </label>
                <Input
                  id="password"
                  name="password"
                  label="type your new password here"
                  type="password"
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

          <form className="flex flex-col mb-20 pt-10">
            <div className="flex w-full">
              <div className="flex flex-col w-3/6 m-3 items-center">
                <div className="card w-fit h-fit pb-5">
                  <div className="p-1 bg-slate-300 rounded-full">
                    <img
                      src={user}
                      alt={`User's profile picture`}
                      className="h-52 w-52 border-spacing-1 rounded-full object-cover object-center"
                    />
                  </div>
                </div>
                <InputFile
                  id="picture_id"
                  name="picture_id"
                  label="picture_id name"
                />
              </div>
              <div className="flex flex-col gap-1 w-3/6 m-3">
                <div className="w-full">
                  <label htmlFor="fullname" className="label">
                    <p className="label-text">Name: </p>
                  </label>
                  <Input
                    id="fullname"
                    name="fullname"
                    label="type your name here"
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
                    label="type your email here"
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
                    label="type your phone here"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-end gap-5 mt-5">
              <button
                className="btn btn-error text-white px-3 rounded-md text-center text-bold"
                type="button"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-primary text-white px-3 py-2 rounded-md text-center text-bold"
              >
                Save change
              </button>
            </div>
          </form>

          <div className="flex flex-row justify-center mb-20">
            <div className="btn btn-wide btn-error text-white mr-4">
              Delete Account
            </div>
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
