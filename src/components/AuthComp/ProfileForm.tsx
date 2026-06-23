import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

const ProfileForm = () => {
  const navigate = useNavigate();
  const user = authService.getUser();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email) {
      setError('Name and email are required');
      return;
    }

    setLoading(true);
    try {
      const res = await authService.updateProfile(name, email, password || undefined);
      if (res.success) {
        setSuccess('Profile updated successfully!');
        setPassword('');
      } else {
        setError(res.message || 'Update failed');
      }
    } catch (err: any) {
      setError(err.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-purple-600 font-medium mb-6 flex items-center gap-1"
        >
          ← Back
        </button>

        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-500 text-sm mb-6">Update your name, email or password</p>

          {error && (
            <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm mb-4 bg-green-50 p-3 rounded">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-purple-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-purple-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                New Password <span className="text-gray-400">(leave blank to keep current)</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-purple-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;