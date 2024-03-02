function App() {

  const name = 'React Eslint Sass'

  return (
    <main>
      <header>{{name}}</header>
      <section>👋</section>
      <footer>
        © {new Date().getFullYear()} {{name}}
      </footer>
    </main>
  )
}

export default App
