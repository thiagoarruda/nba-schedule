import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import { Teams } from '../data/Teams'
import { GameStatus, Schedule } from '../data/Schedule'
import BounceLoader from 'react-spinners/BounceLoader'
import { Scoreboard } from '../data/Scoreboard'
import { start } from 'repl'

const teamLogosPath = '/images/teams/logos'

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [isLoading, setLoading] = useState(false)
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const fetchData = async () => {
      setLoading(true)
      await Schedule.downloadSchedule();
      setLoading(false)
    }

    fetchData();
  }, [])

  if (isLoading) return (
    <div className="flex h-screen">
      <div className="m-auto">
        <BounceLoader color="#475569" />
      </div>
    </div>
  )

  const dayOfWeek = currentDate.toLocaleString('pt-BR', { weekday: 'long' });
  const gamesToday = Schedule.getDaySchedule(currentDate);


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
        <div className="flex justify-center px-4 mb-8 text-gray-100">
          <button className="flex-none px-3 text-3xl" onClick={() => setCurrentDate(previousDay(currentDate))}>{"<"}</button>
          <div className="flex flex-col grow items-center">
            <h1 className="text-3xl font-semibold text-center">{dayjs(currentDate).format('DD/MM/YYYY')}</h1>
            <h2 className="text-sm text-center mt-2">{dayOfWeek}</h2>
          </div>
          <button className="flex-none px-3 text-3xl" onClick={() => setCurrentDate(nextDay(currentDate))}>{">"}</button>
        </div>
        <div className="flex flex-wrap">
          {!gamesToday && <p className="w-full text-center text-gray-100">Nenhuma transmissão nesta data</p>}
          {gamesToday &&
            gamesToday.map((game, index: number) => {
              const homeTeam = Teams.getTeam(game.homeTeam.name);
              const awayTeam = Teams.getTeam(game.awayTeam.name);
              return (
                <div key={`game-card-${index}`} className="w-full text-gray-100 rounded-xl bg-slate-800 text-middle mb-3 mx-2 p-4">
                  <div className="grid grid-cols-6 text-center items-center px-2">
                    <div className="flex flex-col items-center">
                      <Image className="h-12 w-12" src={`${teamLogosPath}/${homeTeam.logoFile}`} alt={homeTeam.fullName} width={200} height={200}></Image>
                      <span className="text-sm mt-2 font-semibold">{homeTeam.shortName}</span>
                      <span className="text-xs text-gray-400">{game.homeTeam.wins}-{game.homeTeam.losses}</span>
                    </div>
                    {game.status === GameStatus.FINISHED && (
                      <div className="col-span-4 grid grid-cols-3 items-center px-3">
                        <span className="text-2xl font-bold tracking-tighter">{game.homeTeam.score}</span>
                        <span className="text-xs font-bold">FINAL</span>
                        <span className="text-2xl font-bold tracking-tighter">{game.awayTeam.score}</span>
                      </div>
                    )}
                    {game.status === GameStatus.IN_PROGRESS && (
                      <div className="col-span-4 grid grid-cols-3 items-center px-3">
                        <span className="text-2xl font-bold tracking-tighter">{game.homeTeam.score}</span>
                        <div>
                          <p className="text-[0.5rem] font-bold text-red-500">AO VIVO</p>
                          <p className="text-sm font-bold tracking-tighter">{game.statusText}</p>
                        </div>
                        <span className="text-2xl font-bold tracking-tighter">{game.awayTeam.score}</span>
                      </div>
                    )}
                    {game.status === GameStatus.SCHEDULED && !isInPreGame(game.dateTimeUTC) && <span className="col-span-4 text-2xl font-bold tracking-tighter">{Schedule.getLocalGameTime(game.dateTimeUTC)}</span>}
                    {game.status === GameStatus.SCHEDULED && isInPreGame(game.dateTimeUTC) && (
                      <div className="col-span-4 items-center px-3">
                        <p className="text-[0.5rem] font-bold text-red-500">AO VIVO</p>
                        <p className="text-sm font-bold tracking-tighter">Pré-jogo</p>
                      </div>
                    )}
                    <div className="flex flex-col items-center">
                      <Image className="h-12 w-12" src={`${teamLogosPath}/${awayTeam.logoFile}`} alt={awayTeam.fullName} width={200} height={200} ></Image>
                      <span className="text-sm mt-2 font-semibold">{awayTeam.shortName}</span>
                      <span className="text-xs text-gray-400">{game.awayTeam.wins}-{game.awayTeam.losses}</span>
                    </div>
                  </div>
                  <div className="w-full text-center mt-2">
                    <span className="text-xs">{game.channels.join(', ')}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

function nextDay(currentDate: Date): Date {
  return dayjs(currentDate).add(1, 'day').toDate();
}

function previousDay(currentDate: Date): Date {
  return dayjs(currentDate).subtract(1, 'day').toDate();
}

function isInPreGame(startDateString: string) {
  const now = new Date();
  const startDate = new Date(startDateString);
  return now > startDate
}
