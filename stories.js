document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("storyForm");
  const storiesContainer = document.getElementById("stories");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        name: document.getElementById("name").value,
        group: document.getElementById("group").value,
        year: document.getElementById("year").value,
        title: document.getElementById("title").value,
        story: document.getElementById("story").value,
        photo: document.getElementById("photo").value
      };

      const stories = JSON.parse(localStorage.getItem("stories") || "[]");

      stories.push(data);
      localStorage.setItem("stories", JSON.stringify(stories));

      form.reset();
      alert("История добавлена!");
    });
  }

  if (storiesContainer) {
    const stories = JSON.parse(localStorage.getItem("stories") || "[]");

    stories.forEach((s) => {
      const div = document.createElement("div");
      div.className = "student-card";

      div.innerHTML = `
        <h3>${s.name} — ${s.group} (${s.year} курс)</h3>
        <strong>${s.title}</strong>
        <p>${s.story}</p>
        ${s.photo ? `<img src="${s.photo}" style="max-width: 200px; border-radius: 5px; margin-top: 10px;">` : ""}
      `;

      storiesContainer.appendChild(div);
    });
  }
});
