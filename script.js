
  const internships = document.querySelectorAll(".internship");

  internships.forEach(div => {
    div.addEventListener("click", () => {
      const url = div.dataset.link;
      window.location.href = url;
    });
  });
