import config from '@/config'
const API_BASE_URL = config.API_BASE_URL
export const searchAccounts = async ({ date, status }) => {
  const url = `${API_BASE_URL}/accounts?d=${date}&s=${status}`
  if (date === '') return null

  try {
    const response = await fetch(url)
    const accounts = await response.json()
    if (accounts.success === false) return accounts
    return accounts?.map((account) => ({
      id: account.id,
      title: account.customerName,
      body: account.status,
    }))
  } catch (e) {
    throw new Error(
      `[ Error searching accounts ], please try again later review the url ${url} and try again.`
    )
  }
}
