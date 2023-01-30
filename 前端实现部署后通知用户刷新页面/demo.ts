import Updater from './index'
//实例化该类
const up = new Updater({
    timer:2000
})
//未更新通知
up.on('no-update',()=>{
   console.log('未更新')
})
//更新通知
up.on('update',()=>{
    console.log('更新了')
})