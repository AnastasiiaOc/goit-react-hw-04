import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({onClick}){
    return (<button className={css.loadMore} type = "button" onClick ={onClick} > Load more</button>)
}



