// fix the error 
let cat1 ='Whiskers'
cat1 = 'Delilah'

// select the first cat and change the name to the above variable
const cat1TextContent = document.getElementById('cat-1-name').textContent = cat1

// the first adopt button should remove the first cat when clicked
document.getElementById('cat-1').addEventListener('click', () => {
  document.getElementById('cat-1').remove()
})

// the second adopt button should remove the second cat when clicked
document.querySelector('#cat-2').addEventListener('click', () => {
  document.getElementById('cat-2').remove()
})

// write code to remove the third cat when clicked
document.getElementById('cat-3').addEventListener('click', () => {
  document.getElementById('cat-3').remove()
})