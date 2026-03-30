import { startingMap } from "../map";
import { vegetableSoupRecipe } from "../../../../constants/recipes/western/vegetableSoup";
import { tomatoSoupRecipe } from "../../../../constants/recipes/western/tomatoSoup";
import { spaghettiMeatballsRecipe } from "../../../../constants/recipes/western/spaghettiMeatballs";
import { simpleSpaghettiRecipe } from "../../../../constants/recipes/western/simpleSpaghetti";
import { simplePastaCarbonaraRecipe } from "../../../../constants/recipes/western/simplePastaCarbonara";

startingMap.recipeManager.addRecipe(simplePastaCarbonaraRecipe);
startingMap.recipeManager.addRecipe(simpleSpaghettiRecipe);
startingMap.recipeManager.addRecipe(spaghettiMeatballsRecipe);
startingMap.recipeManager.addRecipe(tomatoSoupRecipe);
startingMap.recipeManager.addRecipe(vegetableSoupRecipe);
