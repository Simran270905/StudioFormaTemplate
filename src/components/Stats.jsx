const Stats = () => {
  return (
    <section className="py-24 px-10 md:px-24 font-playfair">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center">
        {[
          ["10+", "Years"],
          ["120+", "Projects"],
          ["35+", "Cities"],
          ["100%", "Satisfaction"],
        ].map(([v, l], i) => (
          <div key={i}>
            <p className="text-3xl font-light">{v}</p>
            <p className="text-sm text-[#6B6B6B]">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
