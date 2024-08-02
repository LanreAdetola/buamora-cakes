<template>
  <section id="gallery">
    <h2>Gallery</h2>
    <div class="gallery">
      <img v-for="image in galleryImages" :key="image.alt" :src="image.src" :alt="image.alt">
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryPage'  // Updated name
}
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
.gallery {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.gallery img {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}
</style>
