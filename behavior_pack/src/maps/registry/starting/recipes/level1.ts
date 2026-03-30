import { startingMap } from "../map";
import { cheeseburgerRecipe } from "../../../../constants/recipes/western/cheeseburger";
import { chickenPastaCarbonaraRecipe } from "../../../../constants/recipes/western/chickenPastaCarbonara";
import { chickenSaladRecipe } from "../../../../constants/recipes/western/chickenSalad";
import { chickenAlfredoRecipe } from "../../../../constants/recipes/western/chickenAlfredo";

startingMap.recipeManager.addRecipe(cheeseburgerRecipe);
startingMap.recipeManager.addRecipe(chickenAlfredoRecipe);
startingMap.recipeManager.addRecipe(chickenPastaCarbonaraRecipe);
startingMap.recipeManager.addRecipe(chickenSaladRecipe);
