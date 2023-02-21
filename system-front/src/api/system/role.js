import request from '@/utils/request'

const api_name = '/admin/system/sysRole/'

export default {
  getPageList(page,limit,searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params:searchObj
    })
  },
  removeId(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete',
    })
  },

  saveRole(role) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data:role
    })
  },

  getRoleId(id) {
    return request({
      url: `${api_name}/findRoleById/${id}`,
      method: 'post',
    })
  },

  update(role) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data:role
    })
  },
  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data:idList
    })
  },




}
