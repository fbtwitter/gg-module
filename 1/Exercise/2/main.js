const handleSearch = async (e) => {
  e.preventDefault()
  const response = await fetch('./single-sample.json', {
    method: 'get'
  })
  if (!response.ok) alert('request failed')

  const myJson = await response.json()
  console.log(myJson)
}

document.getElementById('callTrack').addEventListener('click', handleSearch)

const handleClick = () => {
  alert('button running')
}

document.getElementById('submitPlaylist').addEventListener('click', handleClick)
