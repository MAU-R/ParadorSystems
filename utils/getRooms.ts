


const rooms = [
    {
        id: 1,
        title: 'Suit Pipila',
        number: null,
        description: 'Con la mejor vista del centro de la ciudad disfruta del moderno suite en la parte mas alta del hotel',
        featured: true,
    }
]

const services = [
    {
        id:'wifi',
        icon: 'material-symbols:wifi',
        label: 'Wifi'
    },
    {
        id:'bath',
        icon: 'material-symbols:bathtub-outline-sharp',
        label: 'Baños'
    },
    {
        id:'persons',
        icon: 'material-symbols:person-apron-outline-rounded',
        label: 'Personas'
    }

]

const serviceOnRoom = [
    {
        roomId:1,
        services:[
            {
                serviceId:'wifi',
                quantity:null
            },
            {
                serviceId:'bath',
                quantity:2
            },
            {
                serviceId:'persons',
                quantity:2
            }
        ]
    }
]

const base64Image = [
    {
        id:1,
        description: 'Photo of the room 1',
        roomId:1
    },
    {
        id:2
    },
    {
        id:3
    }
]


 const getRoomServices = (roomId: number) => {
    const serviceRelation = serviceOnRoom.find(service => service.roomId === roomId)
    console.log("Pero que diablo esta pasando aqui")
    const imageIds = serviceRelation?.services?.map(service => service.serviceId)
    return services.filter(service => imageIds?.includes(service.id))
 }
 export const getFeaturedRooms = () => {
    const roomWithAll = rooms.map(room => {
        if (room.featured === true) {
            return {
                ...room,
                services: getRoomServices(room.id),
                images: base64Image.filter(image => image.roomId === room.id)
            }
        }
        return room;
    });
    return roomWithAll;
}

export const getSuites = { 

}