<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import Input from '$lib/components/Input.svelte';
	import Province from '$lib/components/Province.svelte';

	let isLoading = false;
	export let data;
	$: ({ contact, options } = data);
</script>

<svelte:head>
	<title>Add user</title>
</svelte:head>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 w-3/4">
	<form
		method="POST"
		action="?/update"
		use:enhance={({ element, data }) => {
			isLoading = true;
			return async ({ update, result }) => {
				if (result.type === 'success') {
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
					<Input span="sm:col-span-3" inputName="firstname" label="First Name" value={contact?.firstname} />
					<Input span="sm:col-span-3" inputName="lastname" label="Last Name" value={contact?.lastname} />
					<Input span="sm:col-span-3" inputName="email" label="Email address" value={contact?.email} />
					<Input span="sm:col-span-3" inputName="phone" label="Phone number" value={contact?.phone} />
					<Input span="sm:col-span-full" inputName="address" label="Street address" value={contact?.address} />
					<Province {options} value={contact?.state} />
					<Input span="sm:col-span-3" inputName="postal" label="ZIP / Postal code" value={contact?.postal} />
				</div>

				<div class="mt-6 flex items-center justify-end gap-x-6">
					<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
					<button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
				</div>
			</div>
		</div>
	</form>
</div>
