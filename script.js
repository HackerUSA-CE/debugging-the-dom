// fix the error 
const cat1 ='Whiskers'
cat1 = 'Delilah'

// select the first cat and change the name to the above variable
const cat1TextContent = document.getElementById('').textContent = cat1

// the first adopt button should remove the first cat when clicked
document.getElementById('').addEventListener('', () => {
  document.getElementById('cat-1').delete()
})

// the second adopt button should remove the second cat when clicked
document.querySelector('cat-2').addEventListener('', () => {
  document.getElemeentById('cat-2').delete()
})

// write code to remove the third cat when clicked