const initState = {
    products: [
        {id: 1, name: 'Men Shirt summer season', image: '1.jpg', price: 20, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 2, name: 'Women Shirt summer season', image: '2.jpg', price: 30, discount: 5, discountPrice: 30 - 5 / 100 * 30, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 3, name: 'Jogging Summer season', image: '3.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 4, name: 'Shoes ', image: '4.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 5, name: 'Jogging Summer season', image: '5.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 6, name: 'Jogging Summer season', image: '6.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 7, name: 'Jogging Summer season', image: '7.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 8, name: 'Jogging Summer season', image: '8.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 9, name: 'Jogging Summer season', image: '9.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'},
        {id: 10, name: 'Jogging Summer season', image: '10.jpg', price: 15, discount: 3, discountPrice: 15 - 2 / 100 * 15, quantity: 1, desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iusto libero in dicta ex assumenda veniam hic qui officia aspernatur ea, aliquam minima eveniet, amet aperiam omnis voluptatibus saepe possimus.'}
    ]
}
const ProductReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default ProductReducer
