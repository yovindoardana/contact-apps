<script>
	import { enhance } from '$app/forms';
	import { nanoid } from 'nanoid';
	import { goto } from '$app/navigation';

	import Input from '$lib/components/Input.svelte';
	import Province from '../../lib/components/Province.svelte';

	let isLoading = false;
	export let data;
	$: ({ options } = data);
</script>

<svelte:head>
	<title>Add Contact</title>
</svelte:head>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 w-3/4">
	<form
		method="POST"
		action="?/create"
		use:enhance={() => {
			isLoading = true;
			return async ({ result }) => {
				if (result.type === 'success') {
					isLoading = false;
					goto('/');
				}
			};
		}}
	>
		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base font-semibold leading-7 text-gray-900">Add Contact</h2>
				<p class="mt-1 text-sm leading-6 text-gray-600">Add a new contact</p>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<Input span="sm:col-span-3" inputName="firstname" label="First Name" />
					<Input span="sm:col-span-3" inputName="lastname" label="Last Name" />
					<Input span="sm:col-span-3" inputName="email" label="Email address" />
					<Input span="sm:col-span-3" inputName="phone" label="Phone number" />
					<Input span="sm:col-span-full" inputName="address" label="Street address" />
					<Province {options} />
					<Input span="sm:col-span-3" inputName="postal" label="ZIP / Postal code" />
				</div>

				<div class="mt-6 flex items-center justify-end gap-x-6">
					<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
					<button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isLoading}>
						{#if isLoading}
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
								<path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path>
							</svg>
						{:else}
							Save
						{/if}
					</button>
				</div>
			</div>
		</div>
	</form>
</div>
