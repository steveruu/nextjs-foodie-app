import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1212)); // TODO: remove

    return db.prepare("SELECT * FROM meals").all(); // all when fetch, run when insert
}

export function getMeal(slug: string) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // "?" brani proti SQL injections - better-sqlite3 feature
}
