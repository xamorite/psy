"use client"

import FilterButton from "@/components/filterBtn";
import SearchField from "@/components/searchfield";
import StudyList from "@/components/studies/StudyList";
import { Button } from "@/components/ui/button";
import { useGetStudyLists } from "@/hooks/use-get-studyView";
import { DocumentState } from "@/lib/validators/document-validator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


const REGIONS = {
  id: "region",
  name: "region",
  options: [
    { value: "European", label: "European" },
    { value: "Northern Africa", label: "Northern Africa" },
    { value: "Southern Africa", label: "Southern Africa" },
    { value: "Eastern Africa", label: "Eastern Africa" },
    { value: "Western Africa", label: "Western Africa" },
    { value: "Central", label: "Central" },
  ] as const
}

const GENOMIC_CATEGORY = {
  id: "Genomic Category",
  name: "Genomic Category",
  options: [
    { value: "GWAS", label: "GWAS" },
    { value: "Candidate Gene", label: "Candidate Gene" },
    { value: "Familial Linkage", label: "Familial Linkage" },
    { value: "Epigenetics", label: "Epigenetics" },
    { value: "Expression", label: "Expression" },
    { value: "Microbiome", label: "Microbiome" },
    { value: "Others", label: "Others" },
    { value: "Undefined", label: "Undefined" }
  ] as const

}

const DISORDERS = {
  id: "disorder",
  name: "Disorder",
  options: [
    { value: "Mood", label: "Mood" },
    { value: "Pyschotic", label: "Pyschotic" },
    { value: "Substance", label: "Substance" },
    { value: "Depression", label: "Depression" },
    { value: "Anxiety", label: "Anxiety" },
    { value: "PTSD", label: "PTSD" },
    { value: "Neurodevelopmental", label: "Neurodevelopmental" },
    { value: "Suicide", label: "Suicide" },
    { value: "Others", label: "Others" }
  ] as const

}

const ARTICLE = {
  id: "article",
  name: "Article",
  options: [
    { value: "Case Report", label: "Case Report" },
    { value: "Research Study", label: "Research Study" },
    { value: "Systematic Review", label: "Systematic Review" }
  ] as const

}

const YEAR = {
  id: "year",
  name: "Year",
  options: [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ] as const

}



