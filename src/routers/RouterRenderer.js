import { Router } from './Router.js';

export class RouterRenderer {
    #main;

    constructor(main, router) {
        if (!(router instanceof Router)) throw new Error('Aborted RouterRenderer Setup: "router" must be an instance of "Router"');
        if (!(main instanceof HTMLElement)) throw new Error('Aborted RouterRenderer Setup: "main" must be an instance of "HTMLElement"');

        this.#main = main;
        this.router = router;
    }

    renderPathMain(absPath) {
        const segmentHTML = this.router.getSegmentHTML(absPath);
        this.#main.innerHTML = segmentHTML;
        return { absPath, segmentHTML };
    }

    renderPathElement(absPath, element) {
        element.innerHTML = this.router.getSegmentHTML(absPath);
    }
}