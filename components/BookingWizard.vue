<template>
  <div class="booking-wizard">
    <!-- Progress Indicator -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
        <div class="text-sm text-gray-500">
          Step {{ currentStep + 1 }} of {{ steps.length }}
        </div>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          class="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
          :style="{ width: `${((currentStep + 1) / steps.length) * 100}%` }"
        ></div>
      </div>

      <!-- Step Indicators -->
      <div class="flex justify-between">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="flex flex-col items-center"
          :class="{ 'opacity-50': index > currentStep }"
        >
          <div 
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300"
            :class="getStepClass(index)"
          >
            <svg v-if="index < currentStep" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <span class="text-xs mt-2 text-center max-w-20">{{ step.title }}</span>
        </div>
      </div>
    </div>

    <!-- Error/Success Messages -->
    <div v-if="errorMessage" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div class="flex items-center">
        <svg class="h-5 w-5 text-red-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <p class="text-sm font-medium text-red-800">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Step Content -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          {{ steps[currentStep]?.title }}
        </h3>
        <p v-if="steps[currentStep]?.description" class="text-gray-600 mb-6">
          {{ steps[currentStep]?.description }}
        </p>
        
        <!-- Dynamic step content -->
        <slot :name="`step-${currentStep}`" :step="steps[currentStep]" :formData="formData">
          <div class="text-center py-8 text-gray-500">
            Step content not defined
          </div>
        </slot>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex justify-between items-center">
      <button
        v-if="currentStep > 0"
        @click="previousStep"
        type="button"
        class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200"
      >
        ← Previous
      </button>
      <div v-else></div>

      <div class="flex space-x-3">
        <button
          v-if="allowSaveProgress"
          @click="saveProgress"
          type="button"
          class="px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium rounded-lg transition-colors duration-200"
        >
          💾 Save Progress
        </button>

        <button
          v-if="currentStep < steps.length - 1"
          @click="nextStep"
          type="button"
          :disabled="!canProceed"
          class="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium rounded-lg transition-all duration-200"
        >
          Next →
        </button>

        <button
          v-else
          @click="submitForm"
          type="button"
          :disabled="isSubmitting || !canSubmit"
          class="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium rounded-lg transition-all duration-200"
        >
          <span v-if="isSubmitting">{{ submitText.loading }}</span>
          <span v-else>{{ submitText.default }}</span>
        </button>
      </div>
    </div>

    <!-- Form Progress Save Info -->
    <div v-if="allowSaveProgress" class="mt-4 text-center">
      <p class="text-xs text-gray-500">
        💡 Your progress is automatically saved. You can return later to complete your booking.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

interface WizardStep {
  id: string;
  title: string;
  description?: string;
  required?: boolean;
  validation?: (data: any) => string[];
}

interface Props {
  title: string;
  steps: WizardStep[];
  formData: Record<string, any>;
  allowSaveProgress?: boolean;
  submitText?: {
    default: string;
    loading: string;
  };
  isSubmitting?: boolean;
  storageKey?: string;
}

const props = withDefaults(defineProps<Props>(), {
  allowSaveProgress: true,
  submitText: () => ({
    default: '✅ Submit Booking',
    loading: 'Submitting...'
  }),
  isSubmitting: false,
  storageKey: 'booking-wizard-progress'
});

const emit = defineEmits<{
  submit: [formData: Record<string, any>];
  stepChange: [step: number];
  saveProgress: [formData: Record<string, any>];
  updateFormData: [data: Record<string, any>];
}>();

// State
const currentStep = ref(0);
const errorMessage = ref('');
const savedSteps = ref<Set<number>>(new Set());

// Computed
const canProceed = computed(() => {
  const step = props.steps[currentStep.value];
  if (!step?.validation) return true;
  
  const errors = step.validation(props.formData);
  return errors.length === 0;
});

const canSubmit = computed(() => {
  // Check if all required steps are valid
  return props.steps.every((step, index) => {
    if (!step.required) return true;
    if (!step.validation) return true;
    
    const errors = step.validation(props.formData);
    return errors.length === 0;
  });
});

// Methods
const getStepClass = (index: number) => {
  if (index < currentStep.value) {
    return 'bg-green-500 text-white';
  } else if (index === currentStep.value) {
    return 'bg-purple-600 text-white';
  } else {
    return 'bg-gray-200 text-gray-600';
  }
};

const nextStep = () => {
  const step = props.steps[currentStep.value];
  errorMessage.value = '';
  
  // Validate current step
  if (step?.validation) {
    const errors = step.validation(props.formData);
    if (errors.length > 0) {
      errorMessage.value = errors[0];
      return;
    }
  }
  
  if (currentStep.value < props.steps.length - 1) {
    currentStep.value++;
    savedSteps.value.add(currentStep.value - 1);
    emit('stepChange', currentStep.value);
    
    // Auto-save progress
    if (props.allowSaveProgress) {
      saveProgress();
    }
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
    errorMessage.value = '';
    emit('stepChange', currentStep.value);
  }
};

const submitForm = () => {
  errorMessage.value = '';
  
  // Final validation
  if (!canSubmit.value) {
    errorMessage.value = 'Please complete all required fields before submitting.';
    return;
  }
  
  emit('submit', props.formData);
};

const saveProgress = () => {
  if (process.client && props.allowSaveProgress) {
    const progressData = {
      currentStep: currentStep.value,
      formData: props.formData,
      savedSteps: Array.from(savedSteps.value),
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(props.storageKey, JSON.stringify(progressData));
    emit('saveProgress', props.formData);
  }
};

const loadProgress = () => {
  if (process.client && props.allowSaveProgress) {
    const saved = localStorage.getItem(props.storageKey);
    if (saved) {
      try {
        const progressData = JSON.parse(saved);
        
        // Check if saved data is recent (within 7 days)
        const savedTime = new Date(progressData.timestamp);
        const daysDiff = (Date.now() - savedTime.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysDiff <= 7) {
          currentStep.value = progressData.currentStep || 0;
          savedSteps.value = new Set(progressData.savedSteps || []);
          
          // Emit saved form data
          if (progressData.formData) {
            emit('updateFormData', progressData.formData);
          }
        }
      } catch (error) {
        console.warn('Failed to load saved progress:', error);
      }
    }
  }
};

const clearProgress = () => {
  if (process.client && props.allowSaveProgress) {
    localStorage.removeItem(props.storageKey);
  }
};

// Lifecycle
onMounted(() => {
  loadProgress();
});

// Watch for form data changes to auto-save
watch(() => props.formData, () => {
  if (props.allowSaveProgress) {
    saveProgress();
  }
}, { deep: true, debounce: 1000 });

// Expose methods for parent component
defineExpose({
  nextStep,
  previousStep,
  saveProgress,
  clearProgress,
  currentStep: computed(() => currentStep.value),
  canProceed,
  canSubmit
});
</script>

<style scoped>
.booking-wizard {
  max-width: 4xl;
  margin: 0 auto;
}

/* Smooth step transitions */
.step-content {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .flex.justify-between .text-xs {
    font-size: 10px;
  }
  
  .max-w-20 {
    max-width: 60px;
  }
  
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>