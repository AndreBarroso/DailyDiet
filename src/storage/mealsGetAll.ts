import AsyncStorag from "@react-native-async-storage/async-storage"
import { MEALS_COLECTION, MealType } from "./storageConfig"


export const mealsGetAll = async () => {
    const itemsStorage = await AsyncStorag.getItem(MEALS_COLECTION)
    return itemsStorage ? JSON.parse(itemsStorage) as MealType[]: [] as MealType[]
}