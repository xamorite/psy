"use client";
import DetailList from "@/components/studies/DetailList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetStudyLists } from "@/hooks/use-get-detail-View";

import { Link } from "lucide-react";

interface pageProps {
  params: {
    studyId: number;
  };
}

const Detail = ({ params }: pageProps) => {
  const { studyId } = params;
  const { data: detail, isLoading, isError } = useGetStudyLists(studyId);

  return (
    <div key={detail?.id} className="flex  p-5">
      <section className="w-[30vw] pr-4 space-y-4 hidden lg:block">
        <h1 className="text-xl ">Research Overview</h1>
        <div className="space-y-3">
          <h1 className="text-primary">Journal Name</h1>
          <p className="text-sm">{detail?.journal_name}</p>
          <h1 className="text-primary">PMID</h1>
          <p className="text-sm">{detail?.pmid}</p>
          <h1 className="text-primary">Year</h1>
          <p className="text-sm">{detail?.year}</p>
          <h1 className="text-primary">Biological Modal</h1>
          {/* <div className="text-sm">{detail?.biological_modalities.map((v,i) => (
              <div key={i} className="text-sm">{v}</div>
            ))}</div> */}
          <h1 className="text-primary">Biological Risk</h1>
          <p className="text-sm">{detail?.biological_risk_factor_studied}</p>
          <h1 className="text-primary">Disorder</h1>
          <p className="text-sm">PTSD and Appetitive Agression</p>
          <h1 className="text-primary">Phenotype</h1>
          <p className="text-sm">{detail?.phenotype}</p>
          <h1 className="text-primary">Region</h1>
          <div>
            {/* {detail?.research_regions?.map((region) => (
              <div key={region} className="text-sm">
                {region ?? "none"}
              </div>
            ))} */}
          </div>
          <h1 className="text-primary">Sample Size</h1>
          <p className="text-sm">{detail?.sample_size}</p>
          <h1 className="text-primary">Age Range</h1>
          <p className="text-sm">{detail?.age_range}</p>
          <h1 className="text-primary">Gender</h1>
          <p className="text-sm">Male Only</p>
          <h1 className="text-primary">Geetic Source Material</h1>
          <p className="text-sm">saliva</p>
          <h1 className="text-primary">Article Type</h1>
          <div>
            {detail?.article_type?.map((article) => (
              <div key={article.id} className="text-sm">
                {article.article_name}
              </div>
            ))}
          </div>
          <h1 className="text-primary">Study Design</h1>
          <p className="text-sm">{detail?.study_designs}</p>
        </div>
      </section>
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl">{detail?.title}</h1>
        <p className="text-muted-foreground underline">{detail?.lead_author}</p>
        <p className="text-blue-700 text-sm">Share publication</p>
        <div className="h-1 w-full bg-slate-500"></div>
        <h2 className="text-primary text-xl">Abstract</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 className="text-primary text-xl">Introduction</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <h6 className="text-muted-foreground hover:cursor-pointer hover:text-primary hover:underline">
          Continue reading
        </h6>
        <div className="ms-auto mt-20 space-x-3 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Related Search</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Research Overview</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className=" ps-4 space-y-4">
                <h1 className="text-xl ">Related Search</h1>
                <div className="hover:underline hover:cursor-pointer">
                  <h3 className="text-blue-600">
                    Genetic variation in neuropeptide Y interacts with childhood
                    trauma to influence anxiety sensitivity
                  </h3>
                  <p>Womersley JS</p>
                  <p className="text-muted-foreground">2021</p>
                </div>
                <div className="hover:underline hover:cursor-pointer">
                  <h3 className="text-blue-600">
                    Genetic variation in neuropeptide Y interacts with childhood
                    trauma to influence anxiety sensitivity
                  </h3>
                  <p>Womersley JS</p>
                  <p className="text-muted-foreground">2021</p>
                </div>
                <div className="hover:underline hover:cursor-pointer">
                  <h3 className="text-blue-600">
                    Genetic variation in neuropeptide Y interacts with childhood
                    trauma to influence anxiety sensitivity
                  </h3>
                  <p>Womersley JS</p>
                  <p className="text-muted-foreground">2021</p>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Research Overview</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Research Overview</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>

              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <section className="w-[30vw] ps-4 space-y-4  hidden lg:block">
        <h1 className="text-xl ">Related Search</h1>
        <div className="text-sm">
          {detail?.recomended_articles?.map((article) => (
            <div
              key={article.id}
              className="hover:underline hover:cursor-pointer"
            >
              <h3 className="text-blue-600">{article.title}</h3>
              <p>{article.lead_author}</p>
              <p className="text-muted-foreground">{article.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Detail;
