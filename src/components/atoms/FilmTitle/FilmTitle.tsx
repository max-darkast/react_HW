import * as React from "react"

interface ITitle {
   title: string;
 }

export const  FilmTitle =({ title }: ITitle)=>{
   return(
<h3 className="filmTitle">{title}</h3>
  )
}





