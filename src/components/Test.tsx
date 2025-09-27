export default function Test({ children }: { children: React.ReactNode }) {
  console.log(children);
  return <div>{children}</div>;
}
