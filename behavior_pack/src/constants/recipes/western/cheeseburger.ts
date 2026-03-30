import { ItemId } from "../../itemId";

export const cheeseburgerRecipe = {
    name: "bcc.cook:cheeseburger",
    ingredients: [
        { item: ItemId.burgerBun, quantity: 2 },
        { item: ItemId.cheeseSlice, quantity: 1 },
        { item: ItemId.cookedBeefPatty, quantity: 1 },
        { item: ItemId.lettuceLeaf, quantity: 1 },
        { item: ItemId.tomatoSlice, quantity: 1 },
    ],
    duration: 1,
};
