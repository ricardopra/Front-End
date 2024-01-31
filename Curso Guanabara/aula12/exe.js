var products = ["choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubble = [false, false, false, true];
var i = 0;

while (i < hasBubble.length) {
    if (hasBubble[i]) {
        console.log(products[i] + " contains bubble gum");
    } i = i + 1;
}
