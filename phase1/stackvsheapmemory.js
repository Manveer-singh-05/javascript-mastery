// there is two types of memory in js first one is stack memory and second one is heap memory 
// primitive datatypes and values stores in stack memory and it is static dont grow dynamically

// non primitive datatypes stores value in heap memory but there reference stores in stack memory and the heap memory can grow dynamically means dynamic memory

let ans = 10;
console.log(ans); // stack memoery used

let arr = [193, 223, 4,4];
console.log(arr); // stores values in heap memory but the reference means (arr name) is stored in stack 
// note Two variables can point to the exact same array in the heap.