import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'
import {ArrType} from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void
    arr: ArrType
    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       arr,
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
        // let currentObj = arr.find(el => el.value === e.currentTarget.value)
        // onChangeOption?.(currentObj?.id)

        console.log(e.currentTarget.value)
        let currentObj = arr.find(el => el.value === e.currentTarget.value)
        onChangeOption?.(currentObj?.id)
console.log(value)
        console.log(currentObj)

    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')
console.log(id)
    const mappedOptions: any[] = options

        ? options.map((o) => (

            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.value}
                    className={finalRadioClassName}
                    type={'radio'}
                    // name, checked, value делают студенты
                    name={name}
                    value={o.value}
                    checked={o.id == value}


                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.value}
                    {...spanProps}
                    className={spanClassName}
                >
                      {o.value}
                  </span>
            </label>
        ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
