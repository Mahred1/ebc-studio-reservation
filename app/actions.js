"use server";

import supabase from "@/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export async function checkReservation(prevState, formData) {
  const reservationId = formData.get("reservationId")?.toString().trim();
  try {
    const { data, error } = await supabase
      .from("Rservations")
      .select("*")
      .eq("reservationId", reservationId)
      .single();

    if (error || !data) {
      return { error: "Reservation not found. Please check your ID." };
    }

    // console.log(data)
  } catch (err) {
    console.error("Database error:", err);
    return {
      error: "An error occurred while verifying your reservation. Try again!",
    };
  }

  redirect(`/reserve/${reservationId}`);
}

export async function handleReview(formData) {
  const reservationId = formData.get("reservationId");
  redirect(`/admin/review/${reservationId}`);
}

export async function denyReservation(formData) {
  const reservationId = formData.get("reservationId");
  
  const {  error } = await supabase
  .from('Rservations')
  .update({ status: 'denied' })
  .eq('reservationId', reservationId)
  .select()

  if(error){
    toast.error(error.message)
  }
  revalidatePath(`admin/review/${reservationId}`)
  revalidatePath(`reserve/${reservationId}`)
}
