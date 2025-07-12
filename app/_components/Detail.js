function Detail({title,detail}) {
    return (
        <div>
           <span className="font-semibold text-[#787878] text-xl">{title}: </span>
            <span className={`text-xl ml-1 underline ${title==="reservationId"&&"text-red-500 font-bold"}`}>{title==="reservationId" ?detail+ " - Important! keep safe":detail}</span>
        </div>
    )
}

export default Detail
