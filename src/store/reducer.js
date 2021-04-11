const initialState = {
    books : [
       
    ],

    categories : [
        
    ],
    message : ''
}

const reducer = (state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {
        
    case "FIND_BOOKS" :
        return {books : payload,message:''}

    case "FIND_CATEGORIES" :
        return {categories : payload,message:''}

    case "FIND_BOOK" :
            return {books : payload,updateBook : payload.book}

    case "ADD_BOOK":
        return {books: state.books,message:payload.message}
    
    case "ADD_CATEGORY":
        return {categories: state.categories,message:payload.message}
    

    case "DELETE_BOOK":
        var filteredList = state.books.filter((book)=> book.bookId !== payload.book.bookId)
        return {books: filteredList,message:''}

    case "DELETE_CATEGORY":
        var filteredList = state.categories.filter((category)=> category.categoryName !== payload.category.categoryName)
        return {categories: filteredList,message:''}

    case "UPDATE_BOOK":
        console.log(payload.message)
            return {books: state.books,message:payload.message}
    
    case "UPDATE_CATEGORY":
        console.log(payload.message)
        return {categories: state.catgories,message:payload.message}
    
    default:
        return state
    }
}

export default reducer