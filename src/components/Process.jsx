const steps = [
  "Spatial Study",
  "Concept & Geometry",
  "Material Language",
  "Execution",
  "Styling & Reveal",
];

const Process = () => {
  return (
    <section className="py-32 border-t border-b font-playfair">
      <div className="grid grid-cols-2 md:grid-cols-5 text-center">
        {steps.map((step, i) => (
          <div key={i} className="py-10 border-r last:border-r-0">
            <p className="text-2xl font-light mb-2">{`0${i + 1}`}</p>
            <p className="text-sm text-[#6B6B6B]">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
