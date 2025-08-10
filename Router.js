import { Tree } from '../Data Structures/Tree/Tree.js';

export class Router {
    #navTree

    constructor(root) {
        this.#navTree = new Tree(root);
    }
}