<script>
	import { enhance } from '$app/forms';
	import { nanoid } from 'nanoid';
	import { goto } from '$app/navigation';

	let isLoading = false;
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
					<div class="sm:col-span-3">
						<label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
						<div class="mt-2">
							<input type="text" name="firstname" id="firstname" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
						<div class="mt-2">
							<input type="text" name="lastname" id="lastname" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
						<div class="mt-2">
							<input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
						<div class="mt-2">
							<input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>

					<div class="col-span-full">
						<label for="address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
						<div class="mt-2">
							<input type="text" name="address" id="address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="state" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
						<div class="mt-2">
							<input type="text" name="state" id="state" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="postal" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
						<div class="mt-2">
							<input type="text" name="postal" id="postal" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
						</div>
					</div>
				</div>

				<div class="mt-6 flex items-center justify-end gap-x-6">
					<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
					<button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
				</div>
			</div>
		</div>
	</form>
</div>
