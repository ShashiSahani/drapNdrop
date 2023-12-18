 // Get the fill and empty elements
 const fill = document.querySelector(".fill");
 const empties = document.querySelectorAll(".empty");

 // Add event listeners to the fill element
 fill.addEventListener("dragstart", dragStart);
 fill.addEventListener("dragend", dragEnd);

 // Add event listeners to each empty element
 for (const empty of empties) {
     empty.addEventListener("dragover", dragOver);
     empty.addEventListener("dragenter", dragEnter);
     empty.addEventListener("dragleave", dragLeave);
     empty.addEventListener("drop", dragDrop);
 }

 // Function to handle drag start event
 function dragStart() {
     this.classList.add("hold");
     setTimeout(() => (this.classList.add("invisible")), 0);
 }

 // Function to handle drag end event
 function dragEnd() {
     console.log("drag End");
     this.classList.remove("hold", "invisible");
     this.classList.add("fill");
 }

 // Function to handle drag over event
 function dragOver(e) {
     console.log("drag over");
     e.preventDefault();
 }

 // Function to handle drag leave event
 function dragLeave() {
     console.log("drag leave");
 }

 // Function to handle drag drop event
 function dragDrop() {
     console.log("drag drop");
     this.classList.remove("hovered");
     this.appendChild(fill);
 }

 // Function to handle drag enter event
 function dragEnter(e) {
     console.log("drag Enter");
     e.preventDefault();
     this.classList.add("hovered");
 }