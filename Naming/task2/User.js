module.exports = class User {
    constructor(name) {
        this.birth;
        this.name = name;
        this.isAdmin = false;
        this.subordinates = [];
        this.rating;
    }

    toString() {
        return 'User [birth=' + this.birth + ', name=' + this.name + ', isAdmin=' + this.isAdmin + ', subordinates='
            + this.subordinates + ', rating=' + this.rating + ']';
    }
};
