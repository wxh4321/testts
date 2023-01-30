console.log(new Array(...new Set([1,2,3,1,4,5,3,5,1,2,6])));
class TestArr<T> {
    private name:string;
    arr:Array<T>
    constructor(arr:Array<T>){
        this.arr = arr;
        this.name = '12';
    }
    test(){
        delete this.arr;
        console.log('this.arr ',this.arr);
        console.log('this.name ',this.name);
    }
}
const arr = [1,2,4,5,6]
console.log(arr);
const t = new TestArr<Number>(arr);
t.test();
console.log('name ',t.name);
// console.log(arr);