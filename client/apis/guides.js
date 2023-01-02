import request from 'superagent'

const rootUrl = '/api/v1'

export function fetchGuides() {
  return request.get(rootUrl + '/guides').then((res) => {
    return res.body
  })
}

export function addGuide(newGuide) {
  return request
    .post(rootUrl + '/profiles/add')
    .send(newGuide)
    .then((res) => {
      return res.body
    })
}

export function deleteGuide(id) {
  return request
  .del(rootUrl + `/profiles/${id}`)
  .then((res) => res)
  .catch((err) => {
    console.log(err.message)
  })
}

export function updateGuide(id, newDetails) {
  return request.patch(rootUrl + `/profiles/${id}`)
  .send(newDetails)
  .then((res) => {
    return res.body
  })
  .catch((err) => {
    console.log(err.message)
  })
}

export function fetchFilteredGuides(queryData) {
  let queryString = '?'

  for (const key in queryData) {
    if (queryData[key] !== '') {
      queryString = queryString.concat(key, '=', queryData[key], '&')
    }
  }
  queryString = queryString.slice(0, -1)
  const url = rootUrl + '/guides/filter' + queryString
  return request.get(url)
    .then(res => {
      return res.body
    })
}



