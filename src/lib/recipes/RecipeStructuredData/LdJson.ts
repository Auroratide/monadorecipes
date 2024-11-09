export const LdJson = {
	stringify: (obj: object) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`,
} as const
