// DateSelector.js
import { useNewsContext } from '../contexts/NewsContext';

const DateSelector = () => {
  const { date, setDate } = useNewsContext();

  return (
    <div className="my-4">
      <input
        type="date"
        value={date.split(',')[0] || ''}
        onChange={(e) => setDate(e.target.value)}
        disabled
        className="w-full py-2 px-3 bg-transparent border border-gray-700 rounded-md text-sm font-medium text-gray-400 cursor-not-allowed"
      />
      <div className="mt-1 text-xs text-gray-500">Date selection unavailable in free plan</div>
    </div>
  );
};

export default DateSelector;