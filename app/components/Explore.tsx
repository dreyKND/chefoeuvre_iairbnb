import ExploreCard from "./ExploreCard";
import { getExplore } from "../outils/api";
import { ExploreData } from "../types/app";
import MainHeading from "./header/MainHeading";

const Explore = async () => {
    const exploreData: ExploreData = await getExplore();
    console.log(exploreData);

    return (
        <section className=" pt-6">
            <div className=" container">
                <MainHeading title="Explore Nearby"/>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {exploreData.map((item) => (
                        <ExploreCard
                            key={item.img}
                            img={item.img}
                            distance={item.distance}
                            location={item.location}
                        />
                    ))}

                </div>



            </div>
        </section>
    )
}
export default Explore;