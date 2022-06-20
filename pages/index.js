import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

const Index = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex w-full flex-col gap-4 text-center md:w-1/2 md:text-left">
          {/* TODO: infinitely animate gradients? */}
          <div>
            <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-right text-6xl font-black tracking-wide text-transparent ">
              Johns Hopkins
            </h2>
            <h2 className="bg-gradient-to-r from-green-300 to-blue-light bg-clip-text text-right text-6xl font-black tracking-wide text-transparent ">
              Science Olympiad Invitational
            </h2>
          </div>

          <h3 className="text-center text-2xl font-bold text-blue-300 lg:text-right">
            JHU Homewood Campus, February 11
          </h3>
          <div className="flex justify-center lg:justify-end">
            <Button>
              <a>Register</a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square w-full md:w-1/2">
          <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default Index;
