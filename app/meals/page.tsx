import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid";

export default function Meals() {
  // tohle je serverova komponenta, muzeme primo nacitat data z DB


  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
        <p>Discover new recipes and share your favorites with the world. It is easy and fun.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}