// SPDX-License-Identifier: MIT
// Copyright (c) @brodblox09 & Contributors
// Contributors: @brodblox09
// See LICENSE.md file in the root folder, licenses/MIT.md, or https://opensource.org/license/mit
import { system } from "@minecraft/server";
import { configSettings } from "../constants/config";
class OrderEntry {
    recipe;
    count;
    fulfilledCount = 0;
    constructor(recipe, count) {
        this.recipe = recipe;
        this.count = count;
    }
    fullfill(count) {
        this.fulfilledCount += count;
    }
    isFullfilled() {
        return this.fulfilledCount >= this.count;
    }
}
class Order {
    orderEntries;
    static createSimple(recipe, count = 1) {
        return new Order([
            new OrderEntry(recipe, count)
        ]);
    }
    constructor(orderEntries) {
        this.orderEntries = orderEntries;
    }
    isFullfilled() {
        return this.orderEntries.every(entry => entry.isFullfilled());
    }
}
export class OrderManager {
    recipeManager;
    orders = [];
    lastOrderTick;
    orderInterval = configSettings.orderInterval[0];
    orderChance = configSettings.orderChance[0];
    constructor(recipeManager) {
        this.recipeManager = recipeManager;
        this.lastOrderTick = 0;
    }
    addOrder() {
        this.orders.push(Order.createSimple(this.recipeManager.getRandomRecipe()));
    }
    orderTick() {
        if (Math.random() <= this.orderChance) {
            this.addOrder();
        }
    }
    tick() {
        const currentTick = system.currentTick;
        if (currentTick > this.lastOrderTick + this.orderInterval) {
            this.orderTick();
            this.lastOrderTick = currentTick;
        }
    }
}
