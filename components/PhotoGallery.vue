<template>
  <section id="photoGallery">
    <Tabs v-model:active-index="activeIndex" class="w-full mt-6">
      <TabList class="w-full flex justify-center gap-2 relative pb-1">
        <Tab
          v-for="(tab, index) in categories"
          :key="tab.title"
          class="font-bold bg-(--primary-light) text-(--blue-normal)
                 2xl:text-xl xl:text-xl px-4 py-2 relative z-10
                 hover:opacity-80 transition-all duration-200"
          :class="{ 'text-(--blue-dark)': activeIndex === index }"
          :value="tab.value"
          @click="activeIndex = index"
        >
          {{ tab.title }}
        </Tab>
        <!-- Active bar indicator -->
        <div 
          class="absolute bottom-0 h-1 bg-(--blue-dark) transition-all duration-300 ease-in-out z-0"
          :style="activeBarStyle"
        />
      </TabList>
  
      <TabPanels>
        <TabPanel
          v-for="(tab, index) in categories"
          v-show="activeIndex === index"
          :key="tab.value"
          :value="tab.value"
          class="bg-(--primary-light) grid gap-1 w-full
                 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8
                 auto-rows-[minmax(100px,1fr)] h-[70vh]"
        >
          <div
            v-for="img in tab.images"
            :key="img.description"
            class="w-full h-full bg-cover bg-center relative cursor-pointer"
            :style="`background-image: url(${img.url})`"
            :class="img.grid"
            @click="openImage(img)"
          >
            <div class="absolute inset-0 background-gradient" />
            <div class="relative z-10 flex items-end justify-start h-full p-4">
              <h2 class="text-(--blue-light-hover) 2xl:text-3xl xl:text-2xl sm:text-md md:text-xl font-extrabold text-center">
                {{ img.description }}
              </h2>
            </div>
          </div>
        </TabPanel> 
      </TabPanels>
    </Tabs>
  
    <!-- Modal with transition -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="relative max-w-4xl w-full px-4 animate-fadeIn">
          <button
            class="absolute top-2 right-6 text-(--blue-normal) transition-all duration-300 ease-in-out text-3xl font-bold z-50 hover:text-(--blue-darker) hover:bg-(--primary-light-active) rounded-[50%] bg-(--primary-light-hover) w-12 h-12 hover:h-13 hover:w-13"
            @click="closeModal"
          >
            &times;
          </button>
          <img :src="selectedImage?.url" :alt="selectedImage?.description" class="w-full h-auto rounded-xl shadow-lg">
          <p class="text-(--primary-light-hover) text-center mt-4 font-black text-4xl">{{ selectedImage?.description }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeIndex = ref(0);
const showModal = ref(false);
const selectedImage = ref(null);

// Compute active bar position and width
const activeBarStyle = computed(() => {
  const tabCount = categories.length;
  const width = 100 / tabCount;
  return {
    width: `${width}%`,
    left: `${activeIndex.value * width}%`,
    transform: 'translateX(0)' // Ensures proper positioning
  };
});

const openImage = (img) => {
  selectedImage.value = img;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = null;
};

const categories = [
  {
    title: 'Vistas',
    value: '0',
    images: [
      {
        url: 'https://www.cultura.gob.mx/turismocultural/destino_mes/guanajuato/imgs/plaza_la_paz.jpg',
        description: 'Terraza del parador',
        grid: 'col-span-4 row-span-2',
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqM1R_GvyAGwwcgZyf29mF5szz4Aws64HKBA&s',
        description: 'Balcones',
        grid: 'col-span-2 row-span-1',
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2Rq5dBWZtyOhY-uYgZY6roL1h96qeTtykQ&s',
        description: 'Estacionamiento',
        grid: 'col-span-2 row-span-1',
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9e6zPL0KGwRd7s3ZdH6Bsv9HP3VcxsoOLw&s',
        description: 'Guanajuato centro',
        grid: 'col-span-4 row-span-2',
      },
      {
        url: 'https://bajio.quadratin.com.mx/www/wp-content/uploads/2024/01/gto4.jpg',
        description: 'Pasillos',
        grid: 'col-span-2 row-span-1',
      },
      {
        url: 'https://elinformadordelrincon.com/wp/wp-content/uploads/2022/09/FB_IMG_1662773173461-1080x640.jpg',
        description: 'Jardines',
        grid: 'col-span-2 row-span-1',
      },
    ],
  },
  {
    title: 'Servicios',
    value: '1',
    images: [],
  },
  {
    title: 'Experiencias',
    value: '2',
    images: [],
  },
];
</script>

<style>
/* Active bar styling */
#photoGallery .p-tablist-tab-list {
  position: relative;
  border-bottom: none;
}

/* Tab styling */
#photoGallery .p-tablist .p-tablist-tab {
  background: transparent;
  border: none;
  margin: 0;
  padding: 0.5rem 1rem;
}

/* Active tab text color */
#photoGallery .p-tablist .p-tablist-tab.active-tab {
  color: var(--blue-dark);
}

/* Modal fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animate content inside modal */
@keyframes fadeIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease;
}

/* Image gradient overlay */
.background-gradient {
  background-image: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1));
}

/* Section background */
#photoGallery {
  background-color: var(--primary-light);
}
</style>  