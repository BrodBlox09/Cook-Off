import { startingMap } from "../map";
import { simpleAlfredoRecipe } from "../../../../constants/recipes/western/simpleAlfredo";
import { hamburgerRecipe } from "../../../../constants/recipes/western/hamburger";
import { grilledCheeseRecipe } from "../../../../constants/recipes/western/grilledCheese";
import { chickenSoupRecipe } from "../../../../constants/recipes/western/chickenSoup";
startingMap.recipeManager.addRecipe(chickenSoupRecipe);
startingMap.recipeManager.addRecipe(grilledCheeseRecipe);
startingMap.recipeManager.addRecipe(hamburgerRecipe);
startingMap.recipeManager.addRecipe(simpleAlfredoRecipe);
