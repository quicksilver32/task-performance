const contacts = document.querySelector(".contacts");
const stickyHeader = document.querySelector(".stickyHeader");

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => {
  const contact = contacts.querySelector(".contact")
  stickyHeader.textContent = Math.floor(contacts.scrollTop / contact.offsetTop)
});

addContacts();