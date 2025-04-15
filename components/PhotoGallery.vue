<template>
    <Tabs lazy value="0" class="bg-white! mt-6">
    <TabList class="bg-white">
        <Tab
            v-for="tab in categories" :key="tab.title"
            :value="tab.value" 
            class="font-bold bg-(--primary-light) text-(--blue-normal) 2xl:text-xl xl:text-xl">
            {{ tab.title }}
        </Tab>
    </TabList>
    <TabPanels>
        <TabPanel
          v-for="tab in categories"
          :key="tab.value"
          :value="tab.value"
          class="bg-(--primary-light) grid grid-cols-8 grid-rows-3 gap-1 w-full 2xl:h-[65vh] xl:h-[60vh] md:h-[50vh] xs:h-[45vh] h-[50vh]"
          >
            <div
             v-for="img in tab.images" :key="img.description"
             class="w-full h-full  bg-cover bg-center relative" 
             :class=" `${img.grid} bg-[url(${img.url})]`"
             >
                <div class="absolute inset-0 bg-black/50"/>     
                <div class="relative z-10 flex items-center justify-center h-full">
                    <h2 class="text-white text-2xl font-bold">{{ img.description }}</h2>
                </div>
            </div>

        </TabPanel>
    </TabPanels>
</Tabs>
</template>

<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

          //4424478454
          //proufit group
const categories = [
    {
        title:'Vistas',
        value:"0",
        images:[
            {
                url:'"https://www.cultura.gob.mx/turismocultural/destino_mes/guanajuato/imgs/plaza_la_paz.jpg"',
                description:'Terraza del parador',
                grid:'col-span-4 row-span-2'
            },
            {
                url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqM1R_GvyAGwwcgZyf29mF5szz4Aws64HKBA&s',
                description:'Balcones',
                grid:'col-span-2 row-span-1'
            },
            {
                url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2Rq5dBWZtyOhY-uYgZY6roL1h96qeTtykQ&s',
                description:'Estacionamiento',
                grid:'col-span-2 row-span-1'
            },
            {
                url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9e6zPL0KGwRd7s3ZdH6Bsv9HP3VcxsoOLw&s',
                description:'Guanajuato centro',
                grid:'col-span-4 row-span-2'
            },
            {
                url:'https://bajio.quadratin.com.mx/www/wp-content/uploads/2024/01/gto4.jpg',
                description:'Pasillos',
                grid:'col-span-2 row-span-1'
            },
            {
                url:'https://elinformadordelrincon.com/wp/wp-content/uploads/2022/09/FB_IMG_1662773173461-1080x640.jpg',
                description:'Jardines',
                grid:'col-span-2 row-span-1'
                
            }
        ]
    },
    {
        title:'Servicios',
        value:"1"
    },
    {
        title:'Experiencias',
        value:"2"
    }
]

</script>

<style>
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