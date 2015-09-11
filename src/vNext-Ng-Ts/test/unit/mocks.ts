﻿/// <reference path="../../typings/tsd.d.ts" />


module tests {
    export class Mocks {
        chance: Chance.Chance;

        letterPool: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        constructor(chance: Chance.Chance) {
            this.chance = chance;
        }

        public generateRandomObjects(count?: number): string[] {
            if (!count) count = 3;

            var commands = new Array<any>();

            for (var i = 0; i < count; i++) {
                commands.push({
                    guid: this.chance.string({ length: 32, pool: this.letterPool })
                });
            }
            return commands;
        }
        
        public generateRandomStrings(count: number): string[] {
            return Array.apply(null, Array(count)).map(function () { return this.chance.string(); });
        }
    }
}