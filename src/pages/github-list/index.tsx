import { RepoList } from "../../components/repo-list";
import { useFetchRepos } from "../../hooks/use-fetch-repos";

export default function GithubList() {
  const { repos, status } = useFetchRepos(40);

  if (status === "loading") {
    return <p className="app__loading">Loading...</p>;
  }

  if (status === "error" || !repos) {
    return <p className="app__error">Error</p>;
  }

  return (
    <section>
      <h1 className="app__title">Repositories</h1>
      <RepoList repos={repos} />
    </section>
  );
}
