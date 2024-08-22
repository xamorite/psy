import SearchField from "@/components/searchfield";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  return (
    <div className="mx-auto">
        <div className="mx-auto text-center mt-[10vh]">
      {/* <h1 className=" text-2xl lg:text-4xl font-bold">Search</h1> */}
      <SearchField />
      <Button variant="link">Use Advanced Search</Button>
    </div>
    </div>
  );
};

export default SearchPage;
