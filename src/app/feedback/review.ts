export class Review {
    name: String;
    comment: String;
    rating: Number;

    constructor(name:String, comment:String, rating:Number) {
        this.name = name;
        this.comment = comment;
        this.rating = rating;
    }
}