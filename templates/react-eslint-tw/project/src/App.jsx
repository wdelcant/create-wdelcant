function App() {
  const name = 'React Eslint Tailwind';

  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
      <header className="text-xl font-bold leading-[4rem] text-center">
        {name}
      </header>
      <h2 className="text-2xl font-bold text-center">Hello World 👋</h2>
      <section className="py-8"></section>
      <footer className="text-center leading-[4rem] opacity-70">
        © {new Date().getFullYear()} {name}
      </footer>
    </main>
  );
}

export default App;
