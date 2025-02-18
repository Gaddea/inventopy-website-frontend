import { Metadata } from 'next'

import { mergeOpenGraph } from '@root/seo/mergeOpenGraph'
import { ProjectLayout } from './client_layout'

export default props => {
  return <ProjectLayout {...props} />
}

export async function generateMetadata({
  params: { 'team-slug': teamSlug, 'project-slug': projectSlug },
}): Promise<Metadata> {
  return {
    title: {
      template: `${teamSlug} / ${projectSlug} | %s`,
      default: 'Project',
    },
    openGraph: mergeOpenGraph({
      title: `${teamSlug} / ${projectSlug} | %s`,
      url: `/cloud/${teamSlug}/${projectSlug}`,
    }),
  }
}
