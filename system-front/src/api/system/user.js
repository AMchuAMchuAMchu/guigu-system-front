import request from "@/utils/request";


const api_name = '/admin/system/sysUser'

export default {
  //获取用户列表
  getPageList(page,limit,searchObj){
    return request({
      url:`${api_name}/${page}/${limit}`,
      method:'get',
      params:searchObj
    })
  },
//  添加
  save(user){
    return request({
      url:`${api_name}/save`,
      method:'post',
      data:user
    })
  },
//  根据id查询
  getUserId(id){
    return request({
      url:`${api_name}/getUser/${id}`,
      method:'get',
    })
  },
//  修改
  update(user){
    return request({
      url:`${api_name}/update`,
      method:'post',
      data:user
    })
  },
//  删除
  removeById(id){
    return request({
      url:`${api_name}/remove/${id}`,
      method:'delete',
    })
  },
//  修改用户状态
  updateStatus(id,status){
    return request({
      url:`${api_name}/updateStatus/${id}/${status}`,
      method:'get'
    })
  }

}


