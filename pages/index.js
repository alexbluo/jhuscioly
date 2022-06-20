import Head from "next/head";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="w-full md:w-1/2">
        <h2 className="text-6xl font-black ">
          Johns Hopkins Science Olympiad Invitational
        </h2>
      </div>
      <div className="relative aspect-square w-full md:w-1/2">
        <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
      </div>
    </div>
  );
};

export default Index;
