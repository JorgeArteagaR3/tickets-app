import { Context, createContext } from 'react'
import { EventType } from '../types/event'

export const EventsContext: Context<Partial<EventType>[]> = createContext([] as Partial<EventType>[])