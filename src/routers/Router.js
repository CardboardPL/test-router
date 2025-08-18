import { Tree } from '../Data Structures/Tree/Tree.js';

export class Router {
    #navTree

    constructor(root) {
        this.#navTree = new Tree(root);
    }

    addPath(segment, absParentPath, segmentHTML) {
        this.#navTree.addNode() 
    }

    removePath(absPath) {

    }

    navigateTo(path, pathType) {

    }
}