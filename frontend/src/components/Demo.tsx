import { useState } from "react";

export default function Demo() {
  const [guidanceLevel, setGuidanceLevel] = useState<number | null>(null);

  const stars = [
    "",
    "★★★★☆",
    "★★★☆☆",
    "★★☆☆☆",
    "★☆☆☆☆",
  ];

  const scores = [
    0,
    100,
    75,
    50,
    25,
  ];

  const messages = [
    "",
    "You solved this problem after using only one hint.",
    "You needed a visualization to understand the approach.",
    "You relied on pseudocode before solving.",
    "You revealed the full solution.",
  ];

  return (
    <section id="demo" className="min-h-screen py-24">
      <h2 className="mb-4 text-center text-5xl font-bold text-white">
        Interactive Demo
      </h2>

      <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-zinc-400">
        Experience how AlgoLens guides you through coding interviews without
        immediately revealing the solution.
      </p>

      <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg transition-all duration-300 hover:border-zinc-500 hover:shadow-xl">

        {/* Header */}
        <div className="border-b border-zinc-700 p-6">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            LeetCode Medium
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            141. Linked List Cycle
          </h3>
        </div>

        {/* Problem */}
        <div className="border-b border-zinc-700 p-6">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Problem
          </h4>

          <p className="leading-relaxed text-zinc-300">
            There is a cycle in a linked list if there is some node in the list
            that can be reached again by continuously following the next
            pointer. Internally, <span className="font-semibold">pos</span> is
            used to denote the index of the node that tail's next pointer is
            connected to. Return{" "}
            <span className="font-semibold">true</span> if there is a cycle in
            the linked list. Otherwise, return{" "}
            <span className="font-semibold">false</span>.
          </p>
        </div>

        {/* Demo */}
        {guidanceLevel !== null ? (
          <div className="p-10 text-center">

            <p className="text-lg font-semibold text-green-400">
              ✓ Accepted
            </p>

            <h2 className="mt-3 text-5xl text-yellow-400">
              {stars[guidanceLevel]}
            </h2>

            <h3 className="mt-4 text-2xl font-bold text-white">
              Excellent Work!
            </h3>

            <p className="mt-3 text-zinc-400">
              {messages[guidanceLevel]}
            </p>

            <p className="mt-6 text-lg font-semibold text-green-400">
              Learning Score +{scores[guidanceLevel]}
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-xl border border-zinc-700 bg-zinc-800 p-6 text-left">

              <h4 className="mb-6 text-lg font-semibold text-white">
                Guidance Used
              </h4>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span className="text-zinc-300">Hint</span>
                  <span className={guidanceLevel >= 1 ? "text-green-400" : "text-zinc-500"}>
                    {guidanceLevel >= 1 ? "✓ Used" : "Skipped"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-300">Visualization</span>
                  <span className={guidanceLevel >= 2 ? "text-green-400" : "text-zinc-500"}>
                    {guidanceLevel >= 2 ? "✓ Used" : "Skipped"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-300">Pseudocode</span>
                  <span className={guidanceLevel >= 3 ? "text-green-400" : "text-zinc-500"}>
                    {guidanceLevel >= 3 ? "✓ Used" : "Skipped"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-300">Solution</span>
                  <span className={guidanceLevel >= 4 ? "text-green-400" : "text-zinc-500"}>
                    {guidanceLevel >= 4 ? "✓ Used" : "Skipped"}
                  </span>
                </div>

              </div>

            </div>

            <button
              className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
              onClick={() => setGuidanceLevel(null)}
            >
              Try Again
            </button>

          </div>
        ) : (
          <div className="p-10 text-center">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Learning Mode Demo
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              How much guidance did you need?
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
              Select the furthest level of guidance you needed to solve this
              problem.
            </p>

            <div className="mt-8 grid gap-4">

              <button
                onClick={() => setGuidanceLevel(1)}
                className="text-white rounded-lg border border-zinc-700 px-6 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
              >
                Hint
              </button>

              <button
                onClick={() => setGuidanceLevel(2)}
                className="text-white rounded-lg border border-zinc-700 px-6 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
              >
                Visualization
              </button>

              <button
                onClick={() => setGuidanceLevel(3)}
                className="text-white rounded-lg border border-zinc-700 px-6 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
              >
                Pseudocode
              </button>

              <button
                onClick={() => setGuidanceLevel(4)}
                className="text-white rounded-lg border border-zinc-700 px-6 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
              >
                Full Solution
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}