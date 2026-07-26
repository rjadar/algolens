export default function Features() {
  const features = [
    {
      title: "Progressive Hints",
      description:
        "Receive hints one step at a time instead of instantly revealing the answer.",
      icon: "💡",
    },
    {
      title: "AI Visualizations",
      description:
        "Understand complex algorithms through interactive visual explanations.",
      icon: "📊",
    },
    {
      title: "Learning Analytics",
      description:
        "Track your strengths, weaknesses and improvement over time.",
      icon: "📈",
    },
    {
      title: "Interview Mode",
      description:
        "Practice realistic coding interviews with AI-powered feedback.",
      icon: "🤖",
    },
  ];

  return (
    <section id="features" className="py-28">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Everything You Need to Crack Interviews
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-600">
          AlgoLens teaches you how to think like an interviewer, not just how
          to memorize solutions.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}