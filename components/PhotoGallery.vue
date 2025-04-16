<template>
    <Tabs lazy value="0" class="bg-white! mt-6">
      <TabList class="bg-white">
        <Tab
          v-for="tab in categories"
          :key="tab.title"
          :value="tab.value"
          class="font-bold bg-(--primary-light) text-(--blue-normal) 2xl:text-xl xl:text-xl"
        >
          {{ tab.title }}
        </Tab>
      </TabList>
  
      <TabPanels>
        <TabPanel
          v-for="tab in categories"
          :key="tab.value"
          :value="tab.value"
          class="bg-(--primary-light) grid gap-1 w-full
                 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8
                 auto-rows-[minmax(100px,1fr)] h-auto"
        >
          <div
            v-for="img in tab.images"
            :key="img.description"
            class="w-full h-full bg-cover bg-center relative cursor-pointer"
            :style="`background-image: url(${img.url})`"
            :class="img.grid"
            @click="openImage(img)"
          >
            <div class="absolute inset-0 bg-black/35" />
            <div class="relative z-10 flex items-center justify-center h-full">
              <h2 class="text-white text-base sm:text-lg md:text-xl font-bold text-center">
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
            class="absolute top-2 right-2 text-white text-3xl font-bold z-50 hover:text-red-400 transition"
            @click="closeModal"
          >
            &times;
          </button>
          <img :src="selectedImage?.url" :alt="selectedImage?.description" class="w-full h-auto rounded-xl shadow-lg" />
          <p class="text-white text-center mt-4">{{ selectedImage?.description }}</p>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Tabs from 'primevue/tabs';
  import TabList from 'primevue/tablist';
  import Tab from 'primevue/tab';
  import TabPanels from 'primevue/tabpanels';
  import TabPanel from 'primevue/tabpanel';
  
  const showModal = ref(false);
  const selectedImage = ref(null);
  
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
  
  <style >
  /* Modal fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* Optional: animate content inside modal */
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

  section#photoGallery{
    background-color: var(--primary-light);
    .p-tablist{
        background-color: var(--primary-light);
        border-color: var(--primary-light) ;
    }	
    .p-tablist-content{
        background-color: var(--primary-light);
        color: var(--blue-normal);
        border-color: var(--primary-light) ;
    }
    .p-tablist-tab-list{
        background-color: var(--primary-light);
        border-width: 0px;
        border-color: var(--primary-light) ;
        justify-content: center;
        button{
            color: var(--blue-normal);
            
            margin-right:0.5vw ;
            width: min(150px, 33vw);
        }
        
    }	

.p-tabpanels{
    background-color: var(--primary-light);
    border-color: var(--primary-light) ;
}
.p-tablist-active-bar{
    background-color: var(--blue-dark);
}
}
  </style>
  