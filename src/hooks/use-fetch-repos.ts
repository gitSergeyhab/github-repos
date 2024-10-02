import { useEffect, useState } from "react";
import { Repo, Status } from "../types";

const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  "https://api.github.com/users/gitSergeyhab/repos";

export const useFetchRepos = (count: number) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    setStatus("loading");
    fetch(BASE_URL + `?per_page=${`${count}&page=1&sort=updated`}`)
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
