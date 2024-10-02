import { FC } from "react";
import { Repo } from "../../types";
import { RepoItem } from "../repo-item";
import "./style.css";

export const RepoList: FC<{ repos: Repo[] }> = ({ repos }) => {
  return (
    <ul className="repo-list">
      {repos.map((repo) => (
        <li key={repo.id}>
          <RepoItem {...repo} />
        </li>
      ))}
    </ul>
  );
};
