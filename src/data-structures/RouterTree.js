import { Tree } from './../../../Data Structures/Trees/Tree.js';

export class RouterTree extends Tree {
    constructor(root) {
        super(root, 0)
    }

    insertParentAboveWithSegment(node, data, segmentName) {
        segmentName = segmentName.trim().toLowerCase();
        if (!segmentName) throw new Error('Invalid segment name');

        const parentNode = node.data.data.parent;

        if (parentNode) {
            const parentNodeData = parentNode.data.data;
            if (!parentNodeData.map) {
                parentNodeData.map = new Map();
            }

            if (parentNodeData.map.has(segmentName)) {
                throw new Error('Passed an existing segment name in the current level');
            }

            parentNodeData.map.set(segmentName, data);
        }

        return super.insertParentAbove(node, { data, segmentName });
    }

    addChildSegment(parent, data, segmentName) {
        segmentName = segmentName.trim().toLowerCase();
        if (!segmentName) throw new Error('Invalid segment name');

        if (!parent) throw new Error('Passed a parent that doesn\'t exist');

        const parentData = parent.data.data;
        if (!parentData.map) {
            parentData.map = new Map();
        }

        if (parentData.map.has(segmentName)) {
            throw new Error('Passed an existing segment name in the current level');
        }

        parentData.map.set(segmentName, data);

        return super.appendChild(parent, { data, segmentName });
    }
}