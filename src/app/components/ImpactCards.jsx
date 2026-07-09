export function ImpactCards() {
  const stats = [
    { value: "3L", label: "Tickets Managed" },
    { value: "10+", label: "Cross-Functional Teams" },
    { value: "25+", label: "Business Stakeholders" },
    { value: "5", label: "Power BI Dashboards" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className="border p-4 rounded-xl w-[120px] flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-colors"
          style={{ background: "var(--glass)", borderColor: "var(--glass-border)" }}
        >
          {/* Apply the gradient to the number */}
          <h3 
            className="text-2xl font-bold tracking-tight"
            style={{ 
              background: "linear-gradient(135deg, #2979ff 0%, #7c3aed 50%, #00e5ff 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent" 
            }}
          >
            {stat.value}
          </h3>
          <p className="text-[10px] mt-1 uppercase tracking-wider font-medium leading-tight" style={{ color: "var(--muted-foreground)" }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
