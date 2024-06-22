<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-1 flex-col p-4 w-full max-w-5xl mx-auto box-border">
		<slot />
	</main>
</div>
