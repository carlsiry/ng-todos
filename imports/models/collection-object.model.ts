import { Tasks } from '../api/tasks';

export interface CollectionObject {
    _id?: string;
}

// 任务文档的数据结构类型
export interface Task extends CollectionObject {
    text: string, // 描述任务的文本
    checked: boolean, // 是否完成
    createdAt: Date // 任务创建的时间 
}
