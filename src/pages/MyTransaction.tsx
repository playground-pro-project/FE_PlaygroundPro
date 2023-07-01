import Layout from "../components/Layout";
import { Modals } from "../components/Modal";
import { TextArea } from "../components/Input";
import HistoryCard from "../components/HistoryCard";

import { FaStar } from "react-icons/fa";

const MyTransaction = () => {
  return (
    <Layout chose="layout">
      <>
        <Modals id="modal-review">
          <form className="flex flex-col gap-5 items-center">
            <p className="text-primary font-medium tracking-wide text-2xl mb-3">
              Add Review
            </p>
            <TextArea id="review" name="review" label="review" />

            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className="mr-1 text-base-300"
                  type="button"
                >
                  <FaStar />
                </button>
              ))}
              <span>{4}</span>
            </div>
            <div className="w-full flex justify-end gap-3">
              <div className="modal-action mt-0 ">
                <label htmlFor="modal-review" className="btn btn-ghost">
                  Close
                </label>
              </div>
              <button className="btn btn-primary w-32 text-white">
                Submit
              </button>
            </div>
          </form>
        </Modals>
        <Layout
          chose="section"
          addClass="bg-base-100 flex flex-col  py-16 px-20"
        >
          <p className="text-4xl font-semibold text-neutral uppercase">
            My Transaction
          </p>
          <div className="divider"></div>
          <div className="w-full p-4">
            <div className="grid grid-cols-1 gap-5">
              <HistoryCard
                homestay_name="Venue A6"
                payment_status="Pending"
                date="2023/06/26"
                checkin_date="08.00"
                checkout_date="10.00"
                homestay_price="80000"
                duration="2"
                bank_account="BNI"
                va_number="VA-0812123"
              />
              <HistoryCard
                homestay_name="Lapangan Senayan"
                payment_status="Settlement"
                date="2023/06/27"
                checkin_date="08.00"
                checkout_date="10.00"
                homestay_price="40000"
                duration="2"
                bank_account="BNI"
                va_number="VA-0812123"
              />
            </div>
          </div>
        </Layout>
      </>
    </Layout>
  );
};

export default MyTransaction;
