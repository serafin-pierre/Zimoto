import request from 'superagent'

const rootUrl = '/api/v1'

export function fetchAGuide(id) {
  return request.get(rootUrl + '/profiles/' + id).then((response) => {
    return response.body
  })
}
