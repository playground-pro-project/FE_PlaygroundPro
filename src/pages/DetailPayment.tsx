import { FC } from "react";
import Layout from "../components/Layout";
import CardInvoice from "../components/CardInvoice";

const DetailPayment: FC = () => {
  return (
    <Layout chose="layout">
      <Layout
        chose="section"
        addClass="flex flex-col gap-3 my-6 px-6 rounded-lg justify-center items-center"
      >
        <div className="text-4xl font-semibold text-neutral uppercase items-center">
          Detail Transaction
        </div>
        <div className="divider mb-20"></div>
        <div className="flex justify-center items-center w-64 shadow-2xl">
          <CardInvoice
            createdat="2023-08-09"
            name="Venue Senayan"
            date="2023-06-07"
            start="10.00"
            end="13.00"
            price="80000"
            duration="3"
            status="Pending"
            total_amount="240000"
            payment_method="BNI"
            va_number="VA0920392323"
          />
        </div>
        <button className="btn btn-md text-primary">Back</button>
      </Layout>
    </Layout>
  );
};
export default DetailPayment;
