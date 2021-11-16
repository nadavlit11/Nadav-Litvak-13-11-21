import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "../weatherSlice";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);
  let favoritesHtml = [];
  for (const key in favorites) {
    favoritesHtml.push(<span>{favorites[key].Temperature.Metric.Value}</span>);
  }

  return <div>{favoritesHtml}</div>;
}
