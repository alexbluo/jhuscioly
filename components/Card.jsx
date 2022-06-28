import Image from "next/image";

export default function Card({ url, name, title }) {
  return (
    <div className="rounded-lg bg-blue-dark text-center">
      <div className="relative aspect-square w-full">
        <Image
          className="rounded-t-lg"
          src={url}
          alt={`${name}, ${title}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className="mt-2 text-xl font-semibold text-white">{name}</h2>
      <h2 className="text-md mb-2 text-white">{title}</h2>
    </div>
  );
}
