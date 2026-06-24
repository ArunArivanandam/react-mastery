export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <div className={`text-xl font-bold text-gray-800 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "", ...props }) {
  return (
    <div className={`px-6 py-4 text-gray-600 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }) {
  return (
    <div
      className={`px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
