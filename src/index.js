import "./main.css"
import "./sass.scss"
import logo from "../asserts/bee.jpg"
import "./font/iconfont.css"
const a = 'sun'
console.log(a)
let b = a + ' hello'
console.log(b)

const img = new Image()
img.src = logo

document.getElementById('imgBox').appendChild(img)
export default b