
<template>
  <header class="bg-white py-9 px-10">
    <div class="mx-auto flex justify-between items-center px-4">
      <NuxtLink to="/" class="text-2xl font-bold text-primary">
		<img src="~/assets/logo.svg" alt="Логотип" class="h-[25px] w-auto" />
	  </NuxtLink>

	  <div class="flex items-center gap-24">
		<nav class="space-x-4">
        <NuxtLink to="/" class="hover:text-light transition">Works</NuxtLink>
        <NuxtLink to="/" class="hover:text-light transition">About</NuxtLink>
      </nav>
	  <div class="flex items-center gap-4">
		<button class="rounded-full border-2 border-light w-[52px] h-[52px] flex items-center justify-center">
			<img src="~/assets/uk.svg" alt="Логотип" class="h-8 w-auto" />
		</button>
		<button class="rounded-full bg-primary text-white px-8 h-[52px] hover:text-primary transition hover:bg-light">
			Let’s work
		</button>
	  </div>
	  </div>
      
    </div>
  </header>
</template>
