function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    for (let i = 0; i < arr2.length; i++) {

        // increments through each of the new items
        let newItem = arr2[i][1];

        // increments each time item isn't found
        let counter = 0;

        // Searches and compares new item to current items
        for (let j = 0; j < arr1.length; j++) {

            // if item exists, add amount to current
            if (newItem === arr1[j][1]) {
                arr1[j][0] += arr2[i][0];
            }
            // if new item, add new item and amount to current
            else {
                counter++;
            }
        }

        // if new item doesn't exist in current, add new item to current
        if (counter == arr1.length) {
            arr1.push(arr2[i])
        }

    }

    // sort new inventory in alphabetical order
    arr1 = arr1.sort((a,b) => (a[1] > b[1] ? 1 : -1));

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
