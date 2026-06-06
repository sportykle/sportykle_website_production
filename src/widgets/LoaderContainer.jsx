const LoaderContainer = ({ isLoading, spinner, children }) => (
  <div className="relative max-h-[100vh] overflow-y-auto">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50 rounded-2xl">
        {spinner}
      </div>
    )}
  </div>
)

export default LoaderContainer
