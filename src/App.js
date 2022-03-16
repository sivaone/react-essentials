import './App.css';

function Header(props) {
  console.log(props);
  return(
      <header>
        <h1>{props.name} IT Company</h1>
      </header>
  );
}

function Main(props) {
  return(
      <section>
        <p>We create {props.adjective} apps</p>
        <ul style={{textAlign: "left"}}>
          {props.technologies.map((tech) => <li key={tech.id}>{tech.title}</li>)}
        </ul>
      </section>
  );
}

function Footer(props) {
  return(
      <footer>
        <h4>{props.year} copyright</h4>
      </footer>
  );
}

const technologies = [
    "React",
    "Java",
    "Go",
    "Python",
    "JavaScript"
];

const techObjects = technologies.map((tech, i) => ({id: i, title: tech}));

function App() {
  return (
    <div className="App">
      <Header name="Siva's"/>
      <Main adjective="best" technologies={techObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
