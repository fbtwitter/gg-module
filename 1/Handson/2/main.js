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
  return total / students.length
}

// callback function when button clicked
const handleClick = async () => {
  // Simulate API Call Process
  console.log('calculation start')
  const wait = (time, callback) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback)
    }, time)
  })

  // Print Result
  wait(5000, calcAvgAge(students)).then((result) => {
    console.log('age is : ' + result)
    // document.getElementById('avg').innerHTML = result
  })

  // Start a call
  console.log('second call started')
  wait(2000).then(() => {
    console.log('second call finished')
    console.log('third call started')
    wait(5000).then(() => {
      console.log('third call finished')
    })
  })
}

// add onclick listener
document.getElementById('calcButton').addEventListener('click', handleClick)
