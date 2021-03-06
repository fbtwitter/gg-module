const students = [
  {
    name: 'Alice',
    age: 20
  },
  {
    name: 'Bob',
    age: 21
  },
  {
    name: 'Jane',
    age: 20
  }
]

const renderTable = () => {
  students.forEach(({ name, age }) => {
    const table = document
      .getElementById('data')
      .getElementsByTagName('tbody')[0]
    table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`
  })
}

// run render table
renderTable()

// a function to calculate the avg age
const calcAvgAge = students => {
  const total = students.reduce((acc, student) => acc + student.age, 0)
  console.log(total / students.length)
  return total / students.length
}

// callback function when button clicked
const handleClick = () => {
  const avg = calcAvgAge(students)
  document.getElementById('avg').innerHTML = avg
}

// add onclick listener
document.getElementById('calcButton').addEventListener('click', handleClick)
