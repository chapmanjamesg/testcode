
const remoteURL = "http://localhost:5002"

export default {
    get(id){
        return fetch(`${remoteURL}/filler/${id}`)
            .then(r => r.json())
    },
    getAll(){
        return fetch(`${remoteURL}/filler`)
            .then(r => r.json())
    },
    post(newMessage){
        return fetch(`${remoteURL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(data => data.json())
    }
}