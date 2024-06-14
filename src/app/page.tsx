import About from '@/components/About'
import ColorBlur from '@/components/ColorBlur'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/SectionDivider'
import Artifacts from '@/components/Artifacts'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Gallery from '@/components/Gallery'
import { gallery, sitemetadata, skills } from '@/lib/data'
import { Graph } from 'schema-dts'

export default function Home() {
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `https://${sitemetadata.domain || `example.com`}/#site`,
        name: sitemetadata.title || '',
        url: `https://${sitemetadata.domain || `example.com`}/`,
        author: {
          '@id': `https://${sitemetadata.domain || `example.com`}/#intro`,
        },
      },
      {
        '@type': 'Person',
        '@id': `https://${sitemetadata.domain || `example.com`}/#intro`,
        givenName: sitemetadata.firstName,
        familyName: sitemetadata.lastName,
        knowsAbout: skills,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ColorBlur />
      <ColorBlur className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      {gallery.length > 0 && (
        <>
          <Gallery />
          <SectionDivider />
        </>
      )}
      <Artifacts />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </>
  )
}
