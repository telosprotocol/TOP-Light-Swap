const apiHost = process.env.REACT_APP_APIHOST || ''

export async function get(url: string, config: any = {}) {
  const response = await fetch(apiHost + url, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...config
  })
  const res = await response.json()
  if (res.message === 'OK') {
    return res.data
  }
  throw new Error(res.message)
}

export async function post(url: string, data: any = {}, config: any = {}) {
  const response = await fetch(apiHost + url, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...config,
    method: 'POST',
    body: JSON.stringify(data)
  })
  const res = await response.json()
  if (res.message === 'OK') {
    return res.data
  }
  throw new Error(res.message)
}
