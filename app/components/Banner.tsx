import Image from "next/image";

const Banner = () => {
    return(
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
            <Image
                src="/images/lighting.png"
                alt="banner-img"
                layout="fill"
                objectFit="cover"
            />
            <div className=" absolute top-1/2 w-full text-center">
                <p className=" text-sm sm:text-lg text-white">Not sure what to choose? Perfect</p>
                <button type="button" className=" text-black bg-white px-10 py-4 shadow-md rounded-full font-bold"> Iam flexible</button>

            </div>
        </div>
    )
}

export default Banner;
