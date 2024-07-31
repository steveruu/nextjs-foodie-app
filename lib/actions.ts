"use server";
import { redirect } from "next/navigation";
import { createMeal } from "./meals";

const isInvalidText = (text: FormDataEntryValue | null) => {
    return (
        !text ||
        text.toString().trim() === "" ||
        text.toString().trim().length < 3 ||
        text.toString().trim().length > 50
    );
};

const invalidInstructions = (instructions: FormDataEntryValue | null) => {
    return (
        !instructions ||
        instructions.toString().trim() === "" ||
        instructions.toString().trim().length < 10 ||
        instructions.toString().trim().length > 1500
    );
};

export async function shareMeal(formData: FormData) {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image") as any,
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        invalidInstructions(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email?.toString().includes("@") ||
        !meal.image ||
        meal.image.size === 0
    ) {
        throw new Error("Invalid input. TODO: dodelat");
        return {
            status: 400,
            message: "Invalid input. ",
        }
    }

    await createMeal(meal as any);
    redirect("/meals");
}
