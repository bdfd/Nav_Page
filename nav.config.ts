/*
 * @Author: BDFD
 * @Date: 2022-02-18 15:23:46
 * @LastEditTime: 2022-02-18 15:26:43
 * @LastEditors: BDFD
 * @Description: 
 * @FilePath: \Nav_Page\nav.config.ts
 */
import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/bdfd/Nav_Page',

  // Deployment branch name
  // 部署分支
  branch: 'main',

  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,
}

export default c
