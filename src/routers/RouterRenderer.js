class RouterRenderer {
    #main;

    constructor(main, router) {
        this.#main = main;
        this.router = router;
    }

    renderPathMain(absPath) {
        this.#main.innerHTML = this.router.getSegmentHTML(absPath);
    }

    renderPathElement(absPath, element) {
        element.innerHTML = this.router.getSegmentHTML(absPath);
    }
}