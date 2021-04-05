import bcrypt from 'bcryptjs';

const data = {
    user:[
        {
            name:'Neville',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'john',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],

    products:[
        {
     
            name:'Nike Slim Shirts',
            category: 'Shirts',
            image:'/image/image.jpg',
            price:'100',
            countInStock:20,
            brand:'Nike',
            rating:3.5,
            numReviews: 10,
            description:'High Quality Products'
        },
        {  
            name:'Addidas Slim Shirts',
            category: 'Shirts',
            image:'/image/image.jpg',
            price:'300',
            brand:'Nike',
            rating:2.5,
            countInStock:2,
            numReviews: 10,
            description:'High Quality Products'
        },
        {            
            name:'Gucci Slim Shirts',
            category: 'Shirts',
            image:'/image/image.jpg',
            price:'200',
            countInStock:30,
            brand:'Nike',
            rating:4,
            numReviews: 12,
            description:'High Quality Products'
        },
        {        
            name:'Puma Slim Shirts',
            category: 'Shirts',
            image:'/image/image.jpg',
            price:'200',
            countInStock:60,
            brand:'Nike',
            rating:4.5,
            numReviews: 10,
            description:'High Quality Products'
        },
        {            
            name:'Doshe Slim Shirts',
            category: 'Shirts',
            image:'/image/image.jpg',
            price:'200',
            countInStock:90,
            brand:'Nike',
            rating:4.5,
            numReviews: 10,
            description:'High Quality Products'
        },
    ],
};
export default data;