// Компонент Loader відображається під галереєю поки відбувається завантаження зображень.
// Поки йде завантаження зображень, індикатор завантаження не повинен замінювати галерею, а просто рендеритися під нею. Це буде критичним при додаванні зображень до вже завантажених.
import { Bars} from 'react-loader-spinner';
import css from "./Loader.module.css"

export default function Loader(){
    return (<Bars className ={css.loader}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />);
}
