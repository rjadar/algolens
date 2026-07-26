export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">

      <h1 className="text-3xl font-bold tracking-tight">
        AlgoLens
      </h1>

      <div className="flex items-center gap-8 text-zinc-600">

        <a
          href="#features"
          className="transition-colors duration-200 hover:text-black"
        >
          Features
        </a>

        <a
          href="#demo"
          className="transition-colors duration-200 hover:text-black"
        >
          Demo
        </a>

        <a
          href="#dashboard"
          className="transition-colors duration-200 hover:text-black"
        >
          Dashboard
        </a>

      </div>

      <button className="rounded-xl bg-black px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800">
        Start Solving
      </button>

    </nav>
  );
}