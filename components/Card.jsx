import Image from "next/image";

export default function Card({ url, name, title }) {
  return (
    <div className="relative aspect-square w-full">
      <Image
        className="rounded-xl"
        src={url}
        alt={`${name}, ${title}`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
