import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'J',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Yeezy',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality shirt'
        },
        {
            name: 'Cool Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Shady',
            rating: 4.2,
            numReviews: 20,
            description: 'High quality shirt'
        },
        {
            name: 'Goofy Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 150,
            countInStock: 0,
            brand: 'Fancy',
            rating: 4.8,
            numReviews: 37,
            description: 'High quality shirt'
        },
        {
            name: 'Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 135,
            countInStock: 17,
            brand: 'Yeezy',
            rating: 4.3,
            numReviews: 15,
            description: 'High quality pant'
        },
        {
            name: 'Cool Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 80,
            countInStock: 12,
            brand: 'Shady',
            rating: 4.5,
            numReviews: 42,
            description: 'High quality pant'
        },
        {
            name: 'Goofy Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 150,
            countInStock: 23,
            brand: 'Goofy',
            rating: 4.5,
            numReviews: 13,
            description: 'High quality pant'
        }
    ]
}

export default data;