import Layout from "../components/Layout";
import { Select } from "../components/Input";

const ConfirmPay = () => {
  return (
    <Layout chose="layout">
      <Layout
        chose="section"
        addClass="bg-base-100 flex flex-col items-center py-16 px-20"
      >
        <div className="w-1/2 items-center text-center">
          <p className="text-4xl font-semibold text-neutral uppercase ">
            Confirmation and Payment
          </p>
          <div className="divider"></div>
        </div>
        <form className="flex flex-col gap-3 w-full mt-3">
          <div className="h-full w-full p-5 justify-between bg-gray-200 rounded-box shadow-md flex flex-row">
            <div className="w-3/6">
              <p className="text-2xl text-neutral font-semibold tracking-wide mb-2">
                Venue Premium A6
              </p>
              <p className="text-2xl text-neutral font-semibold tracking-wide mb-2">
                Senayan - Jakarta
              </p>
              <div className="flex gap-3 items-center">
                <div className="w-max h-max rounded-lg p-3 bg-gray-400">
                  08.00
                </div>
                <p className="font-semibold">-</p>
                <div className="w-max h-max rounded-lg p-3 bg-gray-400">
                  09.00
                </div>
              </div>

              <p className="text-xl font-semibold text-neutral capitalize mt-3 ">
                Rp 40.000 x<span className="font-normal">{` `}2 Hours</span>
              </p>
              <div className="divider w-96 my-1"></div>
              <p className="text-xl font-semibold text-neutral capitalize mt-3 ">
                Total Rp 80.000
              </p>
              <p className="text-xl font-semibold text-neutral capitalize mt-3 ">
                Service Fee RP 2.500
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full">
              <label className="label">
                <span className="label-text text-[#291334] text-xl">
                  Choose a Bank
                </span>
              </label>
              <Select id="bank_account" name="bank_account" label="Bank">
                <option value="bri" id="bri_option">
                  BRI
                </option>
                <option value="bca" id="bca_option">
                  BCA
                </option>
                <option value="bni" id="bni_option">
                  BNI
                </option>
              </Select>
            </div>
          </div>
          <div className="w-full flex justify-end gap-3">
            <button
              id="confirm_button"
              type="submit"
              className="btn btn-primary w-auto text-white"
            >
              Confirm and Pay
            </button>
          </div>
        </form>
      </Layout>
    </Layout>
  );
};

export default ConfirmPay;
