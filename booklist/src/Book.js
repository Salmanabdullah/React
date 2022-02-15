export const Book =(props)=>{
        const {img,title,author} = props;
        //attribute, eventHandler
        //onClick, onMouseOver
        const clickHandler = (e) =>{
            console.log(e);
            alert('hello world');
        }
        const comlpexEmaple = (author) =>{
            console.log(author);
        }
        return (
            <article className='book'
                onMouseOver={() => console.log(title)}
            >
                <img src={img} alt="" />
                <h1 onClick={()=>console.log(title)}>{title}</h1>
                <h3>{author}</h3>
                <button type='button' onClick={clickHandler}>reference example</button>
                <button type='button' onClick={comlpexEmaple}>more complex example</button>
            </article>
        );
    }