import type { ITask, CreateTaskData, UpdateTaskData, ApiResponse } from '../types/index';

const BASE_URL = 'http://localhost:5000/api/tasks';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
});

export const taskService = {

  getAllTasks: async (category?: string): Promise<ITask[]> => {
    const url = category ? `${BASE_URL}?category=${category}` : BASE_URL;
    const res = await fetch(url, { headers: getHeaders() });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to fetch tasks');
    return data.tasks || [];
  },

  createTask: async (taskData: CreateTaskData): Promise<ITask> => {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(taskData),
    });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to create task');
    return data.task!;
  },

  updateTask: async (id: string, taskData: UpdateTaskData): Promise<ITask> => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(taskData),
    });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to update task');
    return data.task!;
  },

  deleteTask: async (id: string): Promise<void> => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to delete task');
  },

  getTrashedTasks: async (): Promise<ITask[]> => {
    const res = await fetch(`${BASE_URL}/trash`, { headers: getHeaders() });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to fetch trash');
    return data.tasks || [];
  },

  restoreTask: async (id: string): Promise<ITask> => {
    const res = await fetch(`${BASE_URL}/${id}/restore`, {
      method: 'PUT',
      headers: getHeaders(),
    });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to restore task');
    return data.task!;
  },

  permanentDeleteTask: async (id: string): Promise<void> => {
    const res = await fetch(`${BASE_URL}/${id}/permanent`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    const data: ApiResponse<ITask> = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to permanently delete task');
  },
};