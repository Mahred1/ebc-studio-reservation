"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import { revalidatePath } from "next/cache";
import { approveReservation, handleReview } from "../actions";

function Reservation({ Fullname, time, date, reservationId, status }) {
  // const router = useRouter();
  // async function handleReview() {
  //   if (reservationId && status)
  //     router.replace(`/admin/review/${reservationId}`);
  //   revalidatePath(`/admin/`);
  // }
  return (
    <div className="flex justify-between mt-6 border-b-2 pb-2 border-[#bebebe] w-[80%] mx-auto">
      <div>
        <p>{Fullname}</p>
        <p className="font-semibold text-lg">
          Date: <span className="font-light text-lg">{date}</span>
        </p>
        <p className="font-semibold text-lg">
          Time: <span className="font-light text-lg">{time}</span>
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <form action={handleReview}>
          <input type="hidden" name="reservationId" value={reservationId} />
          <Button style="fallback">Review</Button>
        </form>
        <form action={approveReservation}>
          <input type="hidden" name="reservationId" value={reservationId} />
           <Button className={`${status === "approved"&&"cursor-not-allowed"}`} disabled={status === "approved"} style="action">
          {status === "approved" ? "Approved" : "Approve"}
        </Button>
        </form>
       
      </div>
    </div>
  );
}

export default Reservation;
