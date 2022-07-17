export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="container mx-auto px-12 lg:px-16 py-12" 
    >
      {children}
    </section>
  );
}
