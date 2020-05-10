import { Pick } from 'type-plus'
import { EventEmitter } from 'events'

export type Event = Pick<EventEmitter, 'once' | 'emit' | 'on'>
