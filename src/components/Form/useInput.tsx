import { SetStateAction, useEffect, useState } from 'react';
import { useValidation } from './useValidation';

const useInput = (
    initialValue: string,
    validations: {
        isEmpty: boolean;
        minLength: number;
        maxLength?: number;
        type: string;
    }
) => {
    const [value, setValue] = useState(initialValue);
    const [checked, setChecked] = useState(false);
    const valid = useValidation({ value, checked }, validations);
    const [isDirty, setIsDirty] = useState(false);
    const onChange = (e: { target: { value: SetStateAction<string> } }) => {
        setValue(e.target.value);
    };
    const onChecked = (e: { target: any }) => {
        setChecked(e.target.checked);
    };
    const onBlur = () => {
        setIsDirty(true);
    };
    return {
        checked,
        value,
        setValue,
        setChecked,
        isDirty,
        onChange,
        onChecked,
        onBlur,
        ...valid,
    };
};
export default useInput;
