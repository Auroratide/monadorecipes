export function dismissable(node: HTMLDetailsElement) {
	node.addEventListener("click", (e) => {
		e.stopPropagation()
	})

	document.addEventListener("click", () => {
		node.open = false
	})

	document.addEventListener("keyup", (e) => {
		if (e.key === "Escape") {
			node.open = false
		}
	})
}
