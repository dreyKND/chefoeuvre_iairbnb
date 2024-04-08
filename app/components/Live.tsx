import { LiveData } from "../types/app";
import { getLive } from "../outils/api";
import LiveCard from "./LiveCards";

const Live = async() => {
    const liveData:LiveData = await getLive();
    return(
        <section className=" pt-6">
            <div className=" container">
                {liveData: map(item => (
                    <LiveCard 
                    key={item.img}
                    img={item.img}
                    title={item.title}  />

                ))}

            </div>

        </section>

    )
}
export default Live;