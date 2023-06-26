import Layout from "../components/Layout";
import user from "../assets/users.png";

const Profile = () => {
  return (
    <Layout chose="layout">
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
              <div className="w-16 h-10 rounded-full flex items-center justify-center bg-success">
                <div className="text-white text-center font-bold">Default</div>
              </div>
            </div>
            <div className="card w-fit h-fit pb-5">
              <div className="p-1 bg-slate-300 rounded-full">
                <img
                  src={user}
                  alt={`User's profile picture`}
                  className="h-64 w-64 border-spacing-1 rounded-full object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-5">
              <div>
                <p className="font-bold text-2xl">John Doe</p>
              </div>
              <div>
                <p className="font-bold text-lg">johndoe@gmail.com</p>
              </div>
              <div className="flex w-full pt-5 gap-4">
                <button className="btn btn-primary w-36 text-white">
                  Edit Profile
                </button>

                <button className="btn btn-primary w-36 text-white">
                  Become Hoster
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};
export default Profile;
