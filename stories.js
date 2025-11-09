document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("storyForm");
  const storiesContainer = document.getElementById("stories");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const story = document.getElementById("story").value;

      const stories = JSON.parse(localStorage.getItem("stories") || "[]");
      stories.push({ name, story });
      localStorage.setItem("stories", JSON.stringify(stories));

      form.reset();
      alert("История добавлена!");
    });
  }

  if (storiesContainer) {
    const stories = JSON.parse(localStorage.getItem("stories") || "[]");
    stories.forEach(({ name, story }) => {
      const div = document.createElement("div");
      div.className = "student-card";
      div.innerHTML = `<h3>${name}</h3><p>${story}</p>`;
      storiesContainer.appendChild(div);
    });
  }
});
