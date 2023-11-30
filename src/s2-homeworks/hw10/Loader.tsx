import s from './Loader.module.css'
import Loading from '../../img/Loading.svg'
export const Loader = () => <div className={s.loader}>
    <img src={Loading} alt="крутилка" className={s.loaderSrc}/>
</div>
