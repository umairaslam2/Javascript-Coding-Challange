
// Type Annotations:


// var fullName : string = 'Umair'

// var falg: boolean = false;

// console.log(fullName)





// Tuple : // aik array me multiple type dete han 


// let arr: [string, number, boolean] = ['umair', 12, true];

// arr.push('aslam')

// console.log(arr)



// let arr: string[] = ['umair','salman'];

// arr.push('aslam')

// console.log(arr)



// let arr: Array<string> = ['umair','salman'];

// arr.push('aslam')

// console.log(arr)


// Enum 


// const enum ShirtSize {small, Medium, Large}

// console.log(ShirtSize.small)




// Type Guards:

// var abc : any = 'umair';



// Type Inference:

// function abc(a: number, b: number): number {

//     return a + b
   
// }

// abc(2, 2)


// void


// function abc(a: number, b: number): void {

//     console.log(a+b)
   
// }

// abc(2, 2)




// Interface:

// let student :{name: string; email: string; rollNumber : number; enroll : boolean} = {

//     name : 'umair',
//     email: 'umairaslam@gmail.com',
//     rollNumber: 323232,
//     enroll: true 
// }


// type Student = {
//     name: string;
//     email: string; 
//     rollNumber : number; 
//     enroll : boolean;
//     classTime?: string[]

// }

// let Student: Student = {
//     name : 'umair',
//     email: 'umairaslam@gmail.com',
//     rollNumber: 323232,
//     enroll: true 
// }



// Type Aliases:


// var abc: number | string = 123321;

// abc = 'a';




// Union and Intersection :

// function printId (id: string |
//     number):void {

//         console.log(`your id is ${id}`)
      
//     }

//     printId(123);
//     printId("abc123");






// classes:


// class Animal {
//     name: string;

//     constructor(name:string) {

//         this.name = name
//     }

//     makeSound (): void {
//       console.log('Animal sound')
//     }

// }



