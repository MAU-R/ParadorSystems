


const rooms = [
    {
        id: 1,
        title: 'Suit Pipila',
        number: null,
        description: 'Con la mejor vista del centro de la ciudad disfruta del moderno suite en la parte mas alta del hotel',
        featured: true,
        price:1500
    },
    {
        id: 2,
        title: 'Suit Pipila',
        number: null,
        description: 'Con la mejor vista del centro de la ciudad disfruta del moderno suite en la parte mas alta del hotel',
        featured: true,
        price:1500
    },
    {
        id: 3,
        title: 'Suit Pipila',
        number: null,
        description: 'Con la mejor vista del centro de la ciudad disfruta del moderno suite en la parte mas alta del hotel',
        featured: true,
        price:1500
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
    },
    {
        roomId:2,
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
    },
    {
        roomId:3,
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
            },
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
    const serviceRelation = serviceOnRoom.find(service => service.roomId === roomId);
    
    if (!serviceRelation) return [];
    
    return serviceRelation.services.map(relation => {
        const service = services.find(s => s.id === relation.serviceId);
        return {
            ...service,
            quantity: relation.quantity
        };
    });
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