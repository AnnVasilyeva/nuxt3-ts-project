<template>
  <footer class="bg-violet text-primary pt-14 sm:pt-32 lg:pt-36">
    <div class="container mx-auto px-4 sm:px-6 lg:px-0">
      <p class="text-base mb-6 lg:mb-14">Is there a project?</p>

      <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 mb-24 lg:mb-36">
        <div class="text-5xl sm:text-7xl lg:text-[112px] max-w-full lg:max-w-[470px] underline font-normal leading-none">
          Let’s work together
        </div>

        <div class="flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-9 text-base w-full lg:w-auto">
          <div>
            <p class="mb-3">For all questions</p>
            <address class="not-italic">
              <a
                href="tel:+79202780068"
                class="block hover:underline mb-1"
              >
                +7 (920) 278—00—68
              </a>
              <a
                href="mailto:qtim@agency.com"
                class="block hover:underline"
              >
                qtim@agency.com
              </a>
            </address>
          </div>

          <div>
            <p class="mb-3">Office in Russia</p>
            <p class="mb-2 max-w-44">
              139 Ruben Station Lake Drew, NM 52678
            </p>
            <address class="not-italic">
              <a
                href="https://maps.google.com/?q=139 Ruben Station Lake Drew, NM 52678"
                target="_blank"
              >
                <img
                  src="~/assets/button-location.svg"
                  alt="button-location"
                  class="h-8 w-8 hover:scale-110 transition-transform"
                />
              </a>
            </address>
          </div>

          <div>
            <p class="mb-3">Office in Dubai</p>
            <p class="mb-2 max-w-44">
              139 Ruben Station Lake Drew, NM 52678
            </p>
            <address class="not-italic">
              <a
                href="https://maps.google.com/?q=139 Ruben Station Lake Drew, NM 52678"
                target="_blank"
              >
                <img
                  src="~/assets/button-location.svg"
                  alt="button-location"
                  class="h-8 w-8 hover:scale-110 transition-transform"
                />
              </a>
            </address>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div class="flex flex-wrap justify-center sm:justify-start gap-6 lg:gap-8">
          <a href="/" class="underline hover:text-secondary">Facebook</a>
          <a href="/" class="underline hover:text-secondary">Instagram</a>
          <a href="/" class="underline hover:text-secondary">Telegram</a>
        </div>

		<div class="flex lg:hidden flex-wrap justify-center sm:justify-end gap-6 lg:gap-8">
          <a href="/" class="underline hover:text-secondary">Behance</a>
          <a href="/" class="underline hover:text-secondary">LinkedIn</a>
          <a href="/" class="underline hover:text-secondary">Privacy Policy</a>
        </div>

        <button class="relative flex flex-col items-center group transition-transform hover:scale-105">
          <div class="w-[240px] sm:w-[300px] lg:w-[358px] h-[120px] sm:h-[150px] lg:h-[179px] bg-primary text-white rounded-t-full flex items-center justify-center">
            <span class="translate-y-[30%] text-lg sm:text-xl font-semibold group-hover:translate-y-[20%] transition-transform">
              Go
            </span>
          </div>
        </button>

        <div class="hidden lg:flex flex-wrap justify-center sm:justify-end gap-6 lg:gap-8">
          <a href="/" class="underline hover:text-secondary">Behance</a>
          <a href="/" class="underline hover:text-secondary">LinkedIn</a>
          <a href="/" class="underline hover:text-secondary">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>
