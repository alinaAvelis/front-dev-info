
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-15'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

const token=`${process.env.SANITY_API_READ_TOKEN}`
export const previewToken= assertValue(token,'Missing environment variable:SANITY_API_READ_TOKEN')

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
