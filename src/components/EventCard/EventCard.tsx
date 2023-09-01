import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { BsCalendar4Week } from "react-icons/bs";

type Props = {
    title?: string;
    date?: string
    imgSrc?: string
}

export default function EventCard({title = "", date = "2022-02-02", imgSrc = "https://www.publimetro.pe/resizer/xpubfLEAT1lrkFv3YTIfhrSTSp0=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/3EKLGEYFRFE4XGNADXDYPORPUQ.JPG"}: Props) {
    return (
        <Card className="relative">
            <img
                className="h-full w-full object-cover"
                src={imgSrc}
            />
            <div className="absolute bg-white bottom-0 w-full left-0 rounded-t-xl flex items-center justify-between px-4 py-2">
                <div>
                    <h3 className="text-sm">{title}</h3>
                    <div className="text-xs flex items-center gap-2">
                        <BsCalendar4Week />
                        <p className="font-normal">{date}</p>
                    </div>
                </div>
                <Button className="border border-myblack">Buy</Button>
            </div>
        </Card>
    );
}
