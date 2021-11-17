import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../weatherSlice";
import { Container, Card } from "@mui/material";
import styles from "./Favorites.module.css";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);
  let favoritesHtml = [];
  for (const key in favorites) {
    favoritesHtml.push(
      <Card className={styles.favCard}>
        <div>{favorites[key].CityName}</div>
        <div>{favorites[key].Temperature.Metric.Value}</div>
      </Card>
    );
  }

  return (
    <Container id={styles.favoritesId} className={styles.favorites}>
      {favoritesHtml}
    </Container>
  );
}
