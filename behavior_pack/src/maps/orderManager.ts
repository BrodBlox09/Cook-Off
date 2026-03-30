// SPDX-License-Identifier: MIT
// Copyright (c) @brodblox09 & Contributors
// Contributors: @brodblox09
// See LICENSE.md file in the root folder, licenses/MIT.md, or https://opensource.org/license/mit

import { system } from "@minecraft/server";
import { configSettings } from "../constants/config";
import { Recipe, RecipeManager } from "./recipeManager";

class OrderEntry {
	private fulfilledCount: number = 0;

	public constructor(private recipe: Recipe, private count: number) {}

	public fullfill(count: number) {
		this.fulfilledCount += count;
	}

	public isFullfilled(): boolean {
		return this.fulfilledCount >= this.count;
	}
}

class Order {
	public static createSimple(recipe: Recipe, count: number = 1): Order {
		return new Order([
			new OrderEntry(recipe, count)
		]);
	}

	public constructor(private orderEntries: OrderEntry[]) {}

	public isFullfilled(): boolean {
		return this.orderEntries.every(entry => entry.isFullfilled());
	}
}

export class OrderManager {
	private orders: Order[] = [];
	private lastOrderTick: number;
	private orderInterval: number = configSettings.orderInterval[0];
	private orderChance: number = configSettings.orderChance[0];

	public constructor(private recipeManager: RecipeManager) {
		this.lastOrderTick = 0;
		
	}

	private addOrder() {
		this.orders.push(Order.createSimple(this.recipeManager.getRandomRecipe()));
	}

	private orderTick() {
		if (Math.random() <= this.orderChance) {
			this.addOrder();
		}
	}

	public tick() {
		const currentTick = system.currentTick;
		if (currentTick > this.lastOrderTick + this.orderInterval) {
			this.orderTick();
			this.lastOrderTick = currentTick;
		}
	}
}