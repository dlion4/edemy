import { Categories } from "../home/componets/categories";
import { HeroCourse } from "./components/hero";
import { InfoCourse } from "./components/info";
import { PriceCourse } from "./components/price";




export function Course (){


    return(

        <>
            <HeroCourse/>
            <Categories/>
            <InfoCourse/>
            <PriceCourse/>
        
        </>

    )

}