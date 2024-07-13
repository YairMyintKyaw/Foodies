import Link from "next/link"
import classes from "./page.module.css"
import MealGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react";
import Loading from "../loading-out";

async function Meals(){
  const meals = await getMeals();
  return <MealGrid meals={meals}/>
}

export default function MealsPage(){
  return <>
    <header className={classes.header}>
      <h1>
        Deliciouse meals, created 
        <span className={classes.highlight}>by you</span> 
      </h1>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun.
      </p>
      <p className={classes.cta}>
        <Link href="meals/share">Share Your Favourite Recipe</Link>
      </p>
    </header>
    <main>
      <Suspense fallback={<Loading/>}>
        <Meals/>
      </Suspense>
    </main>
  </>
}