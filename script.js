let user = {
    name:'Emir',
    surName:'Akylbekov',
    age:5,
}
async function doPosts() {
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'content-type':'application/json',
        },
        body:JSON.stringify(user)
    })
    if(response.ok) {
        document.body.append('все успешно сохранилось')
    }
    let result = await response.json()
    return result;
    } catch (error) {
        alert(error.name)
    }
}
console.log(doPosts())    