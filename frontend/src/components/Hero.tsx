export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6">

      <div className="flex w-full items-center justify-between gap-24">

        <div className="max-w-xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            AI Interview Preparation
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Master Coding Interviews Through Progressive AI Guidance
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-600">
            Learn algorithms through hints, visual explanations and guided
            reasoning instead of instantly revealing the answer.
          </p>

          <button
            className="mt-10 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800"
            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Try Interactive Demo
          </button>

        </div>

        <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-900 p-8 shadow-xl">

          <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Progressive Guidance
          </p>

          <div className="space-y-5">

            <div className="flex items-center justify-between rounded-lg border border-green-500/30 bg-green-500/10 px-5 py-3">
              <span className="font-medium text-white">Problem</span>
              <span className="text-green-400">✓</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-green-500/30 bg-green-500/10 px-5 py-3">
              <span className="font-medium text-white">Hint</span>
              <span className="text-green-400">✓</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-zinc-700 px-5 py-3">
              <span className="text-zinc-400">Visualization</span>
              <span className="text-zinc-500">Locked</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-zinc-700 px-5 py-3">
              <span className="text-zinc-400">Pseudocode</span>
              <span className="text-zinc-500">Locked</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-zinc-700 px-5 py-3">
              <span className="text-zinc-400">Solution</span>
              <span className="text-zinc-500">Locked</span>
            </div>

          </div>

          <div className="mt-8 rounded-xl bg-zinc-800 p-5">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Learning Score
            </p>

            <p className="mt-2 text-4xl font-bold text-yellow-400">
              ★★★★☆
            </p>

            <p className="mt-2 text-zinc-400">
              Solved after using only one hint.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}