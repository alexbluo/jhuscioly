import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

const Index = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex min-w-full flex-col gap-4 text-center lg:w-1/2 lg:min-w-0 lg:text-left">
          {/* TODO: infinitely animate gradients? */}
          <div className="text-center text-6xl font-black tracking-wide text-transparent lg:text-right ">
            <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text">
              Johns Hopkins
            </h2>
            <h2 className="bg-gradient-to-r from-green-300 to-blue-light bg-clip-text">
              Science Olympiad Invitational
            </h2>
          </div>

          <h3 className="text-center text-2xl font-bold text-blue-dark text-opacity-75 lg:text-right">
            JHU Homewood Campus, February 11
          </h3>
          <div className="flex justify-center lg:justify-end">
            <Button>
              {/* TODO: link to google form */}
              <a>Register</a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square w-full lg:w-1/2">
          <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default Index;
