<template>
  <header class="navbar fixed top-0 w-full">
    <nav class="container mx-auto">
      <div class="my-4 flex justify-center">
        <ul class="flex flex-row">
          <li
            class="mx-2 px-2 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li
            class="mx-2 px-2 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <a href="#work">Work</a>
          </li>
          <li
            class="mx-2 px-2 text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="css">
.navbar {
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}
</style>
