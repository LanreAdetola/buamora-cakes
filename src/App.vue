<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <p>&copy; 2024 BUAMORA CAKES AND PASTRIES</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; /* Dark grey */
  background-color: #f9f9f9; /* Light background for contrast */
}

header {
  background-color: #42b983; /* Light green for the header */
  padding: 1rem 0; /* Add some padding */
}

nav {
  padding: 1rem 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 1rem;
}

nav a {
  font-weight: bold;
  color: white; /* White text on green background */
  text-decoration: none;
}

nav a:hover {
  color: #d1e0d5; /* Lighter green for hover effect */
}

nav a.router-link-exact-active {
  color: #fff; /* Ensure active link is white */
}

footer {
  padding: 1rem;
  background-color: #42b983; /* Match header background */
  color: white; /* White text for the footer */
}
</style>
