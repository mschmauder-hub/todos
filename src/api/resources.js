export async function getResources() {
  const response = await fetch("http://localhost:3333/resources");
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();

  return data;
}
