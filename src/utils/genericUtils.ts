export function navigation(history: any, location: any, path: string, replace?: boolean, deleteParam?: string): void {
    let url = path + location.search;
    if (location.search !== '' && deleteParam) {
        const urlParams = new URLSearchParams(location.search);
        urlParams.delete(deleteParam);
        url = path + '?' + urlParams.toString();
    }
    if (replace) {
        history.replace(url);
    } else {
        history.push(url);
    }
}

export function percentage(value: number | string): string {
    if (value) {
        if (typeof value === 'string') {
            return (parseFloat(value) * 100).toFixed(2).toString() + '%';
        } else {
            return (value * 100).toFixed(2).toString() + '%';
        }
    }
    return '0%';
}

export function currency(value: number | string, type?: string): string {
    const currencyType = type ? type : 'RM';
    if (value) {
        if (typeof value === 'string') {
            return (
                currencyType +
                parseFloat(value)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            );
        } else {
            return (
                currencyType +
                value
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            );
        }
    }

    return currencyType + '0';
}

export function moneyFormatter(value: number | string): string {
    let currencyType = '';
    if (value) {
        if (typeof value === 'string') {
            return (currencyType = parseFloat(value)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        } else {
            return (currencyType = value
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        }
    }

    return currencyType + '0';
}

export function dateWithoutDayTime(date?: any): Date {
    let returnDate: Date;
    if (date) {
        const currentDate = new Date(date);
        currentDate.setHours(0, 0, 0, 0);
        const userTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
        returnDate = new Date(currentDate.getTime() - userTimezoneOffset);
    } else {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const userTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
        returnDate = new Date(currentDate.getTime() - userTimezoneOffset);
    }

    return returnDate;
}

export function dropdownValue(options: any, value: any) {
    if (value && typeof value !== 'string' && typeof value !== 'number') {
        return options.map((option) => JSON.stringify(option.value) === JSON.stringify(value) && option);
    }
    return options.map((option) => option.value === value && option);
}

export function changeEvent(event, formData, dropdownName?: string): any {
    if (dropdownName) {
        formData[dropdownName] = event.value;
    } else {
        if (event.target.type === 'checkbox') {
            formData[event.target.name] = event.target.checked;
        } else {
            formData[event.target.name] = event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value;
        }
    }
    return { ...formData };
}
