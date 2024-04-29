function sandwich(arr) {
    console.log("Your Ordered Sandwich: \n");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
sandwich(["Chicken", "mayonese", "Vegs", "Cheese"]);
sandwich(["Beef", "mayonese", "Vegs", "Cheese"]);
sandwich(["mayonese", "Vegs", "Cheese"]);
export {};
