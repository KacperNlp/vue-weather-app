<template>
  <div class="flex flex-col min-h-screen">
    <main class="w-3/4 mx-auto my-8 grow">
      <slot name="main"></slot>
    </main>
    <footer class="flex justify-center bg-gray-900 px-4 py-6 text-sm">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
