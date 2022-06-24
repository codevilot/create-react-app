export type rawAcc = {
    [key: string]: Array<rawCur>
}
export type rawCur = {
    id: string
    title: string
    desc: string
    score: string
    participants: string
    img: string
    price: string
    state: string
    category: string
    link: string
}
export type cardProps = {
    category: string
    items: Array<rawCur>
}