import { LiveItem } from "../types/app";
import Image from "next/image";

type LiveCardProps = LiveItem;
const LiveCard = ({title,img}:LiveCardProps) => {
    return(
        <div>
            <div>
                <Image src={img} alt="LiveCard"/>
            </div>

        </div>
    )

}
export default LiveCard;