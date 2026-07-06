const impactMetrics = [
  {
    value: "3L",
    label: "Tickets Managed",
  },
  {
    value: "10+",
    label: "Cross-Functional Teams",
  },
  {
    value: "25+",
    label: "Business Stakeholders",
  },
  {
    value: "5",
    label: "Power BI Dashboards",   
  },
];

export function ImpactCards() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-8 w-full">
      {impactMetrics.map((metric, index) => (
        <div
          key={index}
         className="
          rounded-2xl
          border
          border-blue-500/20
          bg-white/5
          backdrop-blur-md
          px-6
          py-5
          overflow-visible
          min-w-0
          transition-all
          duration-300
          hover:border-blue-500/60
          hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
          hover:-translate-y-1
        "
        >
          <h3 className="text-[28px] md:text-3xl leading-none font-bold whitespace-nowrap bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            {metric.value}
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}