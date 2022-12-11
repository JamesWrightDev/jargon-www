import Image from "next/image";
import logo from "../public/Icon.svg";

export default function Home() {
  return (
    <>
      <div className="py-12">
        <div className="flex flex-col items-center">
          <Image
            className="mb-3"
            src={logo}
            alt="Picture of the author"
            width={75}
            height={75}
          />
          <h1 className="text-7xl font-sans text-center my-12 font-semibold text-black max-w-2xl">
            Make sense of all the Jargon
          </h1>

          <button className="bg-black border-solid border-2 border-red hover:bg-gray hover:text-black hover:border-black hover:border-1 text-gray font-bold py-4 px-12 text-2xl mt-12">
            Install Now
          </button>
        </div>
      </div>
    </>
  );
}
