//Bubble sort in javascript

var unsorted = [13, 3, 1, 9, 7, 2];
var cur, next, temp, total = 0;


for (x = 0; x < unsorted.length; x++) {

    for (y = 0; y < unsorted.length-x; y++) {
        cur = unsorted[y];
        next = unsorted[y + 1];

        console.log(y);

        if (cur > next) {
            unsorted[y] = next;
            unsorted[y + 1] = cur;
        }

        //total
        total++;
        console.log(total);
    }
}

 console.log(unsorted);