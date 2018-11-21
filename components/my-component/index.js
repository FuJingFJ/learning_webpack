import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'

function component () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ') // loadsh _join(array, [separator=',']) 数组以separator拼合为字符串
  element.classList.add('hello')

  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  console.log(Data)

  return element
}
document.body.appendChild(component())
