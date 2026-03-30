// SPDX-License-Identifier: MIT
// Copyright (c) @MaxedOut4826 & Contributors
// Contributors: @MaxedOut4826 @brodblox09
// See LICENSE.md file in the root folder, licenses/MIT.md, or https://opensource.org/license/mit

import { BaseMap } from "./baseMap";

export class MapManager {
    private static mapsIndex: BaseMap[] = [];

    static addMap(map: BaseMap) {
        MapManager.mapsIndex.push(map);
    }
}
