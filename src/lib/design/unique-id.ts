let currentId = 0

export function uniqueId(prefix: string = "uid"): string {
	return `${prefix}-${currentId++}`
}
