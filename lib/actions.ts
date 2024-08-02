"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: FormDataEntryValue | null, charLimit: number = 100) => {
    return (
        !text ||
        text.toString().trim() === "" ||
        text.toString().trim().length < 3 ||
        text.toString().trim().length > charLimit
    );
};

export async function shareMeal(prevState : any, formData: FormData) {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image") as any,
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    if (
        isInvalidText(meal.title, 75) ||
        isInvalidText(meal.summary, 200) ||
        isInvalidText(meal.instructions, 1500) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email, 50) ||
        !meal.creator_email?.toString().includes("@") ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            status: 400,
            message: "Invalid input",
        }
    }

    await createMeal(meal as any);
    revalidatePath("/meals"); // tells Next.js to revalidate the cache for the /meals page - caching
    redirect("/meals");
}
