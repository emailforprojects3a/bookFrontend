const saveBook = () =>{

    return {type : "ADD_BOOK",payload : {message : "Successfully added book"}}

}

export const addBook = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/books', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBook())
                }
            })
}}

const findBooks = (payload) =>{
    return {type : "FIND_BOOKS",payload}
}

export const fetchBooks = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/books/list', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBooks(data));
            })
        
    }

}

const findBook =(payload) =>{

    return {type : "FIND_BOOK",payload}
}

export const fetchBook = (id) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/books/' + id, requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBook(data));
            })
        
    }

}

const removeBook = (payload) =>{

    return {type : "DELETE_BOOK",payload}

}

export const deleteBook = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8090/api/v1/books/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted book'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeBook({book : data,message}))
            })
            
}}




const updateBook = (payload) =>{
console.log('inside update book')
    return {type : "UPDATE_BOOK",payload : {message : "Successfully updated book"}}

}

export const EditBook = (book) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(book)
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/books'  , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateBook())
                }
            })
}}