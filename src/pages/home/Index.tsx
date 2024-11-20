


import { Benefits } from "./componets/benefits";
import { Categories } from "./componets/categories";
import { Courses } from "./componets/courses";
import { Extra } from "./componets/extra";
import { Features } from "./componets/features";
import { Hero } from "./componets/Hero";
import { HowItWorks } from "./componets/howitworks";
import StudentComp from "./componets/student";
// import { Student } from "./componets/StudentComp";
import { Tutor } from "./componets/tutor";

export function Home(){
    return (
        <>
        
        <Hero/>
        <Courses/>
        <Benefits/>
        <Categories/>
        <Features/>
        <HowItWorks/>
        <Extra/>
        <StudentComp/>
        <Tutor/>

        </>

    )


}