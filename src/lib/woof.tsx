export function Woof({ hello = "woof" }: { hello?: string }) {
  return <div>{hello}</div>;
}
