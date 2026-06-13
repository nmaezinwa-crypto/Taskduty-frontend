export type Category = 'Urgent' | 'Important' | 'Work' | 'Personal' | 'Other';

export interface ITask {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  category: Category;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskData {
  title: string;
  description: string;
  dueDate: string;
  category: Category;
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  dueDate?: string;
  category?: Category;
  completed?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  task?: T;
  tasks?: T[];
  count?: number;
  error?: string;
}