export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const getTodayString = (): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.toISOString().split('T')[0];
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Urgent':    return 'text-red-500';
    case 'Important': return 'text-yellow-500';
    case 'Work':      return 'text-blue-500';
    case 'Personal':  return 'text-green-500';
    case 'Other':     return 'text-gray-500';
    default:          return 'text-gray-500';
  }
};