import Image from "next/legacy/image";
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import NavBar from "@/app/components/NavBar";
const Header = () => {
    return (
        <header className=" sticky top-0 z-50 bg-white shadow-md py-5">
            <div className=" container grid grid-cols-3 ">
            <Link href="/" className=" relative flex items-center h-10 my-auto">
                <Image src="https://www.immo-casa.fr/wp-content/uploads/2023/07/logo-casa-agence-immobiliere-caen-rouille.svg" alt="logo-image"
                layout="fill"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
   />
                   

            </Link>
            <SearchBar/>
            <NavBar/>
            </div>
            
        </header>
    )


};
export default Header;