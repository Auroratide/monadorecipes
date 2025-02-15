export function radioFocus(node: HTMLDetailsElement) {
	node.addEventListener("toggle", (e) => {
		const target = e.target as HTMLDetailsElement
		if (target.open) {
			target.querySelectorAll("input").forEach((input) => {
				if (input.checked) {
					input.focus()
				}
			})
		}
	})
}
