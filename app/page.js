import Image from "next/image";
import Button from "./_components/Button";

export default function Home() {
  return (
    <main>
      <div>
      <Image width={285} height={285} src="/ebc-logo.jpg" alt="EBC" />
      </div>
      <h1>Welcome to <span>EBC</span></h1>
      <p>Rent the Best Studio – Elevate Your Production Today!</p>
      <div>
        <Button>Reserve a studio</Button>
      </div>
    </main>
  );
}
