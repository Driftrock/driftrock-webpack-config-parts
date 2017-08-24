export default (text = 'Disco Disco') => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
