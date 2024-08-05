import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
   <div className="flex h-screen max-h-screen">
    <section className="container">
      <div className="sub-container max-w-[496px]">
        <Image src="/assets/icons/logo-full.svg" alt="CarePulse Logo" width={200} height={200} />
      </div>
    </section>
   </div>
  );
}
