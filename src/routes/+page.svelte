<script>
	import { enhance } from '$app/forms';

	export let data;
	$: ({ contacts } = data);
	$: filteredContacts = () => {
		if (data.search) {
			return contacts.filter((contact) => {
				return contact.firstname.toLowerCase().includes(data.search.toLowerCase()) || contact.lastname.toLowerCase().includes(data.search.toLowerCase());
			});
		} else {
			return contacts;
		}
	};
</script>

<svelte:head>
	<title>Contacts App</title>
</svelte:head>

<div class="mx-auto w-full max-w-7xl py-6 sm:px-6 lg:px-8">
	<div class="py-10">
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="flex sm:align-middle">
				<div class="flex-auto">
					<h1 class="text-base font-semibold leading-6 text-gray-900">Contacts</h1>
					<p class="mt-1 text-sm text-gray-500">A list of all the contacts</p>
				</div>
				<div class="my-auto">
					<a href="/add" class="my-auto inline-flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 bio bou bov box bpe">
						<svg class="md:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
						<span class="hidden md:inline my-auto text-inherit">Add User</span>
					</a>
				</div>
			</div>
			<div class="mt-8 flow-root">
				<div class="flex flex-col">
					<div class="sm:flex sm:items-center md:ms-auto">
						<div class="w-full max-w-lg lg:max-w-xs">
							<label for="search" class="sr-only">Search</label>
							<div class="relative text-gray-400 focus-within:text-gray-600">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex align-middle pl-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 m-auto">
										<path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<input id="search" class="block w-full rounded-md border-0 bg-gray-200 py-1.5 pl-10 pr-3 text-gray-900 focus:shadow-sm focus:ring-1 focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" bind:value={data.search} />
							</div>
						</div>
					</div>
					<div class="inline-block min-w-full py-2 align-middle">
						<table class="min-w-full border-separate border-spacing-0">
							<thead>
								<tr>
									<th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur">Full Name</th>
									<th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur md:table-cell">Phone</th>
									<th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur lg:table-cell">Street Address</th>
									<th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur lg:table-cell">State</th>
									<th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur lg:table-cell">Postal Code</th>
									<th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-3 pr-4 backdrop-blur sm:pr-6 lg:pr-8">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-300">
								{#each filteredContacts() as contact}
									<tr>
										<td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm font-medium text-gray-900">
											<div class="flex align-middle">
												<div class="jx">
													<div class="font-medium text-gray-900">{contact.firstname} {contact.lastname}</div>
													<div class="mt-1 text-gray-500">{contact.email}</div>
													<div class="mt-1 text-gray-500 md:hidden">{contact.phone}</div>
												</div>
											</div>
										</td>
										<td class="whitespace-nowrap hidden py-5 px-3 text-sm font-medium text-gray-900 md:table-cell">{contact.phone}</td>
										<td class="whitespace-nowrap hidden py-5 px-3 text-sm font-medium text-gray-900 lg:table-cell">{contact.address}</td>
										<td class="whitespace-nowrap hidden py-5 px-3 text-sm font-medium text-gray-900 lg:table-cell">{contact.state}</td>
										<td class="whitespace-nowrap hidden py-5 px-3 text-sm font-medium text-gray-900 lg:table-cell">{contact.postal}</td>
										<td class="whitespace-nowrap py-5 px-3 text-sm font-medium text-gray-900">
											<a href="/update/{contact._id}" class=" pr-4 text-indigo-600 hover:text-indigo-900">
												Edit<span class="sr-only">{contact.name}</span>
											</a>
											<form action="?/delete" method="POST" class="inline" use:enhance>
												<input type="hidden" name="contactId" value={contact._id} />
												<button class="text-orange-600 hover:text-orange-900" type="submit">
													Delete<span class="sr-only">{contact.name}</span>
												</button>
											</form>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
