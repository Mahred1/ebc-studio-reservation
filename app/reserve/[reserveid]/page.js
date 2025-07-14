
import Detail from "@/app/_components/Detail"
import supabase from "@/supabase"
import Image from "next/image"
import Link from "next/link"


async function Page({params}) {


 const { data, error } = await supabase
    .from('Rservations')
    .select('*')
    .eq('reservationId', params.reserveid)  
    .single()  
    

 
  if (error) {
    console.error('Error fetching row:', error)

  }

    return (

       
       <div className="mt-10 max-w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link className="self-center mb-3  " href={"/"}>
        <Image width={70} height={70} src="/ebc-logo.png" alt="EBC" />
      </Link>
      <h1 className="text-center text-xl font-medium ">
        Reservation report   ID-{data.reservationId}
      </h1> 
        </div>
        <button
          className={`${data.status === "review" && "bg-[#ffbf1d]"} ${
            data.status === "approved" && "bg-[#3E9837]"
          } ${
            data.status === "denied" && "bg-[#F54B4B]"
          } px-6 py-5 font-md text-lg  font-semibold text-white tracking-widest hover:scale-[103%]`}
        >
          {data.status === "review" ? "Under " + data.status : data.status}
        </button>
        </div>
        
        

        <div className="mt-10 ">
        {Object.entries(data).map(([key,value])=>(key!=='created_at'&&key!=='id')&&<Detail title={key} key={key} detail={String(value)} />)}
        </div>

        </div>
    )
}

export default Page
