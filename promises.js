const data = {
    name: "enosh",
    age: 34
}

const fetchData = async () => {
    const response = await fetch('http://localhost:5000/add', {
        method: 'POST',
        body: JSON.stringify({
            name: 'enosh',
            dudu: 'topaz'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const { name, dudu } = await response.json()

    console.log({ name, dudu })
} 

fetchData()