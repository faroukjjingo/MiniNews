// LoadingSpinner.js
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-10 h-10 border-2 border-gray-700 border-t-white rounded-full animate-spin">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;