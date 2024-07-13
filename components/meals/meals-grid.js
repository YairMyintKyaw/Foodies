import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealGrid({ meals }) {
  return <ul className={classes.meals}>
    {meals.map(meal => <li key={meals.id}>
      <MealItem {...meal}/>
    </li>)}
  </ul>
}