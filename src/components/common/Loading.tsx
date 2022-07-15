export const LoadingSpinner = () => {
  return (
    <svg
      className="animate-spin-slow h-10 w-10 bg-cyan-500"
      viewBox="0 0 24 24"
    />
  );
};

const LoadingContainer = () => {
  return (
    <div className="h-screen max-w-full grid justify-center content-center bg-slate-900">
      <LoadingSpinner />
    </div>
  );
};

export default LoadingContainer;
