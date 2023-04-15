<dl>
	<slot></slot>
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: auto auto;
		gap: 0.5rem;
		margin: 0;
	}

	dl :global(dd) {
		text-align: right;
	}
</style>
