const itemInp = document.getElementById('item-inp');
const qtyInp = document.getElementById('qty-inp');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('list');


addBtn.addEventListener('click', function () {
    const itemName = itemInp.value;
    const itemQty = qtyInp.value;

    const li = document.createElement('li');
    li.innerText = `${itemName} -- ${itemQty}`;
    list.append(li);

    itemInp.value = "";
    qtyInp.value = "";
});