<script>
	export let options;
	export let value = '';
</script>

<div class="sm:col-span-3">
	<label for="state" class="block text-sm font-medium leading-6 text-gray-900">State / Provinces</label>
	<div class="mt-2">
		<select id="state" name="state" class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
			{#each options as option}
				<option value={option} selected={option === value}>{option}</option>
			{/each}
		</select>
	</div>
</div>
