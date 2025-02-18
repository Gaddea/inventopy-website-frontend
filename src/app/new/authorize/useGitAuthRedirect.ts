import { redirect } from 'next/navigation'

import { useCheckToken } from '@root/app/new/authorize/useCheckToken'
import useDebounce from '@root/utilities/use-debounce'

export const useGitAuthRedirect = (args?: {
  pageTitle: string
}): {
  tokenLoading: boolean
  tokenIsValid: boolean
} => {
  const { pageTitle } = args || { pageTitle: '' }
  const { tokenIsValid, loading: tokenLoading, error: tokenError } = useCheckToken()

  const loading = useDebounce(tokenLoading, 1000)

  if (!loading && (tokenError || !tokenIsValid)) {
    redirect(
      `/new/authorize?redirect=${encodeURIComponent(
        `${window.location.pathname}${window.location.search}`,
      )}${pageTitle ? `&title=${encodeURIComponent(pageTitle)}` : ''}`,
    )
  }

  return {
    tokenLoading: loading,
    tokenIsValid,
  }
}
