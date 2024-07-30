import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/Images/ImageSlideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextFood for the next generation</h1>
            <p>Taste the difference with our new food sharing platform </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>NextFood is a platform that allows sharing your favorite recipes with the world. It's a place to discover new recipes, and to connect with other food lovers.</p>
          <p>NextFood is built on the Ethereum blockchain, and uses smart contracts to ensure that the recipes are safe and secure.</p>
        </section>
      </main>
    </>
  );
}
