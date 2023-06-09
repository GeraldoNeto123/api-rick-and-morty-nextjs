import React from 'react';
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import Link from 'next/link'
import { Main, Container, BackgroundLinks } from '@/styles/pages/home';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Home</title>
        <meta name="description" content="Consumo da Api Ricky and Morty desenvolvido em Next.js e TypeScript." />
      </Head>

      <Main className="bg-primary">
        <Container>
          <Image
            className="logo"
            src={logo}
            alt="Logo Rick and Morty"
            width={400}
            height={400}
          />

          <div className="characters">
            <Link href="/characters">
              <BackgroundLinks page='characters' />
              <label className="label-links">
                Personagens
              </label>
            </Link>
          </div>

          <div className="episodes">
            <Link href="/episodes">
              <BackgroundLinks page='episodes' />
              <label className="label-links">
                Episódios
              </label>
            </Link>
          </div>

          <div className="locations">
            <Link href="/locations">
              <BackgroundLinks page='locations' />
              <label className="label-links">
                Localizações
              </label>
            </Link>
          </div>
        </Container>
      </Main>
    </>
  )
}
