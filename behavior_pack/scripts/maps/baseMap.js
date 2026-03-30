// SPDX-License-Identifier: MIT
// Copyright (c) @brodblox09 & Contributors
// Contributors: @brodblox09 @MaxedOut4826
// See LICENSE.md file in the root folder, licenses/MIT.md, or https://opensource.org/license/mit
import { system } from "@minecraft/server";
import { RecipeManager } from "./recipeManager";
import { OrderManager } from "./orderManager";
export class BaseMap {
    recipeManager = new RecipeManager();
    orderManager = new OrderManager(this.recipeManager);
    runId = -1;
    startInterval() {
        if (this.runId !== -1)
            return;
        this.runId = system.runInterval(this.tick);
    }
    tick() {
        this.orderManager.tick();
    }
    stopInterval() {
        system.clearRun(this.runId);
        this.runId = -1;
    }
}
