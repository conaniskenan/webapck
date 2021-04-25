let a = {
	b: true,
}
function foo() {
	a.b = false
}
foo()
let obj = {
	name: a.b == true ? 1 : 2,
}

console.log(obj)
