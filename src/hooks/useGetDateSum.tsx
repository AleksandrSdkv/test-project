export const useGetDateSum = () => {
    function sumOfDigits(date: Date): number {
        let num: number = date
            .toLocaleDateString()
            .split('.')
            .join('')
            .split('')
            .reduce((sum: number, value: string): number => {
                return sum + parseFloat(value);
            }, 0);
        return num;
    }

    return sumOfDigits(new Date());
};
