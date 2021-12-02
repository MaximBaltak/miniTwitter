const inputComment=(text,postId)=>{
    return{
        type:'INPUT_COMMENT',
        text,
        postId
    }
}
export default inputComment