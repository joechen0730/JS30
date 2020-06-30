# JS30 day14 - JavaScript References VS Copying
---

<img src="./JSday_14_home.png" style="max-width:100%"> 

#### day14 的項目是猜數字

## 各項學習重點
-----
1. 這章節講的是 call by value & call by reference
- JS 基本型別內的資料，會是以純值的形式存在 
  原始資料型態 (Primitive)
  Boolean
  Null
  Undefined
  Number
  String
  Symbol (new from ES6)
- 上述都是 call by value 
```javascript
<script>
Case 1
 let a = 0;
 let b = a + 1;
 a = 1;
 console.log(a,b) // 1,1
Case 2 
 let c = 0;
 let d = c + 1;
 c = null;
 console.log(c,d) // null,1

</script>
```
Case 1

Step1: a = 0
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
| a      |       | 0       | 
Step2 : b = a + 1; a的值為 0, b = 1
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
| a      |       | 0       | 
| b| | 1 |
Step3 : a = 1
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
| a      |       | 1      | 
| b| | 1 |
------
2. 物件型別 指的是可能由零或多種不同型別 (包括純值與物件) 所組合成的物件。
  - 純值的傳的方式都是 Pass by Value
  - 物件型別都會透過 Pass by reference

```javascript
<script>
Case1
  call by reference
  const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
  let player1 = players;
  player1[0] = 'momo';
  console.log(player1,players) 
  // ['momo', 'Sarah', 'Ryan', 'Poppy'], ['momo', 'Sarah', 'Ryan', 'Poppy']
</script>
```
Step1: 
  const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | ['Wes', 'Sarah', 'Ryan', 'Poppy']| 
| players | | 0x1 |

Step2: 
let player1 = players;
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | ['Wes', 'Sarah', 'Ryan', 'Poppy']| 
| players | | 0x1 |
| player1 | | 0x1 |

Step3: 
player1[0] = 'momo';

| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | ['momo', 'Sarah', 'Ryan', 'Poppy']| 
| players | | 0x1 |
| player1 | | 0x1 |

```javascript
<script>
Case 2
slice (產生新的陣列) => concat, es6解構賦值
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
let slice_player = players.slice();
slice_player[0] = 'momo';
console.log(slice_player,players)
//['momo', 'Sarah', 'Ryan', 'Poppy'], ['Wes', 'Sarah', 'Ryan', 'Poppy']

</script>
```
Step1: 
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | ['Wes', 'Sarah', 'Ryan', 'Poppy']| 
| players | | 0x1 |

Step2: 
let slice_player = players.slice();
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | ['Wes', 'Sarah', 'Ryan', 'Poppy']| 
| players | | 0x1 |
|  | 0x2 | ['Wes', 'Sarah', 'Ryan', 'Poppy'] |
|slice_player| |0x2|

Step3: 
slice_player[0] = 'momo';

| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | ['Wes', 'Sarah', 'Ryan', 'Poppy']| 
| players | | 0x1 |
|  | 0x2 | ['momo', 'Sarah', 'Ryan', 'Poppy'] |
|slice_player| |0x2|

-----
- 當值為物件時，來看看物件如何拷貝。

```javascript
<script>
Case 1:
const person = {
  name: 'Wes Bos',
  age: 80
};
  let person_1 = person;
  person_1['name'] = 'alex';
  console.log(person_1['name'], person['name'])
  // alex, alex
</script>
```

Step1 : 
const person  = { name: 'Wes Bos', age: 80};
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | { name: 'Wes Bos', age: 80}| 
| person | | 0x1 |

Step2 :  
let person_1 = person;
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | { name: 'Wes Bos', age: 80}| 
| person | | 0x1 |
| person_1 | | 0x1| 

Step3 : 
person_1['name'] = 'alex';
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | { name: 'alex', age: 80}| 
| person | | 0x1 |
| person_1 | | 0x1| 

