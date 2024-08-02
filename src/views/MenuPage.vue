<template>
  <section id="menu">
    <h2>Our Menu</h2>
    <input v-model="search" placeholder="Search for items..." />
    <ul>
      <li v-for="item in filteredMenuItems" :key="item.name">
        <strong>{{ item.name }}</strong> - {{ item.price }}
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MenuPage',  // Updated name
  data() {
    return {
      search: '',
      menuItems: [
        { name: 'Chocolate Cake', price: '$20', description: 'Rich and moist chocolate cake.' },
        { name: 'Red Velvet Cake', price: '$25', description: 'Classic red velvet with cream cheese frosting.' },
        { name: 'Cheesecake', price: '$30', description: 'Creamy cheesecake with a graham cracker crust.' }
      ]
    }
  },
  computed: {
    filteredMenuItems() {
      return this.menuItems.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 80%;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
}
</style>
