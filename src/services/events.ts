import { EventType } from "../types/event"

export async function getAllEvents(){
    console.log(import.meta.env)
    const response= await fetch(import.meta.env.VITE_EVENTS_URL + "/events")
    return response.json() as Promise<EventType[]> 
}