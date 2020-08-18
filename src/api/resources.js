export async function getResources() {
  const response = await fetch("http://localhost:3333/resources");
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();
  console.log(data);

  return data;
}

export async function addResource() {
  fetch("http://localhost:3333/resources", {
    method: "POST",
    body: JSON.stringify({ title: "React new stuff" }),
    headers: { "Content-Type": "application/json" },
  });
}
