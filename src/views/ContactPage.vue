<template>
  <section id="contact">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="contactForm.name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="contactForm.email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" v-model="contactForm.message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.contactForm);
    }
  }
}
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form label {
  margin-top: 1rem;
}
form input, form textarea {
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
}
form button {
  margin-top: 1rem;
  padding: 0.75rem;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
form button:hover {
  background-color: #555;
}
</style>
