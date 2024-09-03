import { Study } from "@/types/studyViewList";
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



interface detailListProps {
    detail: Study;
}

const DetailList = ({ detail }: detailListProps) => {
    console.log(detail);

    return (
       <div key={detail.id} className="bg-orange-300 w-full">
        <h1>uibiuooij</h1>
        {detail.pmid}
       </div>
    );
};

export default DetailList;
