function floodTrash(count) {
  const place = document.querySelector('.trash-place');
  const can = document.querySelector('.trash-can');
  const placeSizes = place.getBoundingClientRect()
  can.innerHTML = '<img src="./img/Trash.png" alt="">';

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.classList.add('trash-bag');
    img.src = "./img/trash-bag.png";
    img.style.top = `${Math.random()*370}px`;
    img.style.left = `${60 + Math.floor(Math.random()*(placeSizes.width - 100))}px`;
    place.append(img);
  }
}

floodTrash(21)

let bags = document.querySelectorAll('.trash-bag');

bags.forEach((bag) => {
  let currentNumber = null;
  let onDrop = false;
  bag.onmousedown = function (event) {

    let shiftX = event.clientX - bag.getBoundingClientRect().left;
    let shiftY = event.clientY - bag.getBoundingClientRect().top;

    bag.style.position = 'absolute';
    bag.style.zIndex = 1000;
    document.body.append(bag);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      bag.style.left = pageX - shiftX + 'px';
      bag.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      bag.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      bag.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.trash-can');
      if (currentNumber != droppableBelow) {
        if (currentNumber) {
          onDrop = false;
          leaveDroppable(currentNumber);

        }
        currentNumber = droppableBelow;
        if (currentNumber) {
          onDrop = true;
          enterDroppable(currentNumber);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    bag.onmouseup = function () {
      if (onDrop) {
        leaveDroppable(currentNumber)
        onDrop = false;
        bag.style.display = 'none';
      }
      document.removeEventListener('mousemove', onMouseMove);
      bag.onmouseup = null;
    };

  };

  function enterDroppable(elem) {
    elem.innerHTML = '<img src="./img/openTrash.png" alt="">';
  }

  function leaveDroppable(elem) {
    elem.innerHTML = '<img src="./img/Trash.png" alt="">';
  }

  bag.ondragstart = function () {
    return false;
  };
})