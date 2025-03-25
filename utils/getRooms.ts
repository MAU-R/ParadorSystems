


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
        icon: '',
        label: 'Wifi'
    }

]

const serviceOnRoom = [
    {
        roomId:1,
        services:[
            {
                serviceId:'wifi',
                quantity:null
            }
        ]
    }
]

const base64Image = [
    {
        id:1
    }
]

const imageOnRoom = [
    {
        roomId: 1,
        images: [1, 2, 3]
    }
]

const getgallery=(roomId: number)=>{
    const imageRelation= imageOnRoom.find(image => image.roomId === roomId)
    return imageRelation?.images?.map(image => base64Image.filter(img => img.id === image))
}

//const getServices = ()
export const getFeaturedRooms = () =>{
    return rooms.filter(room =>{
        if (room.featured==true)
            return {
        ...rooms,
        gallery: base64Image.filter(
                    }
         
    })
}

export const getSuites = { 

}