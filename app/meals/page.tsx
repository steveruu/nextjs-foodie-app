import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import { CgSpinner } from "react-icons/cg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Meals | NextFood",
  description: "Browse all recipes shared by the NextFood community",
  openGraph: {
    title: "All Meals | NextFood",
    description: "Browse all recipes shared by the NextFood community"
  },
  keywords: "food, nextjs, recipes",
  themeColor: "#ff9b05",
  creator: "@steveruu",
  robots: "index, follow"
};

async function MealLoad() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />
}

export default function Meals() {
  // tohle je serverova komponenta - muzeme primo nacitat data z DB

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
        <p>Discover new recipes and share your favorites with the world. It is easy and fun.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<>
          <h2 className={classes.loading}>Loading meals...</h2>
          <CgSpinner className={classes.spin} size={75} />
        </>}>
          <MealLoad />
        </Suspense>
      </main>
    </>
  );
}