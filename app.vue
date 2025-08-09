<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Main app content with proper mobile spacing -->
    <main class="lg:pt-20 pt-16 pb-20 lg:pb-0">
      <NuxtPage />
    </main>
    
    <!-- Global notification container -->
    <NotificationContainer />
    
    <!-- Back to top button -->
    <BackToTop />
  </div>
</template>

<script setup>
// This is the root app component
</script>