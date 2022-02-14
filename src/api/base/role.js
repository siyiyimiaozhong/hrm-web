import {createAPI} from '@/utils/request'

export const list = data => createAPI('/sys/role/page', 'get', data)
export const simple = data => createAPI('/sys/role/simple', 'get', data)
export const add = data => createAPI('/sys/role', 'post', data)
export const update = data => createAPI(`/sys/role/${data.id}`, 'put', data)
export const remove = data => createAPI(`/sys/role/${data}`, 'delete', data)
export const detail = data => createAPI(`/sys/role/${data.id}`, 'get', data)
export const assignPerm = data => createAPI(`/sys/role/assignPerm`, 'put', data)
export const findAll = data => createAPI(`/sys/role/list`, 'get', data)
