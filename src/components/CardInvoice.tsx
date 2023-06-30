import { FC } from "react";

interface PropsInvoice {
  createdat: string;
  name: string;
  date?: string;
  start?: string;
  end?: string;
  price?: string;
  address?: string;
  duration?: string;
  status?: string;
  total_amount?: string;
  payment_method?: string;
  va_number?: string;
}
const CardInvoice: FC<PropsInvoice> = (props) => {
  const {
    createdat,
    name,
    date,
    start,
    end,
    address,
    duration,
    status,
    price,
    total_amount,
    va_number,
    payment_method,
  } = props;
  const fee_admin = 2500;
  return (
    <div className=" flex flex-col justify-center text-primary">
      <p className="text-start font-bold">CREATED AT : {createdat}</p>
      <div className="flex-col items-start">
        <p className="font-bold">INFO</p>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-start">
            <p>Venue : {name}</p>
            <p>Location : {address}</p>
            <p>Booking Date : {date}</p>
            <p>From : {start}</p>
            <p>To : {end}</p>
          </div>
        </div>
      </div>
      <div className="flex-col items-start">
        <p className="font-bold">PAYMENT</p>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-start">
            <p>Payment Code : {va_number}</p>
            <p>Payment Method : {payment_method}</p>
            <p>
              Status : <span className="text-warning">{status}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col items-start">
        <p className="font-bold">DETAILS</p>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <p>Price : {price}</p>
            <p>Duration : {duration} Hour</p>
            <p>Fee Admin : {fee_admin}</p>
            <p className="font-semibold">Total Amount : {total_amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardInvoice;
