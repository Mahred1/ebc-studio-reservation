"use server";

import supabase from "@/supabase";
import { redirect } from "next/navigation";

export  async function checkReservation(prevState,formData) {
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
     console.error('Database error:', err);
    return { error: 'An error occurred while verifying your reservation' };
  }

  redirect(`/reserve/${reservationId}`);
}
