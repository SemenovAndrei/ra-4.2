export function checkValid(obj) {
  if (obj.value === '') {
    const field = document.querySelector(`.${obj.classList.value}`)
    field.style.borderColor = 'red'
    setTimeout(() => field.removeAttribute('style'), 1000)
    return true
  }
}
export default checkValid