```javascript
<script>
// Object.assign 
Case 2:
const person = {
  name: 'Wes Bos',
  age: 80
};
let person_2 = Object.assign({},person);
person_2['name'] = 'alex';
console.log(person_2['name'], person['name']);
// 'alex' , 'Wes Bos'
</script>
```
Step1 : 
const person  = { name: 'Wes Bos', age: 80};
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | { name: 'Wes Bos', age: 80}| 
| person | | 0x1 |

Step2 : 
const person_2  = Object.assign({},person);
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | { name: 'Wes Bos', age: 80}| 
| person | | 0x1 |
| | 0x2 | { name: 'Wes Bos'(0x1.name) , age: 80(0x1.age)} |
| person_2| | 0x2|

Step3 :
person_2['name'] = 'alex';
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | { name: 'Wes Bos', age: 80}| 
| person | | 0x1 |
| | 0x2 | { name: 'alex' , age: 80(0x1.age)} |
| person_2| | 0x2|

- Object.assign() 是把物件的值取出，並賦予值在另一個物件上，從而產生新物件
```javascript
<script>
// Object.assign fail
Case 3:
let company = {
  nane: 'haha company',
  location: {
    address: 'taipei',
    addressNum: 237
  }
}
let company_2 = Object.assign({}, company);
company_2.location.address = 'tainan';
console.log(company_2.location.address, company.location.address);
// 'tainan', 'tainan'
</script>
```
Step1 : 
let company = {
  name: 'haha company',
  location: {
    address: 'taipei',
    addressNum: 237
  }
}
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | {   name: 'haha company',location: {address: 'taipei',addressNum: 237}}| 
| company | | 0x1 |

Step2 :
let company_2 = Object.assign({}, company);
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | {   name: 'haha company',location: {address: 'taipei',addressNum: 237}}| 
| company | | 0x1 |
| | 0x2| {name:'haha company'(0x1.name),location:{...}(0x1.location)}|
|company_2 | | 0x2| 

Step3 :
company_2.location.address = 'tainan';
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | {   name: 'haha company',location: {address: 'tainan',addressNum: 237}}| 
| company | | 0x1 |
| | 0x2| {name:'haha company'(0x1.name),location:{...}(0x1.location)}|
|company_2 | | 0x2| 

- 從上面案例可以知道， Object.assign 是將值取出，但如果是多層的結構，
也是 Pass by reference ，導致修改第二層的物件得值
- 但如果想要 deep Copy 的時候，需要怎麼做？

```javascript
<script>
// deep copy
Case 3:
let company = {
  nane: 'haha company',
  location: {
    address: 'taipei',
    addressNum: 237
  }
}
let deep_company = JSON.parse(JSON.stringify(company));
deep_company.location.address = 'tainan';
console.log(deep_company.location.address, company.location.address);
// 'tainan', 'taipei'
</script>
```
Step1 : 
let company = {
  name: 'haha company',
  location: {
    address: 'taipei',
    addressNum: 237
  }
}
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | {   name: 'haha company',location: {address: 'taipei',addressNum: 237}}| 
| company | | 0x1 |

Step2 :
let deep_company = JSON.stringify(company)
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | {   name: 'haha company',location: {address: 'taipei',addressNum: 237}}| 
| company | | 0x1 |
|deep_company | | '{name:'haha company'(0x1.name),location:{...}(0x1.location)}'| 

Step3 :
JSON.parse(deep_company);
deep_company.location.address = 'tainan';
| 變數 | 記憶體 | 值 |
|----- |---------|----------|
|      |   0x1    | {   name: 'haha company',location: {address: 'taipei',addressNum: 237}}| 
| company | | 0x1 |
|deep_company | | {name:'haha company'(0x1.name),location:{...address:'tainan'}(0x1.location)}| 

- 透過 JSON.stringify 是一個比較特別的方式，先將 Object 轉為字串， 再重新轉回物件時，會算是全新的物件


3. 參考資料
- [[Javascript] 關於 JS 中的淺拷貝和深拷貝](https://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/)
- [Alex JS30 - day14 ](https://www.youtube.com/watch?v=sxe-oahUARI&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=15&t=0s)