import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import SpeakerGridItemComponent from '../../../components/speakers/speakergriditem';
import Head from 'next/head';

export default function Speaker2021Component() {
  return (
    <Layout>
      <Head>
        <title>Speakers 2021</title>
      </Head>
      <Header
        title={'Speakers 2021'}
        banner="/static/banners/notable.jpg"
      />
      <section className="content-section">
        <p tabIndex="0">
          Click on the images of our wonderful speakers to find out
          more about them and what they will be talking about.
        </p>
      </section>
      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Tania Allard"
          pic="/static/speakers/2021/Tania_Allard.jpg"
          link="../tania-allard"
          talkbrief="KEYNOTE: Open source for fun and for profit"
        />
      </section>
      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Lex Lofthouse"
          pic="/static/speakers/2021/Lex_Lofthouse.png"
          link="../lex-lofthouse"
          talkbrief="Design for Developers"
        />
        <SpeakerGridItemComponent
          speakername="Connell Sharp"
          pic="/static/speakers/2021/Connell.png"
          link="../connell-sharp"
          talkbrief="Onion Architecture with DDD and CQRS"
        />
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
          pic="/static/speakers/2021/Dylan_Beattie.jpg"
          link="../dylan-beattie"
          talkbrief="There's No Such Thing As Plain Text"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
          pic="/static/speakers/2021/Simon_Painter.png"
          link="../simon-painter"
          talkbrief="SOLID Principles in 5 Nightmares"
        />
        <SpeakerGridItemComponent
          speakername="Steve Collins"
          pic="/static/speakers/2021/Steve_Collins.jpg"
          link="../steve-collins"
          talkbrief="The [Source Code] Generation Game"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Haunts"
          pic="/static/speakers/2021/Stephen_Haunts.jpg"
          link="../stephen-haunts"
          talkbrief="Hacking Humans"
        />
        <SpeakerGridItemComponent
          speakername="Manu Magalhaes"
          pic="/static/speakers/2021/Manu_Magalhaes.png"
          link="../manu-magalhaes"
          talkbrief="Nitty-Gitty: Master Git from the Inside"
        />
        <SpeakerGridItemComponent
          speakername="James Croft"
          pic="/static/speakers/2021/James_Croft.png"
          link="../james-croft"
          talkbrief="Should you write UI tests?"
        />
        <SpeakerGridItemComponent
          speakername="Matt Whetton"
          pic="/static/speakers/2021/Matt_Whetton.png"
          link="../matt-whetton"
          talkbrief="We need to talk about technical debt"
        />
        <SpeakerGridItemComponent
          speakername="Clifford Agius"
          pic="/static/speakers/2021/Clifford_Agius.jpg"
          link="../clifford-agius"
          talkbrief="3D printed Bionic Hand a little IOT and a Xamarin Mobile App"
        />
        <SpeakerGridItemComponent
          speakername="Poornima Nayar"
          pic="/static/speakers/2021/Poornima_Nayar.png"
          link="../poornima-nayar"
          talkbrief="REST, GraphQL and gRPC : A Comparison"
        />
        <SpeakerGridItemComponent
          speakername="Tom Morton"
          pic="/static/speakers/2021/Tom_Morton.png"
          link="../tom-morton"
          talkbrief="Open Banking vs. DeFi; The technological future of finance?"
        />
        <SpeakerGridItemComponent
          speakername="Kojo Hinson"
          pic="/static/speakers/2021/Kojo_Hinson.png"
          link="../kojo-hinson"
          talkbrief="Embracing Skynet - An exploration of GPT-3 and its potential applications"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Jackson"
          pic="/static/speakers/2021/Stephen_Jackson.png"
          link="../stephen-jackson"
          talkbrief="Senior By Default"
        />
        <SpeakerGridItemComponent
          speakername="Rizwana Akmal Khan"
          pic="/static/speakers/2021/Rizwana_Akmal_Khan.png"
          link="../riz-akmal-khan"
          talkbrief="Good Writers Become Better Developers"
        />
        <SpeakerGridItemComponent
          speakername="Leke Sholuade"
          pic="/static/speakers/2021/Leke_Sholuade.jpg"
          link="../leke-sholuade"
          talkbrief="Why do we need a Black Valley"
        />
        <SpeakerGridItemComponent
          speakername="Jennifer Mackown"
          pic="/static/speakers/2021/Jen_Mackown.png"
          link="../jennifer-mackown"
          talkbrief="How to ruin kid's games with machine learning"
        />
      </section>
    </Layout>
  );
}
