import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          <main
  id="home"
  className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center"
>
  <h1 className="text-7xl font-bold mb-4">
    Master Portfolio
  </h1>

  <p className="text-slate-400 text-xl">
    Building my digital identity, one component at a time.
  </p>
</main>
        </h1>
      </main>
    </>
  );
}

export default App;