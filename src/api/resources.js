export async function getResources() {
  const response = await fetch("http://localhost:3333/resources");
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();
  console.log(data);

  return data;
}

export function addResource(newTitle) {
  fetch("http://localhost:3333/resources", {
    method: "POST",
    body: JSON.stringify({ title: newTitle }),
    headers: { "Content-Type": "application/json" },
  });
}
