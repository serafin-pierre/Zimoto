import request from 'superagent'

export async function fetchCountryList() {
  const result = await request.get('https://countriesnow.space/api/v0.1/countries')
  return result.body.data
}