import Image from "next/image";

function AdminCard({ children, src, detail, type }) {
  return (
    <div
      className={`${
        type === "total" && "bg-primary-200"
      }
       ${
        type === "review" && "bg-[#E8B01D]"
      }
       ${
        type === "denied" && "bg-[#F54B4B]"
      }
       ${
        type === "approved" && "bg-[#3E9837]"
      }
      
      w-[220px] h-[150px] rounded-[11px] py-5 px-5  `}
    >
      <Image width={25} height={25} alt={"approved"} src={src} />
      <p className="text-white mt-2 font-light text-lg tracking-wider">
        {detail}
      </p>
      <span className="text-white mt-1 font-bold text-4xl">{children}</span>
    </div>
  );
}

export default AdminCard;
