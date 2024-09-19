import SearchPublication from "@/components/searchPublications";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center p-2 lg:p-8">
      {/* <NavBar/>
      <LandingPage/> */}

      <section className="max-w-5xl flex flex-col  gap-24 mt-48 ">
        <div className="flex flex-col  lg:flex-row justify-evenly text-center lg:text-start  gap-x-10">
          <div className="mx-auto">
            <Image
              src="/dna.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[30vw] rounded-lg  object-cover object-center "
            />
          </div>
          <div className="lg:w-[35vw] flex flex-col justify-center gap-6">
            <h2 className="text-3xl pt-6 lg:text-5xl font-semibold text-[#5A3A31] text-end">
              About us
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl text-end ">
              The Psychiatric Genomics Africa Portal (PsychGenAfrica)is a
              pioneering initiative from the PGCAfrica working group, designed
              to serve as a centralized platform for psychiatric genomics
              research focused on the African population. By establishing a
              unified metadata repository, PsychGenAfrica enables researchers,
              healthcare professionals, and the public to access vital
              information and explore groundbreaking research in
              neuropsychiatric disorders across Africa.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row  justify-evenly text-center lg:text-start gap-x-10">
          <div className=" lg:w-[35vw] flex flex-col justify-center gap-6">
            <h2 className="text-3xl pt-6 lg:text-5xl font-semibold ">
              Our Mission
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl ">
              PsychGenAfrica aims to democratize access to psychiatric genomics
              data by providing free, open, and curated metadata from studies
              involving African participants or research conducted within the
              continent. The platform seeks to facilitate realtime analysis,
              promote collaborative research, and highlight significant trends
              and findings in the field of psychiatric genomics in Africa.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/genOne.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[30vw] rounded-lg object-cover object-center "
            />
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row justify-evenly text-center lg:text-start  gap-x-10">
          <div className="mx-auto">
            <Image
              src="/dna.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[30vw] rounded-lg  object-cover object-center "
            />
          </div>
          <div className="lg:w-[35vw] flex flex-col justify-center gap-6 ">
            <h2 className="text-3xl pt-6 lg:text-5xl font-semibold ">
              Visualize and Analyze Instantly
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl ">
              Uncover a comprehensive overview of existing studies in African
              psychiatric genomics, organized for your convenience.
            </p>
            <Button className="w-fit px-16 py-7 text-lg self-center lg:self-start">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <div className="max-w-4xl text-center my-32 space-y-10 ">
        <h2 className="text-2xl lg:text-6xl font-semibold">
          Share Your Innovations
        </h2>
        <p className="font-medium max-w-2xl md:text-xl ">
          Contribute to the community by submitting your latest studies and
          sharing your discoveries with peers.
        </p>
        <Button className="w-fit px-16 py-7 text-lg">Submit a paper</Button>
      </div>
    </main>
  );
}
