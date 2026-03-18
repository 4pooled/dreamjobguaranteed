import { revalidatePath } from "next/cache"

const API_URL = "http://localhost:4000/"

// Should recieve a response from our api, then change it to a json, then return it 
export async function  getAllPosts() {
    const response = await fetch(`${API_URL}jobs`) // Get
    const data = await response.json() // Convert
    return data
    
}

export async function getPostById(id:number) {
    const response = await fetch(`${API_URL}jobs/${id}`)
    const data = await response.json()
    return data
}

export async function deletePostById (id:number) {
    // method: DELETE?
    const response = await fetch(`${API_URL}jobs/${id}`, {
        method: "DELETE"

    })
if (!response.ok) return false

revalidatePath("")
return true
}

export async function updatePostById (id:number, data:string) {

}

export async function createPost (data:string) {

}