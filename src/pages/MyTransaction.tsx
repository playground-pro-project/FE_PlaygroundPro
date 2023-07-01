import Layout from "../components/Layout";
import { Modals } from "../components/Modal";
import { TextArea } from "../components/Input";
import HistoryCard from "../components/HistoryCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "../routes/Routes";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import { useStore } from "../routes/store/store";

import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const addSchema = Yup.object().shape({
  review: Yup.string().required("Required"),
  venue_id: Yup.string().required("Required"),
  rating: Yup.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5")
    .required("Required"),
});
const MyTransaction = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [mytrans, setMytrans] = useState<any>([]);
  const { token } = useStore();
  const [rating, setRating] = useState(0);
  const handleStarClick = (value: any) => {
    setRating(value);
  };
  const fetchData = async () => {
    setLoading(true);
    await Api.getMyTrans(token)
      .then((response) => {
        const { data } = response.data;
        setMytrans(data);
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
  const postReviews = async (data: any) => {
    await Api.postReview(token, data)
      .then((response) => {
        const { message } = response.data;
        fetchData();
        Swal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
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
  const formikAdd = useFormik({
    initialValues: {
      review: "",
      rating: 0,
      venue_id: "",
    },
    validationSchema: addSchema,
    onSubmit: (values) => {
      postReviews(values);
    },
  });
  const handleClick = (str?: string) => {
    const id = getTransId(str);
    formikAdd.setFieldValue("venue_id", id);
  };
  const getTransId = (name?: string) => {
    const dataItem = mytrans.find((item: any) => item.venue_name === name);
    return dataItem?.venue_id;
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout chose="layout">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Modals id="modal-review">
            <form
              className="flex flex-col gap-5 items-center"
              onSubmit={formikAdd.handleSubmit}
            >
              <p className="text-primary font-medium tracking-wide text-2xl mb-3">
                Add Review
              </p>
              <TextArea
                id="review"
                name="review"
                label="review"
                value={formikAdd.values.review}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                error={formikAdd.errors.review}
                touch={formikAdd.touched.review}
              />

              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    className={`mr-1 ${
                      rating >= value ? "text-warning" : "text-base-300"
                    }`}
                    onClick={() => {
                      handleStarClick(value);
                      formikAdd.setFieldValue("rating", value);
                      formikAdd.setFieldTouched("rating", true);
                    }}
                    type="button"
                  >
                    <FaStar />
                  </button>
                ))}
                <span>{rating}</span>
              </div>
              {formikAdd.touched.rating && formikAdd.errors.rating && (
                <div className="text-error">{formikAdd.errors.rating}</div>
              )}
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
                {mytrans.map((data: any, idx: any) => {
                  return (
                    <HistoryCard
                      key={idx}
                      homestay_name={data.venue_name}
                      payment_status={data.status}
                      checkin_date={data.check_in_date}
                      checkout_date={data.check_out_date}
                      homestay_price={data.price}
                      duration={data.duration}
                      bank_account={data.payment_type}
                      va_number={data.payment_code}
                      onCLick={() => handleClick(data.homestay_name)}
                    />
                  );
                })}
              </div>
            </div>
          </Layout>
        </>
      )}
    </Layout>
  );
};

export default MyTransaction;
