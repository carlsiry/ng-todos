import { Tasks } from '../api/tasks';

export interface CollectionObject {
    _id?: string;
}

export interface Task extends CollectionObject {
    text: string
}
