<script lang="ts">
	import tarFile from '$lib/archive/notarealarchive.tar'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Home</h1>
	<a href="{tarFile}" target="_blank" download>Download TAR File</a>
</section>
