import { useEffect, useState } from "react";
import { Repo, Status } from "../types";

export const useFetchRepos = (count?: number) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(`api?per_page=${count}&page=1&sort=updated`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Ошибка загрузки данных");
        }
      })
      .then((data) => {
        setStatus("success");
        setRepos(data);
      })
      .catch(() => setStatus("error"));
  }, [count]);

  return { repos, status };
};
