
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center text-slate-900 dark:text-slate-100">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-blue-600/10 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-[1200px] px-6">

        {/* Header */}
        <header className="sticky top-6 z-50 mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
          <h2 className="text-xl font-bold">Quiz<span className="text-primary">.</span></h2>

          <div className="flex gap-3">
            <button className="text-sm font-bold">Login</button>
            <button className="rounded-xl bg-primary px-6 py-2 text-white">Sign Up</button>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center gap-12 py-24 text-center">
          <h1 className="text-5xl font-black sm:text-6xl">
            Test Your Knowledge Here
          </h1>

          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            Challenge yourself with quizzes across topics and compete globally.
          </p>

          <div className="flex gap-4">
            <button className="rounded-xl bg-primary px-8 py-3 text-white">
              Start Quiz
            </button>
            <button className="rounded-xl border px-8 py-3">
              Categories
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Our Platform
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-xl border bg-white/5">
              <h3 className="font-bold">Diverse Topics</h3>
              <p className="text-sm text-slate-400">
                Explore many quiz categories.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-white/5">
              <h3 className="font-bold">Real-time Results</h3>
              <p className="text-sm text-slate-400">
                Get instant feedback.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-white/5">
              <h3 className="font-bold">Leaderboard</h3>
              <p className="text-sm text-slate-400">
                Compete globally.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-slate-500">
          © 2026 Quiz Platform
        </footer>

      </div>
    </div>
  );
}