import cards from "../../public/data/json/card.json"
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'
export default function productHome(props: any) {
    const params = useParams();
    const data = cards.filter((item) =>
        item["id"] == params.productId
    )[0]
    const Rating = styled.div`
    background: -webkit-linear-gradient(180deg, gray ${(p: { rate: string }) => 100 - Number(p.rate) * 20}%, yellow 1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width:fit-content;
    `
    return (
        <div className="bg-slate-700">
            <div className="max-w-screen-xl flex m-auto pt-20 items-center">
                <div className="view_image p-4 bg-white min-w-1/4 rounded-lg h-fit">
                    <img src={data.img} className="h-72 w-full" />
                </div>
                <div className="p-8 text-white">
                    <div className="text-3xl">{data.title}</div>
                    <div className="text-xl">{data.desc}</div>
                    <div className="flex pt-5">
                        <Rating rate={data.score}>
                            ⭐⭐⭐⭐⭐
                        </Rating>
                        <div className="pl-3 text-xl">
                            {data.score}
                        </div>
                        <div className="pl-3 text-xl">
                            {data.participants}참여
                        </div>
                    </div>
                    <div className="text-3xl pt-5">${data.price}</div>
                    <div>
                        <Link to="/bakset">장바구니에 담기</Link>
                        <Link to="/bakset">장바구니로 이동</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}