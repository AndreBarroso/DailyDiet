import AsyncStorag from "@react-native-async-storage/async-storage"
import { MEALS_COLECTION, MealType } from "./storageConfig"
import { mealsGetAll } from "./mealsGetAll"

export const mealCreate = async (meal: MealType) => {
    const allMeals = await mealsGetAll()
    const toStorage = JSON.stringify([...allMeals, meal])
    await AsyncStorag.setItem(MEALS_COLECTION, toStorage)
}