import { RouterTree } from './RouterTree.js';

export class Router {
    #navTree

    constructor(root) {
        this.#navTree = new RouterTree(root);
    }

    addPath(segment, absParentNode, segmentHTML) {
        return  this.#navTree.addChildSegment(absParentNode, segmentHTML, segment); 
    }

    findSegmentNode(absPath) {
        return this.#navTree.findSegmentNode(absPath);
    }

    removePath(absPath) {
        return this.#navTree.removePath(absPath);
    }

    getSegmentHTML(absPath) {
        const node = this.findSegmentNode(absPath);
        if (!node) throw new Error(`No segment found for path: ${absPath}`);
        return node.data.data.data;
    }
}