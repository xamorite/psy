import { getDetails } from "@/action/details";
import { Button } from "@/components/ui/button";
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
import { Study } from "@/types/studyViewList";
import Link from "next/link";
import { notFound } from "next/navigation";

interface pageProps {
  params: {
    studyId: number;
  };
}

const Detail = async ({ params }: pageProps) => {
  const { studyId } = params;

  const detail: Study = await getDetails(studyId);

  if(!detail) {
    return notFound()
  }

  return (
    <div key={detail?.id} className="w-full flex justify-center p-5">
      <section className="hidden w-60 shrink-0 pr-4 space-y-4 lg:block">
        <h1 className="text-xl font-semibold">Research Overview</h1>
        <div className="space-y-3">
          <div className="text-primary font-medium">Journal Name</div>
          <p className="text-sm">{detail?.journal_name}</p>
          <div className="text-primary font-medium">PMID</div>
          <p className="text-sm">{detail?.pmid}</p>
          <div className="text-primary font-medium">Year</div>
          <p className="text-sm">{detail?.year}</p>
          <div className="text-primary font-medium">Biological Modal</div>
          <div className="text-sm">{detail?.biological_modalities?.map((v, i) => (
            <div key={i} className="text-sm">{v}</div>
          ))}</div>
          <div className="text-primary font-medium">Biological Risk</div>
          <p className="text-sm">{detail?.biological_risk_factor_studied}</p>
          <div className="text-primary font-medium">Disorder</div>
          <div>
            {detail?.disorder?.map((disorder) => (
              <div key={disorder.id} className="text-sm">
                {disorder.disorder_name}
              </div>
            ))}
          </div>
          <div className="text-primary font-medium">Phenotype</div>
          <p className="text-sm">{detail?.phenotype}</p>
          <div className="text-primary font-medium">Region</div>
          <div>
            {detail?.research_regions?.map((region, i) => (
              <div key={i} className="text-sm">
                <p>{region}</p>
              </div>
            ))}
          </div>
          <div className="text-primary font-medium">Sample Size</div>
          <p className="text-sm">{detail?.sample_size}</p>
          <div className="text-primary font-medium">Age Range</div>
          <p className="text-sm">{detail?.age_range}</p>
          <div className="text-primary font-medium">Gender</div>
          <p className="text-sm">{detail?.male_female_split}</p>
          <div className="text-primary font-medium">Genetic Source Material</div>
          <p className="text-sm">{detail?.genetic_source_materials?.map((g, i) => (
            <div key={i} className="text-sm">
              {g}
            </div>
          ))}</p>
          <div className="text-primary font-medium">Article Type</div>
          <div>
            {detail?.article_type?.map((article) => (
              <div key={article.id} className="text-sm">
                {article.article_name}
              </div>
            ))}
          </div>
          <div className="text-primary font-medium">Study Design</div>
          <p className="text-sm">{detail?.study_designs}</p>
        </div>
      </section>

      <div className="max-w-4xl flex flex-col gap-2">
        <h2 className="font-bold text-xl lg:text-3xl tracking-tight">{detail?.title}</h2>
        <p className="text-muted-foreground underline">{detail?.lead_author}</p>
        <p className="text-blue-700 text-sm">Share publication</p>
        <div className="h-1 w-full bg-slate-500"></div>
        <h3 className="text-primary text-xl">Abstract</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className="text-primary text-xl">Introduction</h3>
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

        <div className="mx-auto mt-20 space-x-3 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Related Search</Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-xl font-semibold my-5">Related Search</SheetTitle>
                {/* <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription> */}
              </SheetHeader>
              <div className="space-y-4">
                {detail?.recommended_articles?.map((article) => (
                  <div
                    key={article.id}
                    className="hover:underline hover:cursor-pointer"
                  >
                    <Link
                      href={`/Search/${article.id}`}
                      className="text-blue-600">
                      {article.title}
                    </Link>
                    <p>{article.lead_author}</p>
                    <p className="text-muted-foreground">{article.year}</p>
                  </div>
                ))}
              </div>
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
                  Make changes to your profile here. Click save when you&apos;re
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

      <section className="hidden w-64 shrink-0 pl-6 space-y-4 lg:block">
        <h1 className="text-xl font-semibold">Related Search</h1>
        <div className="text-sm flex flex-col gap-4">
          {detail?.recommended_articles?.map((article) => (
            <div
              key={article.id}
              className="hover:underline hover:cursor-pointer "
            >
              <Link
                href={`/Search/${article.id}`}
                className="font-medium text-blue-600">
                {article.title}
              </Link>
              <p className="text-gray-800">{article.lead_author}</p>
              <p className="text-muted-foreground">{article.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Detail;
