let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Cowboys Jersey", size: "medium", clatters: "no", weight: "light"},
    {name: "Yoga Ball", size: "large", clatters: "no", weight: "light"},
    {name: "Ravens Helmet", size: "large", clatters: "a bit", weight: "heavy"}
];

let presents = [
    {size: "large", clatters: "a bit", weight: "heavy"},
    {size: "medium", clatters: "no", weight: "light"}
];

function guessGifts(arr1, arr2) {
    var r = [];
    arr2.forEach(function(p){
      arr1.forEach(function(w){
        if (p.size == w.size && p.clatters == w.clatters && p.weight == w.weight && r.indexOf(w.name) == -1) r.push(w.name);
      });
    });
    return r;
  }

console.log(guessGifts(wishlist, presents))