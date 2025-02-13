<template>
  <div class="container">
    <h2 class="title">Register</h2>
    <form @submit.prevent="validateForm" class="form">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" type="text" />
        <div v-if="errors.name" class="error">{{ errors.name }}</div>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model="form.email" type="email" />
        <div v-if="errors.email" class="error">{{ errors.email }}</div>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="form.password" type="password" />
        <div v-if="errors.password" class="error">{{ errors.password }}</div>
      </div>

      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name) this.errors.name = 'Name is required';
      if (!this.form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) this.errors.email = 'Valid email is required';
      if (!this.form.password || this.form.password.length < 6) this.errors.password = 'Password must be at least 6 characters';

      if (Object.keys(this.errors).length === 0) {
        alert('Registration successful! Redirecting to home page...');
        setTimeout(() => {
          this.$router.push('/home');
        }, 1500);
      }
    }
  }
};
</script>