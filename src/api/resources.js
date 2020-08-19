export async function getResources() {
  const response = await fetch("http://localhost:3333/resources");
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();

  return data;
}

export async function addResource(newTitle, category) {
  console.log(category);
  const response = await fetch(`http://localhost:3333/categories/${category}`);
  const data = await response.json();

  if (category) {
    fetch("http://localhost:3333/resources", {
      method: "POST",
      body: JSON.stringify({
        title: newTitle,
        img: data.img,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }
}
