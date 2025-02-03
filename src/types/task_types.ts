export type TaskProps = {
    title : string ,
    description : string,
    day : string,
    date : string,
    updateTime : string,
    updateDate : string,
    noCharacters : number
}

export type SearchBarProps = {
    sendMessage: (message: string) => void;
}


