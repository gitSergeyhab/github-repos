import { FC } from "react";
import { Language, Repo } from "../../types";
import "./style.css";
import { getStringDate } from "../../utils";
import { ColorMarker } from "../color-marker";
import { languageColor } from "../../const";
import { StarButton } from "../star-button";

export const RepoItem: FC<Repo> = ({
  description,
  language,
  name,
  topics,
  updated_at,
  visibility,
  html_url,
  id,
}) => {
  return (
    <div className="repo-list__item repo-item">
      <div className="repo-item__block">
        <div className="repo-item__name">
          <a href={html_url} className="repo-item__link">
            {name}
          </a>
          <span className="repo-item__visibility">{visibility}</span>
        </div>
        <p className="repo-item__description">{description}</p>
        {!!topics.length && (
          <ul className="repo-item__topic-list">
            {topics.map((topic, i) => (
              <li className="repo-item__topic-item" key={i}>
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="repo-item__block">
        <StarButton onClick={() => console.log(`click ${id}`)} />
        <div className="repo-item__date">
          Updated on {getStringDate(updated_at)}
        </div>
        {!!language && (
          <div className="repo-item__language">
            <ColorMarker color={languageColor[language as Language]} />
            <span>{language}</span>
          </div>
        )}
      </div>
    </div>
  );
};
