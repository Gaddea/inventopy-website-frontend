'use client'

import React, { Fragment } from 'react'

import { Breadcrumbs } from '@components/Breadcrumbs'
import { Gutter } from '@components/Gutter'
import { Heading } from '@components/Heading'
import { LoadingShimmer } from '@components/LoadingShimmer'
import { useGitAuthRedirect } from '../authorize/useGitAuthRedirect'
import { ImportProject } from './ImportProject'

const title = `Import a codebase`

export const ProjectFromImportPage: React.FC = () => {
  const { tokenLoading, tokenIsValid } = useGitAuthRedirect()

  return (
    <Fragment>
      <Gutter>
        <div>
          <Breadcrumbs
            items={[
              {
                label: 'New',
                url: '/new',
              },
              {
                label: 'Import',
              },
            ]}
          />
          <Heading marginTop={false} element="h1">
            {title}
          </Heading>
        </div>
        {tokenLoading && <LoadingShimmer number={3} />}
      </Gutter>
      {!tokenLoading && tokenIsValid && <ImportProject />}
    </Fragment>
  )
}
