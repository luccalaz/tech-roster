import { getTechnologies } from '@/tools/DataManager';
import { Technology, Course } from '@/tools/data.model';
import Link from 'next/link';

export default async function Tech({ params }:{ params: { id:string } }) {
    const technologies:Technology[] = await getTechnologies();

    // find technology by id
    const technology:(Technology | undefined) = technologies.find(item => item._id === params.id);

    // ---------------------------------- render to the DOM
    if (technology == undefined) {
        return (
            <div className="pt-2">
                <span className="text-4xl font-bold">:(</span>
                <span className="pl-4 text-2xl">This technology does not exist</span>
            </div>
        );     
    } else {
        return(
            <div className="pt-2">
                <div className="font-bold">
                    <Link href="/"><i className="fas fa-arrow-left pr-2 text-xl hover:text-accent"></i></Link>
                    Details for {technology?.name}
                </div>
                <div className="max-w-3xl pb-4">{technology?.description}</div>

                <div className="pb-1">Difficulty:</div>
                <div className="pb-2">
                    {technology != undefined ?
                        <>
                            <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 1) ? "text-accent" : "text-greyed-out"}`}></i>
                            <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 2) ? "text-accent" : "text-greyed-out"}`}></i>
                            <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 3) ? "text-accent" : "text-greyed-out"}`}></i>
                            <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 4) ? "text-accent" : "text-greyed-out"}`}></i>
                            <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 5) ? "text-accent" : "text-greyed-out"}`}></i>
                        </>
                        : 
                        <></>
                    }
                </div>

                <div className="py-2">Required in courses:</div>
                {technology?.courses.map((course:Course, n:number) => 
                    <div key={n} className="ml-8 pl-2.5 py-2 border-l-4 border-solid border-accent">
                        <div className="font-bold">{course.code} {course.name}</div>
                    </div>
                )}
            </div>
        );
    }
}