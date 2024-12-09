export default function Loading() {
  return (
    <div className="space-y-4 p-4">
      {/* Skeleton loader for multiple user cards */}
      {[1, 2, 3].map(index => (
        <div
          key={index}
          className="h-24 rounded-lg bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  );
}
