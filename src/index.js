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
class Author {
    name = "ITEM"
    age = 18
    email = 'lxp_work@163.com'
    info = () => {
        return {
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}
document.getElementById('imgBox').appendChild(img)
export default Author