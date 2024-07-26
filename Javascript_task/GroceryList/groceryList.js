
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

function addItem() {
    const newItem = itemInput.value.trim();

    if (newItem !== "") {
        const li = document.createElement("li");
        const itemText = document.createElement("span");
        itemText.textContent = newItem;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(itemText);
        li.appendChild(deleteBtn);
        itemList.appendChild(li);

        itemInput.value = "";
    }
}