import _ from 'lodash'

// JS 데이터

// String: "" , '' ,``
// Number
// Boolean: true, false
// undefined
// null 
// Array: []
// Object: {}


// 01. 문자
console.log(

  'Hello world!'.indexOf('world')
)

const result = 'Hello world!'.indexOf('hero')
console.log(result)

// String.prototype.indexOf()

const str = '0123'

console.log(str.length)
console.log('0123'.length)

const str2 = 'hi world'

console.log(str2.indexOf('iceCream') !== -1)

console.log(str2.slice(0, 3))
console.log('만약 뒤에 wolrd를 출력할려면 slice는 3~8', str2.slice(3, 8))

console.log(str2.replace('world', 'chicken'))
console.log(str2.replace(' world', ''))

const str3 = 'temp@gmail.com'

console.log(str3.match(/.+(?=@)/))
console.log(str3.match(/.+(?=@)/)[0])


const str4 = '     hello world    '
console.log(str4)
console.log(str4.trim())

// 02. 숫자와 수학

console.log(' 여기서부터는 02.숫자와 수학')

const pi = 3.14159265358979
console.log(pi)
console.log(typeof pi)

const str5 = pi.toFixed(2)
console.log(str5)
console.log(typeof str5)

const integer = parseInt(str5)
const float = parseFloat(str5)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('Math 예시')

console.log('abs: ', Math.abs(-12))

console.log('min: ', Math.min(2, 8))

console.log('max: ', Math.max(2, 8))

console.log('ceil: ', Math.ceil(3.14))
// expect output ceil:  4
console.log('floor: ', Math.floor(3.14))

console.log('round: ', Math.round(3.14))

console.log('random: ', Math.random())

// 03. 배열 (1)
console.log('03. 배열\(1\) \n\n\n')

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers)

console.log(numbers[1])

console.log(fruits)

console.log(fruits[2])

// .length
console.log('length')

console.log(numbers.length)
console.log(fruits.length)
console.log([1, 2].length)

console.log([].length)

// .concat() 
console.log('concat')

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

// .forEach()

console.log('forEach')

fruits.forEach((element, index, array) =>
  console.log(element, index, array)
)

// .map()

const a_map = fruits.forEach((fruit, index) =>
  console.log(`${fruit}-${index}`))

console.log(a_map)

console.log('map')

const b_map1 = fruits.map((fruit, index) => {
  return `${fruit}-${index}`
})

console.log(b_map1)

const b_map2 = fruits.map((fruit, index) => {
  return {
    id: index,
    name: fruit
  }
})

console.log(b_map2)

// 04. 배열 (2)
console.log('04 . 배열 (2) \n\n\n')

// .filter()
console.log('filter')

const a_filter = numbers.map(number => number < 3)
console.log(a_filter)

const b_filter = numbers.filter(number => number < 3)
console.log(b_filter)


// .find() .findIndex()

console.log('find()')

const a_find = fruits.find(fruit => /^B/.test(fruit))
const b_find = fruits.find(fruit => /^C/.test(fruit))

console.log(a_find)
console.log(b_find)

console.log(' findIndex()')

const a_findIndex = fruits.findIndex(fruit => /^B/.test(fruit))
const b_findIndex = fruits.findIndex(fruit => /^C/.test(fruit))

console.log(a_findIndex)
console.log(b_findIndex)

// .includes()

console.log(' includes()')

const a_includes = numbers.includes(3)
console.log(a_includes)

const b_includes = fruits.includes('hero')
console.log(b_includes)

// .push() .unshift()
// 원본 수정됨 주의!

console.log('push')


numbers.push(5)
console.log(numbers)

console.log('unshift')

numbers.unshift(0)
console.log(numbers)

// .reverse()
// 원본 수정됨 주의

console.log(' reverse()')
console.log(numbers)
console.log(fruits)

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

numbers.reverse()


// .splice()
// 원본 수정됨 주의!

console.log('splice()')

console.log(numbers)
numbers.splice(2, 1)

console.log(numbers)

console.log('숫자 집어넣기')

numbers.splice(2, 0, 2)
console.log(numbers)

// 05. 객체

console.log('05. 객체 \n\n\n')
console.log('assign 전')

const userAge = {
  // key: value
  name: 'hero',
  age: 15

}
const userAge2 = {
  // key: value
  name: 'hero',
  age: 15

}

const userEmail = {
  name: ' hero',
  email: 'email@gmail.com'
}
console.log('userAge', userAge)
console.log('userEmail', userEmail)

console.log('assign 후')

const target = Object.assign(userAge, userEmail)

console.log('target', target)
console.log('userAge', userAge)
console.log('userEmail', userEmail)
console.log('target과 userAge는 같은 객체인가?')

console.log(target == userAge)

const target2 = Object.assign({}, userAge2, userEmail)
console.log('target2 : ', target2)

console.log('a_object와 b_object는 같은 객체인가?')

const a_object = {
  k: 123
}
const b_object = {
  k: 123
}

console.log(a_object == b_object)

// object.keys

console.log('object.keys')

const user_key = {
  name: 'hero',
  age: 15,
  email: 'thisis@gmail.com'
}

