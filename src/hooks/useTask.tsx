import { useState, useEffect } from 'react';
import type { ITask, CreateTaskData, UpdateTaskData } from '../types/index';
import { taskService } from '../services/taskServices';

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData: CreateTaskData): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const newTask = await taskService.createTask(taskData);
      setTasks((prev) => [...prev, newTask]);
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to create task');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id: string, taskData: UpdateTaskData): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const updated = await taskService.updateTask(id, taskData);
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? updated : task))
      );
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to update task');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await taskService.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to delete task');
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;