import { Metadata } from 'next'

import { mergeOpenGraph } from '@root/seo/mergeOpenGraph'
import { ProjectBillingPage } from './client_page'

export default props => {
  return <ProjectBillingPage {...props} />
}

export async function generateMetadata({
  params: { 'team-slug': teamSlug, 'project-slug': projectSlug },
}): Promise<Metadata> {
  return {
    title: 'Billing',
    openGraph: mergeOpenGraph({
      title: 'Billing',
      url: `/cloud/${teamSlug}/${projectSlug}/settings/billing`,
    }),
  }
}
