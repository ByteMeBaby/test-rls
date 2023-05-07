import rockyBoy from "./rocky.jpeg";

export function Rocky() {
  return (
    <div className="flex justify-center items-center flex-col my-6">
      <img width={330} src={rockyBoy} alt="Rocky" />
      <h3>Rocky the good boy</h3>
    </div>
  );
}
