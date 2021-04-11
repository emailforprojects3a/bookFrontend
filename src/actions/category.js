const saveCategory = () =>{

    return {type : "ADD_CATEGORY",payload : {message : "Successfully added category"}}

}

export const addCategory= (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/categories', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveCategory())
                }
            })
}}

const findCategories = (payload) =>{
    return {type : "FIND_CATEGORIES",payload}
}

export const fetchCategories = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/categories/list', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findCategories(data));
            })
        
    }

}



const removeCategory = (payload) =>{

    return {type : "DELETE_CATEGORY",payload}

}

export const deleteCategory = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8090/api/v1/categories/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted category'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeCategory({category : data,message}))
            })
            
}}




const updateCategory = (payload) =>{
console.log('inside update category')
    return {type : "UPDATE_CATEGORY",payload : {message : "Successfully updated book"}}

}

export const EditCategory = (category) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(category)
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/categories'  , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateCategory())
                }
            })
}}