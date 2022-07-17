import Image from "next/image";

export default function Card({ url, name, title }) {
  return (
    <div>
      <div className="relative aspect-square w-full">
        <Image
          className="rounded-t-lg"
          src={url}
          alt={`${name}, ${title}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="rounded-b-lg bg-blue-dark p-4 text-center">
        <h2 className="text-lg text-white">{name}</h2>
        <h2 className="text-white text-opacity-75">{title}</h2>
      </div>
    </div>
  );
}
