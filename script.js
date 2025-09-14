const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Tính toán vùng hiển thị section
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.375  // cần 60% section trong khung hình mới coi là active
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Bỏ active cũ
      navLinks.forEach(link => link.classList.remove("active"));

      // Lấy id section
      const id = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, options);

// Quan sát từng section
sections.forEach(sec => observer.observe(sec));
