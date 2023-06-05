import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // <div className={`${style.card}  ${count === 1 ? style.additional : ''}`}>
    const finalClassName = xType === "default" ? s.default
        : xType === 'red' ? s.red
            : xType === "disabled" ? s.disabled
                : s.secondary
    // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={ `${finalClassName} ${s.button}`}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
