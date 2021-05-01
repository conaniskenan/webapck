/*
 * @Author: hypocrisy
 * @Date: 2021-04-14 21:08:53
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-03 15:08:19
 * @FilePath: /webp/src/test.ts
 */
/**
 * @description:
 * @param number a
 * @param string b
 * @return {*}
 */
const foo1 = (a: number, b: string): string => {
	return a + b
}
foo1(123, 'zjttrd')

interface Person {
	salary: number
	age?: number
	[prop: string]: any
	say: (msg: string) => string
}
const p: Person = {
	salary: 2000,
	age: 21,
	title: '12',
	say: (msg: string) => {
		return msg
	},
}
console.log(p)

interface getLength {
	length: number
}

const foo = <T extends getLength>(arg: T): void => {
	console.log(arg.length)
}
foo<string>('1')
console.log(p.say('hello'))
const f = (obj: <T extends getLength>(arg: T) => any): any => {
	return obj
}
console.log(foo)
