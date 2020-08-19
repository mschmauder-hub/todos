export async function getResources() {
  const response = await fetch("http://localhost:3333/resources");
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();

  return data;
}

export async function addResource(newTitle, category) {
  const response = await fetch(`http://localhost:3333/categories/${category}`);
  const data = await response.json();

  fetch("http://localhost:3333/resources", {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      img: data.img,
    }),
    headers: { "Content-Type": "application/json" },
  });
}
export async function deleteResource(resourceId) {
  fetch(`http://localhost:3333/resources/${resourceId}`, {
    method: "DELETE",
  });
}
