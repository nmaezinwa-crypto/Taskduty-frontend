import deleteIcon from '../../assets/Vector.png';
import editIcon from '../../assets/Vector3.png';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant: 'edit' | 'delete';
}

const ActionButton = ({ label, onClick, variant }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded font-medium text-sm transition-colors
        ${variant === 'edit'
          ? 'bg-purple-600 hover:bg-purple-700 text-white'
          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}
    >
      <img
        src={variant === 'edit' ? editIcon : deleteIcon}
        alt={label}
        className="w-4 h-4 object-contain"
      />
      {label}
    </button>
  );
};

export default ActionButton;