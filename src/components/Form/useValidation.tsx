import { useEffect, useState } from 'react';

export function useValidation({ value, checked }: any, validations: any) {
    const [isEmpty, setIsEmpty] = useState(true);

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        value.length < validations.minLength ||
        value.length > validations.maxLength
            ? setIsEmpty(true)
            : setIsEmpty(false);
        if (validations.type === 'checkbox') {
            !checked ? setIsEmpty(true) : setIsEmpty(false);
        }
    }, [value, validations]);

    useEffect(() => {
        if (isEmpty) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [isEmpty]);

    return {
        isEmpty,
        isValid,
    };
}
