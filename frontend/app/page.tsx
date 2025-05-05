'use client';

async function fetchData() {
  const res = await fetch('/api/'); // Proxy to Python backend
  const data = await res.json();
  console.log(data);
}

export default function Home() {

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <button onClick={fetchData}>Call Python Backend</button>
    </div>
  );

}
