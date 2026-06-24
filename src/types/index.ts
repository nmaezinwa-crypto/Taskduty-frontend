export type Category = 'Urgent' | 'Important' | 'Work' | 'Personal' | 'Other';

export interface ITask {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  category: Category;
  completed: boolean;
  user: string;
  deleted: boolean;
  deletedAt: string | null;
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

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: IUser;
  error?: string;
}