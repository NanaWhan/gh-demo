<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Main app content with proper mobile spacing -->
    <main class="pb-20 lg:pb-0">
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