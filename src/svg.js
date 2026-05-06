export async function loadSVG() {
	const res = await fetch("/map.svg"); // get the map
	const text = await res.text();
	const container = document.getElementById("map-container"); // get the container for the map
	container.innerHTML = text;

	return container.querySelector("svg");
}

// overrides the default color of all counties
export function readyAll() {
	const paths = document.querySelectorAll("svg path");
	paths.forEach(path => {
		path.style.fill = "rgba(0, 128, 0, 0.45)";
	});
}

// highlights the county that is currently selected
export function highlightCounty(id) {
	clearHighlights();
  	const el = document.getElementById(id);
  	if (el) el.classList.add("highlight");

	// move the element to the top of the rendering order
	const parent = el.parentNode;
	parent.append(el);
}

// remove highlights from all counties
export function clearHighlights() {
  	document.querySelectorAll(".highlight").forEach(el =>
		el.classList.remove("highlight")
  	);
}

// show that a county has been successfully completed
export function completeCounty(id) {
	const el = document.getElementById(id);
	if (el) el.classList.add("complete")
}