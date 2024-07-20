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


// 나중에 형식 바꿔서 진행할 수도. 
// 애초에 데이터베이스에 Date형식이 아니라 string 형식으로 저장해놔서 converting 하기 좀 그런듯.
export function getStringFromDate(startDate: string, endDate: string | null): string{
    if(endDate !== null){
        return `${startDate} ~ ${endDate}`;
    }
    return startDate;
}

