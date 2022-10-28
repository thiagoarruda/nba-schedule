import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Teams } from '../data/Teams'
import { Schedule } from '../data/Schedule'

const teamLogosPath = '/images/teams/logos'

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const dayOfWeek = currentDate.toLocaleString('pt-BR', { weekday: 'long' });

  const gamesToday = Schedule.getSchedule(currentDate);

  return (
    <div className="container mx-auto mt-6 flex">
      <Head>
        <title>Programação NBA Brasil</title>
        <meta name="description" content="Programação de TV da NBA no Brasil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="w-full">
        <div className="flex justify-center px-4 mb-8">
          <button className="flex-none px-3 text-3xl" onClick={() => setCurrentDate(previousDay(currentDate))}>{"<"}</button>
          <div className="flex flex-col grow items-center">
            <h1 className="text-3xl font-semibold text-center">{dayjs(currentDate).format('DD/MM/YYYY')}</h1>
            <h2 className="text-sm text-center mt-2">{dayOfWeek}</h2>
          </div>
          <button className="flex-none px-3 text-3xl" onClick={() => setCurrentDate(nextDay(currentDate))}>{">"}</button>
        </div>
        <div className="flex flex-wrap">
          {!gamesToday && <p className="w-full text-center">Nenhuma transmissão nesta data</p>}
          {gamesToday &&
            gamesToday.map((game, index: number) => {
              const homeTeam = Teams.getTeam(game.homeTeam);
              const awayTeam = Teams.getTeam(game.awayTeam);
              return (
                <div key={`game-card-${index}`} className="w-full shadow-md rounded-xl bg-gray-100 text-middle mb-5 mx-4 p-4">
                  <div className="grid grid-cols-3 gap-4 text-center items-center">
                    <div className="flex flex-col items-center">
                      <Image className="h-16 w-16" src={`${teamLogosPath}/${homeTeam.logoFile}`} alt={homeTeam.fullName} width={200} height={200}></Image>
                      <span className="font-semibold">{homeTeam.shortName}</span>
                    </div>
                    <span className="text-2xl font-bold">{game.time}</span>
                    <div className="flex flex-col items-center">
                      <Image className="h-16 w-16" src={`${teamLogosPath}/${awayTeam.logoFile}`} alt={awayTeam.fullName} width={200} height={200} ></Image>
                      <span className="font-semibold">{awayTeam.shortName}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="w-full  mt-4 text-xs">{game.channels.join(', ')}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function nextDay(currentDate: Date): Date {
  return dayjs(currentDate).add(1, 'day').toDate();
}

function previousDay(currentDate: Date): Date {
  return dayjs(currentDate).subtract(1, 'day').toDate();
}
