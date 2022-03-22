import React from "react";

const Menu=({items})=>{
    return(
        <div>
            {items.map(menuItem=>{
                const {id,title,img,desc,price}=menuItem
                return(
                    <article>

                    </article>
                )
            })}
        </div>
    )
}

export default Menu;