import { getAbout } from "@/action/about";
import SearchPublication from "@/components/searchPublications";
import { Button, buttonVariants } from "@/components/ui/button";
import { AboutPage } from "@/types/about";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const aboutArray: AboutPage[] = await getAbout(); // Assuming it returns an array

  if (!aboutArray || aboutArray.length === 0) {
    return notFound;
  }

  const about = aboutArray[0];

  return (
    <main className=" w-full flex flex-col items-center px-2 lg:p-8">
      {/* <NavBar/>
      <LandingPage/> */}

      <section className="max-w-5xl flex flex-col  gap-24  ">
        <div className="flex flex-col-reverse gap-y-10 bg-[#F5FDF9]  lg:flex-row justify-evenly text-center lg:text-start  lg:gap-x-10">
          <div className="mx-auto lg:ms-0">
            <Image
              src="/dna.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[30vw] rounded-lg  object-cover object-center "
            />
          </div>
          <div className="lg:w-[35vw] p-3 flex flex-col justify-center gap-6">
            <h2 className="text-3xl pt-6 lg:text-5xl font-semibold text-[#5A3A31] text-center">
              {about.title}
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl text-start ">
              {about.introduction}
            </p>
          </div>
        </div>
        <div className="flex border-[1px] border-gray-600 bg-[#FCF7F7] p-5 rounded-lg flex-col-reverse lg:flex-row  justify-evenly text-center lg:text-start gap-x-10">
          <div className=" lg:w-[35vw] flex flex-col justify-center gap-6">
            <h2 className="text-3xl pt-6 lg:text-5xl font-semibold ">
              {about?.mission?.map((m) => (
                <div key={m.id}>{m.title}</div>
              ))}
            </h2>
            <div className="font-medium text-muted-foreground md:text-xl ">
              {about?.mission?.map((m) => (
                <div key={m.id}>{m.content}</div>
              ))}
            </div>
          </div>
          <div className=" my-auto lg:ms-auto">
            <Image
              src="/mission.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[30vw] rounded-lg object-cover object-center "
            />
          </div>
        </div>
        <div className=" lg:border-[1px] border-gray-600 rounded-lg grid gap-y-10 lg:grid-cols-2">
          <div className="flex flex-col space-y-5">
            <div className="text-3xl text-center pt-6 lg:text-5xl font-semibold">
              {about?.vision?.map((m) => (
                <div key={m.id}>{m.title}</div>
              ))}
            </div>
            <Image
              src="/oneAbout.svg"
              alt=""
              width={100}
              height={100}
              className="w-[80vw] lg:w-[30vw] rounded-lg  object-cover object-center "
            ></Image>
          </div>
          <div className="  text-base my-auto items-center ">
            <div className="font-bold">
              {about?.vision?.map((m) => (
                <div key={m.id} className="text-sm">
                  {m.content}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly   gap-y-10">
          <h2 className="text-3xl pt-6 lg:text-5xl font-semibold ">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className=" grid lg:grid-cols-3 p-5 border-gray-500 border-2 rounded-md  ">
              <Image
                src="/layers.svg"
                alt=""
                width={50}
                height={50}
                className="
            
               rounded-lg  object-cover
                object-center my-auto mx-auto"
              />
              <div className="col-span-2">
                {" "}
                <h4 className=" pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                  Unified Metadata Repository
                </h4>
                <p className="font-medium text-muted-foreground md:text-xl">
                  A comprehensive collection of curated psychiatric genomics
                  metadata, detailing study origin, genomic categories, and
                  psychiatric disorders studied.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 p-5 border-gray-500 border-2 rounded-md  ">
              <Image
                src="/carbon_text-link-analysis.svg"
                alt=""
                width={50}
                height={50}
                className="
            
               rounded-lg  object-cover
                object-center my-auto mx-auto"
              />
              <div className="col-span-2">
                <h4 className=" pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                  Exploratory Data Analytics
                </h4>
                <p className="font-medium text-muted-foreground md:text-xl">
                  A comprehensive collection of curated psychiatric genomics
                  metadata, detailing study origin, genomic categories, and
                  psychiatric disorders studied.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 p-5 border-gray-500 border-2 rounded-md  ">
              <Image
                src="/Group.svg"
                alt=""
                width={50}
                height={50}
                className="
               rounded-lg  object-cover
                object-center my-auto mx-auto"
              />
              <div className="col-span-2">
                <h4 className=" pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                  Study Submission Platform
                </h4>
                <p className="font-medium text-muted-foreground md:text-xl">
                  A seamless interface for researchers to submit newly published
                  studies, with an integrated review system to ensure the
                  quality of shared data disorders studied.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 p-5 border-gray-500 border-2 rounded-md  ">
              <Image
                src="/mdi_magnify.svg"
                alt=""
                width={50}
                height={50}
                className="
               rounded-lg  object-cover
                object-center my-auto mx-auto"
              />
              <div className="col-span-2">
                <h4 className=" pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                  Advanced Search and Filter
                </h4>
                <p className="font-medium text-muted-foreground md:text-xl">
                  A Powerful search and filter functionality based on region,
                  disorder, and genomic category to provide users with relevant
                  and detailed study information.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 p-5 border-gray-500 border-2 rounded-md  ">
              <Image
                src="/Vector.svg"
                alt=""
                width={50}
                height={50}
                className="
               rounded-lg  object-cover
                object-center my-auto mx-auto"
              />
              <div className="col-span-2">
                <h4 className=" pt-6 lg:text-2xl font-semibold text-[#5A3A31] ">
                  Events and News Hub
                </h4>
                <p className="font-medium text-muted-foreground md:text-xl">
                  A platform for the latest news, events, preprints, and
                  publications related to psychiatric genomics research in
                  Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-20">
          <Image
            src="/genOne.svg"
            alt=""
            width={100}
            height={100}
            className="w-[80vw] lg:w-[30vw] rounded-lg  object-cover object-center "
          />
          <div className="space-y-4">
            <h1 className="text-3xl pt-6 lg:text-5xl font-semibold ">
              Our objectives
            </h1>
            <h5>Our objectives are to:</h5>

            <ul className="space-y-3 text-xl font-bold list-disc">
              {about?.objectives?.map((m) => (
                <li key={m.id}>{m.content}</li>
              ))}
              {/* <li>
                Offer an intuitive platform for real-time research analysis and
                data visualization.
              </li>
              <li>
                Support researchers in sharing and disseminating new findings.
              </li>
              <li>
                Centralize events, publications, and news in the African
                psychiatric genomics field.
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      <div className="max-w-4xl text-center my-32 space-y-10 ">
        <h2 className="text-2xl font-semibold">
          {" "}
          {about?.technology?.map((m) => (
            <div key={m.id}>{m.title}</div>
          ))}
        </h2>
        <div className="font-medium  md:text-xl ">
          {about?.technology?.map((m) => (
            <div key={m.id}>{m.content}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
