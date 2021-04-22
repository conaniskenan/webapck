/* eslint-disable */
import './1.css'
import './1.styl'
import img from './logo.jpg'
let frag = document.createDocumentFragment()
let div = document.createElement('div')
div.innerHTML = 'hello webpack1239'
div.className = 'content'
div.style.backgroundImage = `url(${img})`
frag.appendChild(div)
document.body.appendChild(frag)
let BASE_URL = '13890'
console.log(BASE_URL)
let p = new Promise((resolve, reject) => {
	resolve(123)
})
console.log(process.env.NODE_ENV)
// if (module.hot) {
// 	// accept itself
// 	module.hot.accept()
// }