const SearchPage = () => {
  const [filter, setFilter] = useState<DocumentState>({
    region: ["European", "Northern Africa", "Southern Africa", "Eastern Africa", "Western Africa", "Central"],
    genomic: ["GWAS", "Candidate Gene", "Familial Linkage", "Epigenetics", "Expression", "Microbiome", "Others", "Undefined"],
    disorder: ["Mood", "Pyschotic", "Substance", "Depression", "Anxiety", "PTSD", "Neurodevelopmental", "Suicide", "Others"],
    article: ["Case Report", "Research Study", "Systematic Review"],
    year: ["2024", "2023", "2022", "2021", "2020"]
  });

  // console.log(filter)

  const applyArrayFilter = ({
    category, value
  }: {
    category: keyof typeof filter,
    value: string
  }) => {
    const isFilterApplied = filter[category].includes(value as never)

    if (isFilterApplied) {
      setFilter((prev) => ({
        ...prev,
        [category]: prev[category].filter((v) => v !== value)
      }))
    } else {
      setFilter((prev) => ({
        ...prev,
        [category]: [...prev[category], value]
      }))
    }
  }

  const { data: studies, isLoading } = useGetStudyLists();

  return (
    <div className="w-full flex flex-col mx-auto mb-10">
      <div className="mx-auto text-center mt-[10vh]">
        {/* <h1 className=" text-2xl lg:text-4xl font-bold">Search</h1> */}
        <SearchField />
        <Button variant="link">Use Advanced Search</Button>
      </div>
      <div className='flex gap-6 mx-4 lg:mx-10 mt-20'>
        <div className='w-80 shrink space-y-10'>
          <h2 className='text-4xl font-semibold'>Filter by:</h2>
          <div className='flex gap-4 lg:gap-6'>
            <FilterButton name="Clear Filters" type="ghost" />
            <FilterButton name="Save Filters" type="outline" />
          </div>

          <div>
            <h3 className='font-medium'>Year(s)</h3>
            <div className='pt-6'>
              <ul className='space-y-4'>{YEAR.options.map((option, optionIdx) => (
                <li key={option.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`year-${optionIdx}`}
                    onChange={() => {
                      applyArrayFilter({
                        category: "year",
                        value: option.value
                      })
                    }}
                    checked={filter.year.includes(option.value)}
                    className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500'
                  />
                  <label
                    htmlFor={`year-${optionIdx}`}
                    className='ml-3 text-sm text-gray-600'>
                    {option.label}
                  </label>
                </li>
              ))}
              </ul>
              <div className='flex items-center mt-4 group cursor-pointer'>
                <p className='text-sm text-muted-foreground group-hover:text-gray-900'>show more</p>
                <ChevronDown className='ml-2 w-4 h-4 text-gray-400 group-hover:text-gray-500' />
              </div>
            </div>
          </div>

          <div>
            <h3 className='font-medium'>Region(s)</h3>
            <div className='pt-6'>
              <ul className='space-y-4'>{REGIONS.options.map((option, optionIdx) => (
                <li key={option.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`region-${optionIdx}`}
                    onChange={() => {
                      applyArrayFilter({
                        category: "region",
                        value: option.value
                      })
                    }}
                    checked={filter.region.includes(option.value)}
                    className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500'
                  />
                  <label
                    htmlFor={`region-${optionIdx}`}
                    className='ml-3 text-sm text-gray-600'>
                    {option.label}
                  </label>
                </li>
              ))}</ul>
            </div>
          </div>

          <div>
            <h3 className='font-medium'>Genomic Category</h3>
            <div className='pt-6'>
              <ul className='space-y-4'>{GENOMIC_CATEGORY.options.map((option, optionIdx) => (
                <li key={option.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`genomic-${optionIdx}`}
                    onChange={() => {
                      applyArrayFilter({
                        category: "genomic",
                        value: option.value
                      })
                    }}
                    checked={filter.genomic.includes(option.value)}
                    className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500'
                  />
                  <label
                    htmlFor={`genomic-${optionIdx}`}
                    className='ml-3 text-sm text-gray-600'>
                    {option.label}
                  </label>
                </li>
              ))}</ul>
            </div>
          </div>

          <div>
            <h3 className='font-medium'>Disorder(s)</h3>
            <div className='pt-6'>
              <ul className='space-y-4'>{DISORDERS.options.map((option, optionIdx) => (
                <li key={option.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`disorder-${optionIdx}`}
                    onChange={() => {
                      applyArrayFilter({
                        category: "disorder",
                        value: option.value
                      })
                    }}
                    checked={filter.disorder.includes(option.value)}
                    className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500'
                  />
                  <label
                    htmlFor={`disorder-${optionIdx}`}
                    className='ml-3 text-sm text-gray-600'>
                    {option.label}
                  </label>
                </li>
              ))}</ul>
            </div>
          </div>

          <div>
            <h3 className='font-medium'>Article Type</h3>
            <div className='pt-6'>
              <ul className='space-y-4'>{ARTICLE.options.map((option, optionIdx) => (
                <li key={option.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`article-${optionIdx}`}
                    onChange={() => {
                      applyArrayFilter({
                        category: "article",
                        value: option.value
                      })
                    }}
                    checked={filter.article.includes(option.value)}
                    className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500'
                  />
                  <label
                    htmlFor={`article-${optionIdx}`}
                    className='ml-3 text-sm text-gray-600'>
                    {option.label}
                  </label>
                </li>
              ))}</ul>
            </div>
          </div>
        </div>


        <div>
        {isLoading ? (
            <div></div>
          ) : (studies && studies.length > 0) ? ( 
            <h1 className="text-2xl lg:text-2xl font-bold">{studies.length} Results</h1>
          ) : (
            <div>Can not fetch page</div>
          )}
          {isLoading ? (
            <div>loading</div>
          ) : (studies && studies.length > 0) ? ( 
            studies?.flatMap((study, i: number) => (
              <StudyList key={i} study={study} />
            ))
          ) : (
            <div></div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
