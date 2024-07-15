// counter
function incrementProjectCount() {
  // Get the current count from the element
  const projectCountElement = document.getElementById("projectCount");
  let currentCount = parseInt(projectCountElement.getAttribute("data-target"));

  // Increment the count
  currentCount++;

  // Update the element with the new count
  projectCountElement.setAttribute("data-target", currentCount);
  projectCountElement.textContent = currentCount + " +";
}
