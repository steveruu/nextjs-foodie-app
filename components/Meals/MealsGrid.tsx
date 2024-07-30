import classes from "./MealsGrid.module.css";
import MealItem from "./MealItem";

export default function MealsGrid({ meals }: any) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal: any) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}