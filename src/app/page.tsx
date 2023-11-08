"use client";
import Image from 'next/image'
import {getIcons} from "@/utils/iconpicker";

const monthLength = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
]

export default function Home() {
    // get current date
    const date = new Date()
    const year = date.getFullYear() % 100
    const month = date.getMonth()
    const day = date.getDate()
  return (
      <div className={"w-screen h-screen overflow-hidden flex flex-col justify-center items-center"}>
        <div className={"flex flex-col w-full md:w-1/3 h-screen justify-center items-start gap-1 p-5"}>
            <h1 className={"text-[20rem] font-bold leading-[20rem]"}>{day}</h1>
            <h2 className={"text-4xl font-bold"}>{month + 1}/{year}</h2>
            <div className={"border-t-4 border-black w-full"} />
            <div className={"flex flex-row justify-start items-center w-full gap-1 m-1"}>
                {
                    Array.from(Array(monthLength[month] + 1).keys()).map((v, i) => {
                        return (
                            <svg key={i} width="4" height="31" viewBox="0 0 4 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 0.625V30.625" stroke="black" strokeWidth={i < day ? "4" : "1"}/>
                            </svg>
                        )
                    })
                }
            </div>
            <div className={"border-t border-black w-full"} />
            <div className={"flex flex-wrap justify-start items-start w-full gap-1 m-1"}>
                {
                    getIcons(month, day).map((v, i) => {
                        return (
                            <Image key={i} className={"w-[16%]"} src={v.image} objectFit={"contain"}  alt={v.name}/>
                        )
                    })
                }
            </div>
        </div>
      </div>
  )
}
