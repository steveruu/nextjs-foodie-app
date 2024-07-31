import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import path from "node:path";

interface MealDB {
    slug: string;
    title: string;
    image: any;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}

const db = sql(path.resolve(__dirname, "meals.db"));

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1212)); // TODO: remove

    return db.prepare("SELECT * FROM meals").all(); // all when fetch, run when insert
}

export function getMeal(slug: string) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // "?" brani proti SQL injections - better-sqlite3 feature
}

export async function createMeal(meal: MealDB) {
    meal.slug = Date.now().toString().slice(0, 16) + "-" + slugify(meal.title?.toString(), { lower: true }); 
    meal.slug = meal.slug.slice(0, 64); // maximum character limit bude prostě 64 a nasrat
    meal.instructions = xss(meal.instructions.toString()); // sanitizace proti XSS
    // nvm tak tohle sanitizaci ani z okna nevidělo
    
    meal.instructions = meal.instructions.replaceAll("<", " ").replaceAll(">", " ");


    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug.slice(0, 16)}-${Date.now()}.${extension}`; // to avoid duplicate images

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed!");
        }
    });

    meal.image = `/images/${fileName}`;

    return db
        .prepare(
            `
            INSERT INTO meals 
                (title, summary, instructions, creator, creator_email, image, slug) 
            VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `
        )
        .run(meal);
}
