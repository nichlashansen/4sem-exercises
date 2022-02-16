import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Arrow_Icon_List from '../components/Arrow_Icon_List'
import WhoAmI from '../components/WhoAmI'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <WhoAmI text1="29 Årig datamatiker studerende i Odense"
            text2="Glad, Energisk og altid klar på en udfordring"
            text3="Erfaring med C#, dotnet, Asp.net, Python, 
            Java, Php, Html, Css, javascript"/>
    <ProjectsSection />
    <ContactSection />
    </>
  )
}
