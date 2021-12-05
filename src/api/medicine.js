import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/medicine/list',
    method: 'get',
    params: query
  })
}
