import Card from "../components/Card";

export default function Board() {
  return (
    <div className="grid w-full gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card url="/adam.png" name="Adam Luo" title="Director" />
      <Card url="/daniel.jpg" name="Daniel Jin" title="Director" />
      <Card url="/ria.jpg" name="Ria Jha" title="Director" />
      <Card url="/margaret.png" name="Margaret Li" title="Director" />
    </div>
  );
}
