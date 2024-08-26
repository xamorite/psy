import { Study } from "@/types/studyViewList";

interface studyListProps {
  study: Study;
}

const StudyList = ({ study }: studyListProps) => {
  // console.log(study);

  return (
    <div key={study.id} className="w-full my-5 text-xl">
      <div className="">
        {study.article_type.map((article, index) => (
          <div key={index} className="text-[#5A3A31]">
            {article.article_name}
          </div>
        ))}
        {study.title}
        <p className="text-muted-foreground">
          {study.journal_name},{study.year}
        </p>
        <p className="text-muted-foreground">{study.lead_author}</p>
      </div>
    </div>
  );
};

export default StudyList;
