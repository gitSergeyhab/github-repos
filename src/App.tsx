import "./App.css";
import { RepoList } from "./components/repo-list";
import { useFetchRepos } from "./hooks/use-fetch-repos";

function App() {
  const { repos, status } = useFetchRepos(40);
  console.log(repos, status);

  if (status === "loading") {
    return <p className="app__loading">Loading...</p>;
  }

  if (status === "error" || !repos) {
    return <p className="app__error">Error</p>;
  }

  return (
    <section>
      <h1>Repositories</h1>
      <RepoList repos={repos} />
    </section>
  );
}

export default App;
