import supabase from "@/supabase";
import Image from "next/image";
import Link from "next/link";
import AdminCard from "../_components/AdminCard";
import Reservation from "../_components/Reservation";

export const revalidate = 0;
async function Page() {
  let { data, error } = await supabase.from("Rservations").select("*");

  if (error) {
    console.log(error.message);
    return;
  }
  const total = data.length;
  const approved = data.filter((item) => item.status === "approved").length;
  const review = data.filter((item) => item.status === "review").length;
  const denied = data.filter((item) => item.status === "denied").length;
  console.log(total, approved, review, denied);
 
  return (
    <div>
      <div className="flex items-center justify-center">
        <Link className="self-center mb-3  " href={"/"}>
          <Image width={80} height={80} src="/ebc-logo.png" alt="EBC" />
        </Link>
        <h1 className="text-center text-2xl font-light ">
          Studio Reservation Dashboard
        </h1>
      </div>

      <div className="w-[80%] mx-auto flex gap-7 mt-10 justify-center">
        <AdminCard type={'total'} src="/total.png" detail={'Total Reservations'} >{total}</AdminCard>
        <AdminCard type={'review'} src="/review.png" detail={'Under Review'} >{review}</AdminCard>
        <AdminCard type={'denied'} src="/deny.png" detail={'Denied '} >{denied}</AdminCard>
        <AdminCard type={'approved'} src="/approved.svg" detail={'Approved'} >{approved}</AdminCard>
      </div>

      <div className="mt-20">
        {data.map(res=><Reservation Fullname={res.Fullname} reservationId={res.reservationId} status={res.status} date={res.Date} time={res.Time} key={res.reservationId} />)}
      </div>
    </div>
  );
}

export default Page;
