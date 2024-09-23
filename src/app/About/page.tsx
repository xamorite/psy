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
            <h2 className="text-3xl pt-6 lg:text-5xl font-semibold text-[#5A3A31] text-center">
              About us
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl text-start ">
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
        <div className="flex flex-col justify-evenly   gap-y-10">
          <h2 className="text-3xl pt-6 lg:text-5xl font-semibold ">
            Key Features
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 border-gray-500 border-2 rounded-md  ">
              <h4 className="text-3xl pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                Unified Metadata Repository
              </h4>
              <p className="font-medium text-muted-foreground md:text-xl">
                A comprehensive collection of curated psychiatric genomics
                metadata, detailing study origin, genomic categories, and
                psychiatric disorders studied.
              </p>
            </div>
            <div className="p-5 border-gray-500 border-2 rounded-md  ">
              <h4 className="text-3xl pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                Exploratory Data Analytics
              </h4>
              <p className="font-medium text-muted-foreground md:text-xl">
                A comprehensive collection of curated psychiatric genomics
                metadata, detailing study origin, genomic categories, and
                psychiatric disorders studied.
              </p>
            </div>
            <div className="p-5 border-gray-500 border-2 rounded-md  ">
              <h4 className="text-3xl pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                Study Submission Platform
              </h4>
              <p className="font-medium text-muted-foreground md:text-xl">
                A seamless interface for researchers to submit newly published
                studies, with an integrated review system to ensure the quality
                of shared data disorders studied.
              </p>
            </div>
            <div className="p-5 border-gray-500 border-2 rounded-md  ">
              <h4 className="text-3xl pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                Advanced Search and Filter
              </h4>
              <p className="font-medium text-muted-foreground md:text-xl">
                A Powerful search and filter functionality based on region,
                disorder, and genomic category to provide users with relevant
                and detailed study information.
              </p>
            </div>
            <div className="p-5 border-gray-500 border-2 rounded-md  ">
              <h4 className="text-3xl pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                Events and News Hub
              </h4>
              <p className="font-medium text-muted-foreground md:text-xl">
                A platform for the latest news, events, preprints, and
                publications related to psychiatric genomics research in Africa.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-20">
          <Image
            src="/genOne.svg"
            alt=""
            width={100}
            height={100}
            className="w-[80vw] lg:w-[30vw] rounded-lg  object-cover object-center "
          />
          <div className="space-y-4">
            {" "}
            <h1 className="text-3xl pt-6 lg:text-5xl font-semibold ">
              Our objectives
            </h1>
            <h5>Our objectives are to:</h5>
            <ul className="space-y-3 text-xl font-bold">
              <li>
                Provide open and equitable access to African psychiatric
                genomics metadata.
              </li>
              <li>
                Offer an intuitive platform for real-time research analysis and
                data visualization.
              </li>
              <li>
                Support researchers in sharing and disseminating new findings.
              </li>
              <li>
                Centralize events, publications, and news in the African
                psychiatric genomics field.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-5">
            <h1 className="text-3xl pt-6 lg:text-5xl font-semibold">
              Our vision
            </h1>
            <Image
              src="/dna.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[20vw] rounded-lg  object-cover object-center "
            ></Image>
          </div>
          <div className="  text-2xl mt-auto items-center ">
            <p className="">
              Through PsychGenAfrica, we envision a future where African
              psychiatric genomics research is fully integrated into the global
              research landscape, fostering collaboration and enhancing the
              quality and impact of studies on neuropsychiatric disorders. The
              portal aims to bridge gaps in data access and support equitable
              advancements in psychiatric research across the continent.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl text-center my-32 space-y-10 ">
        <h2 className="text-2xl font-semibold">Technology and Development</h2>
        <p className="font-medium  md:text-xl ">
          PsychGenAfrica is built using cutting-edge technology to ensure a
          user-friendly experience. It leverages Next.js for a responsive and
          dynamic frontend, Django for the backend APIs, and PostgreSQL for
          robust data management. The portal also integrates D3.js and Chart.js
          for advanced data visualization.
        </p>
      </div>
    </main>
  );
}
