class MySet {


    constructor() {
        this.collection = [];
    }


    has(element) {
        return this.collection.indexOf(element) !== 1;
    }

    values() {
        return this.collection;
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }

        return false;
    }
}
