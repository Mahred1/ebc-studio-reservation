"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

function Reservation({ Fullname, time, date, reservationId, status }) {
  const router = useRouter();
console.log(reservationId)
  function handleReview(){
    router.replace(`/admin/review/${reservationId}`)
  }
  return (
    <div className="flex justify-between mt-6 w-[80%] mx-auto">
      <div>
        <p>{Fullname}</p>
        <p className="font-semibold text-lg">
          Date: <span className="font-light text-lg">{date}</span>
        </p>
        <p className="font-semibold text-lg">
          Time: <span className="font-light text-lg">{time}</span>
        </p>
      </div>
      <div className="flex gap-3">
        <Button onClick={handleReview} style="fallback">Review</Button>
        <Button disabled={status === "approved"} style="action">
          {status === "approved" ? "Approved" : "Approve"}
        </Button>
      </div>
    </div>
  );
}

export default Reservation;