const keys = Object.keys(user_key)

console.log('객체 인덱싱 user_key[\'email\'] : ', user_key['email'])
console.log('keys :', keys)
// ['name' , 'age', 'email']

const values = keys.map(key => user_key[key])
console.log('values :', values)

// 06 . 구조 분해 할당 (Destructing assignment)
// 비구조 할당

console.log('06. 구조 분해 할당 \n\n\n')

const user_DA = {
  name: 'hero',
  age: 15,
  email: 'thisis@gmail.com'

}

const {
  name: name_DA,
  age,
  email,
  address
} = user_DA
// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

console.log('address_2 에 기본값을 넣고 출력해보자')

const {
  address_2 = 1
} = user_DA
// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address_2)

// 다른 이름으로 변수 받아오기

console.log('name_DA 로 변수를 받아오기 ')

console.log(`사용자의 이름은 ${name_DA}입니다.`)
console.log(`${name_DA}의 나이는 ${age}입니다.`)
console.log(`${name_DA}의 이메일 주소는 ${email}입니다.`)
console.log(address_2)

// 배열의 구조분해 할당
const fruits_DA = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d, ] = fruits_DA
console.log(a, b, c, d)

// 배열 중 원하는 요소만 구조 분해 할당할려면?

const [, , b_DA] = fruits_DA
console.log(b_DA)

// 07. 전개 연산자 (spread)
console.log('07. 전개 연산자 \n\n\n ')


const fruits_SPREAD = ['Apple', 'Banana', 'Cherry']
console.log(fruits_SPREAD)
console.log(...fruits_SPREAD)
//console.log('apple' , 'banana' , 'cherry')

function toObject(a, b, c) {
  return {
    a_spread: a,
    b_spread: b,
    c_spread: c

  }
}

console.log(toObject(...fruits_SPREAD))
console.log(toObject(fruits_SPREAD[0], fruits_SPREAD[1], fruits_SPREAD[2]))
console.log('전개연산자로 매개변수 받기')

const fruits_SPREAD_1 = ['Apple', 'Banana', 'Cherry', 'Orange', 'PineApple']

function toObject_2(a_spread, b_spread, ...c_spread) {
  return {
    a_spread, b_spread, c_spread

  }
}


console.log(toObject_2(...fruits_SPREAD_1))

const toObject_3= (a_spread, b_spread, ...c_spread) => 
( {a_spread, b_spread, c_spread } )

console.log(toObject_3(...fruits_SPREAD_1))


// 08. 데이터 불변성 (Immutability)
// 원시 데이터 :string, number, boolean, undefined , null
// 참조형 데이터 : object, array, function

console.log('08. 데이터 불변성 \n\n\n')

let a_Immutability = 1
let b_Immutability = 4
console.log(a_Immutability,b_Immutability, a_Immutability=== b_Immutability)
b_Immutability=a_Immutability
console.log(a_Immutability,b_Immutability, a_Immutability===b_Immutability)
a_Immutability = 7
console.log(a_Immutability,b_Immutability,a_Immutability=== b_Immutability)
let c_Immutability = 1
console.log(b_Immutability,c_Immutability, b_Immutability=== c_Immutability)

// 참조형 데이터
console.log('참조형 데이터 비교')

let a_ref = { k: 1 }
let b_ref = { k: 1}
console.log(a_ref,b_ref, a_ref===b_ref)

a_ref.k =7
b_ref=a_ref
console.log(a_ref,b_ref, a_ref=== b_ref)
a_ref.k=2

console.log(a_ref,b_ref, a_ref=== b_ref)
let c_ref = b_ref
console.log(a_ref,b_ref,c_ref, a_ref===c_ref)
a_ref.k= 9
console.log(a_ref,b_ref,c_ref, a_ref===c_ref)


// 09. 얕은 복사와 깊은 복사 (shallow & deep copy)
console.log('09. 얕은 복사와 깊은 복사 \n\n\n ')

const user_copy = {
  name: 'hero',
  age: 85,
  emails: ['thisis@gmail.com']
}

const copyUser = user_copy
console.log(copyUser === user_copy)

user_copy.age =22 
console.log('user_copy', user_copy)
console.log('copyUser', copyUser)

console.log('-------')
console.log('-------')

console.log( user_copy === copyUser)

console.log('Object.assign 사용하기')

const copyUser_2 = Object.assign({},user_copy)
console.log(copyUser_2 === user_copy)

user_copy.age =25 
console.log('user_copy', user_copy)
console.log('copyUser_2', copyUser_2)


console.log('전개 연산자 사용하기')

const copyUser_3 = {...user_copy}
console.log(copyUser_3 === user_copy)
user_copy.age= 15

user_copy.emails.push('another@gmail.com')
console.log(user_copy.emails === copyUser_3.emails)

console.log(user_copy)
console.log(copyUser_3)

console.log('깊은 복사')

const copyUser_4 = _.cloneDeep(user_copy)

console.log(copyUser_4 === user_copy)
user_copy.age= 30

user_copy.emails.push('another2@gmail.com')
console.log(user_copy.emails === copyUser_4.emails)

console.log(user_copy)
console.log(copyUser_4)