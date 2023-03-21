let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessTheGift = (arr1, arr2) => {
    let gifts = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let e = 0; e < arr1.length; e++) {
            if (arr2[i].size === arr1[e].size && arr2[i].clatters === arr1[e].clatters && arr2[i].weight === arr1[e].weight) {
                 gifts.push(arr1[i].name);
            }
         }
   }
   return gifts;
}

console.log(guessTheGift(wishlist, presents))