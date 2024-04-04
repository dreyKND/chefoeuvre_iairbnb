import ExploreCard from "./ExploreCard";
import { getExplore } from "../outils/api";
import { ExploreData } from "../types/app";

const Explore = async () => {
    const exploreData: ExploreData = await getExplore();
    console.log(exploreData);

    return (
        <section className=" pt-6">
            <div className=" container">
                <h1 className=" text-4xl font-semibold mb-5">Explore Nearby</h1>
                {exploreData.map((item) => (
                    <ExploreCard
                        key = {item.img}
                        img= {item .img} 
                        distance={item.distance}
                        location={item .location}
                        />


                ))}
            </div>
        </section>
    )
}
export default Explore;