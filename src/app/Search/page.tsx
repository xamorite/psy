"use client"

import FilterButton from "@/components/filterBtn";
import StudySkeleton from "@/components/studies/study-skeleton";
import StudyList from "@/components/studies/StudyList";
import { Button } from "@/components/ui/button";
import { useGetStudyLists } from "@/hooks/use-get-studyView";
import { DocumentState } from "@/lib/validators/document-validator";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { useGetSearchReasult } from "@/hooks/use-get-searchResults";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import NotFound from "@/components/NotFound";


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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<DocumentState>({
    region: ["European", "Northern Africa", "Southern Africa", "Eastern Africa", "Western Africa", "Central"],
    genomic: ["GWAS", "Candidate Gene", "Familial Linkage", "Epigenetics", "Expression", "Microbiome", "Others", "Undefined"],
    disorder: ["Mood", "Pyschotic", "Substance", "Depression", "Anxiety", "PTSD", "Neurodevelopmental", "Suicide", "Others"],
    article: ["Case Report", "Research Study", "Systematic Review"],
    year: ["2024", "2023", "2022", "2021", "2020"]
  });

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

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

  const { data: studies, isLoading, isError } = useGetStudyLists();

  const { data: searches, isLoading: isSearching, isError: isSearchingError } = useGetSearchReasult(searchTerm, debouncedSearchTerm);


  const allResults = searches !== undefined ? searches : studies;
  console.log("allResult", allResults);

  return (
    <div className="w-full flex flex-col mx-auto mb-10">

      {/* <h1 className=" text-2xl lg:text-4xl font-bold">Search</h1> */}

      <div className="w-3/5 lg:max-w-2xl flex flex-col mx-auto mt-10 lg:mt-16 space-y-3">
        <div className="flex items-center justify-center ring-1 ring-gray-500 focus-within:ring-gray-400 rounded-md">
          <Search
            className='size-5 ml-4 text-gray-700 group-hover:text-gray-900 dark:text-white dark:group-hover:text-white'
            aria-hidden='true'
          />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border-0 dark:text-white dark:placeholder:text-white'
            placeholder='Search for titles'
            autoComplete="off"
          />
        </div>

      </div>

      <div className='flex gap-6 mx-4 lg:mx-10 mt-20'>
        <div className='sticky top-0 z-40 w-80 h-fit shrink space-y-10'>
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

        <div className="w-full flex flex-col gap-6">
          <div>
            {(isLoading || isSearching) ? (
              <div></div>
            ) : (allResults && allResults.length > 0) ? (
              <h1 className="text-2xl lg:text-2xl font-bold">{allResults.length} Results</h1>
            ) : null}
          </div>

          {(isLoading || isSearching) ? (
            new Array(10)
              .fill(null)
              .map((_, i) => <StudySkeleton key={i} />)
          ) : (isError || isSearchingError) ? (
            <div className="flex items-center col-span-3">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <p className="flex text-sm font-medium text-gray-900">Something went wrong</p>
            </div>
          ) : (allResults && allResults.length > 0) ? (
            allResults?.map((study, i: number) => (
              <StudyList key={i} study={study} />
            ))
          ) : (
            <NotFound searchTerm={searchTerm} />
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
