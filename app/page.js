import Image from "next/image";
import Button from "./_components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center ">
      <div>
        <Image
          className="self-center mb-5  "
          width={250}
          height={250}
          src="/ebc-logo.jpg"
          alt="EBC"
        />
      </div>
      <h1 className="font-medium text-4xl tracking-wider">
        Welcome to <span className="text-primary-100 font-bold">EBC</span>
      </h1>
      <p className="mt-0.5 text-xl font-normal ">
        Rent the Best Studio – Elevate Your Production Today!
      </p>
      <div className="flex gap-10 mt-7 mb-[130px]">
        <Link href={"/reserve"}>
          <Button>Reserve a studio</Button>
        </Link>
        <Link href={'/check'}>
          <Button type="secondary">Check Reservation</Button>
        </Link>
      </div>
    </main>
  );
}
