import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const meal : Meal = getMeal(params.slug) as Meal;
  
  if (!meal) return notFound();

  return {
    title: meal.title + " | NextFood",
    description: meal.summary
  }
}

export default function Meal({ params }: { params: { slug: string } }) {
  const meal: Meal = getMeal(params.slug) as Meal;

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }} />
      </main>
    </>
  );
}