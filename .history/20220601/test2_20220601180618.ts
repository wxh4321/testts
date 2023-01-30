console.log(new Array(...new Set([1,2,3,1,4,5,3,5,1,2,6])));
class TestArr<T> {
    arr:Array<T>
    constructor(arr:Array<T>){
        this.arr = arr;
    }
}
const arr = [1,2,4,5,6]
console.log(arr);
delete arr[0];
console.log(arr);