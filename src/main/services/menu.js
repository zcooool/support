import { Menu } from 'electron';
import log from 'electron-log';

function getTemplate() {
  return [
    
    {
      label: '应用',
      submenu: [
        { role: 'hide' ,label:"隐藏"},
        { role: 'hideothers' ,label:'隐藏其他'},
        { role: 'unhide',label:'显示' },
        { type: 'separator' },
        { role: 'quit',label:'退出'},
      ],
    },
    {
      label:'系统',
      submenu:[
        {label:'项目设置',click:(menuItem,browserWindow,event)=>{
            
            

        }},
        {label:'数据库设置'}
      ]
    },
    {
      label: '视图',
      submenu: [
        { role: 'reload',label:'加载' },
        { role: 'toggledevtools',label:'开发工具' },
        { type: 'separator' }
      ],
    }
    

  ];
}

export function init() {
  log.info('(menu) init');
  const menu = Menu.buildFromTemplate(getTemplate());
  Menu.setApplicationMenu(menu);
}
