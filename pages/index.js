import Head from "next/head";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="aspect-square w-1/2">
        <h1 className="text-6xl font-black">
          Johns Hopkins Science Olympiad Invitational
        </h1>
      </div>
      <div className="relative aspect-square w-1/2">
        <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
      </div>
    </div>
  );
};

export default Index;
