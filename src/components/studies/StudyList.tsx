import { Study } from "@/types/studyViewList";


interface studyListProps {
    study: Study
}

const StudyList = ({ study }: studyListProps) => {

    // console.log(study);
    

    return (
        <div key={study.id} className="w-full bg-rose-200">
            <div className="">
                {study.title}
            </div>
        </div>
    );
}

export default StudyList;