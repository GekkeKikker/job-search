<template>
  <header class="w-full text-sm"></header>
  <div class="fixed top-0 left-0 h-16 w-full bg-white">
    <div
      class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 my-2 mx-auto"
    >
      <a href="/" class="flex h-full item-center text-xl">{{ company }}</a>
      <h2 class="ml-8 flex h-full items-center">Developed by {{ author }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Bobo Careers",
      author: "Maarten Alles",
    };
  },
};
</script>
