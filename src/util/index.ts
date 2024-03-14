function leftPad(value: number) {
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

export function toStringByFormatting(source: Date, delimiter = "-") {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth());
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

export enum PageStatus {
    Loading = "Loading",
    Failed = "Failed",
    Success = "Success",
}



