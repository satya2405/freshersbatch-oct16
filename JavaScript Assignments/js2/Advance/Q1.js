const isEven = num => num%2==0;
function find(arr, f) {
   arr.filter(f)[0];
}
find([1,2,3,4,6], isEven);