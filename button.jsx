export function Button({ children, className }) {
  return <button className={`bg-copper text-white rounded-xl ${className}`}>{children}</button>;
}