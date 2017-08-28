
import React from 'react';
import { connect } from 'dva';
import {Table,Button,Card,Popconfirm} from 'antd';


/**
 * 组件用于jqgrid 简单jqgrid页面的生成器
 * @returns {XML}
 * @constructor
 */
function SimpleJQGrid({dispatch,fromSelf,fromTable,buttons}){


  function executeHandler(){
    dispatch({type:'jqGridTable/execute'});
  }


  /**
   * 删除操作
   * @param id
   */
  function deleteHandler(index,tableid) {
    dispatch({type:'jqGridTable/delete',index,tableid});
  }

function addHanler(id){
  console.log(`${id}`)
  dispatch({type:'jqGridTable/add',id:id,time:new Date().getTime()});
}

const columns2 = [
  {title:'编号',dataIndex:'eid',key:'eid'},
  {title:'按钮名称',dataIndex:'display',key:'display',
    render(text, record, index){
      switch(record.color){
        case 'b':return <span style={{color:'blue'}}>{text}</span>
        case 'g':return <span style={{color:'green'}}>{text}</span>
        case 'r':return <span style={{color:'red'}}>{text}</span>
      }
  },

  },
  {title:'调用方法',dataIndex:'call',key:'call'},
  {title:'操作',key:'options',dataIndex:'id',
    render(text,record,index){
          return (<span>
            <Button size='small' onClick={deleteHandler.bind(this,index,3)}>删除</Button>
            <Button size='small'>编辑</Button>
          </span>);
          
    }
  }
]
const dataSource = [];



const columns1 = [

  {title:'表',dataIndex:'table',key:'table'},
  {title:'对应属性',dataIndex:'index',key:'index'},
  {title:'展示名称',dataIndex:'display',key:'display'},
  {title:'位置',dataIndex:'align',key:'align'},
  {title:'隐藏?',dataIndex:'hide',key:'hide'},
  {title:'查询条件?',dataIndex:'',key:''},
  {title:'输入格式',dataIndex:'inputType',key:'inputType'},
  {title:'操作',key:'options',
    render(text,record,index){
        <span>
            <a href="">Delete</a>
        </span>
    }

}
];


  return (
    <div style={{padding:'5px'}}>
      <Card>
        <input type='text' disabled  value='耗材公版'/>
        <Button size='small'>切换项目</Button>
        <Button size='small'>执行(java)</Button>
      </Card>
      <Card>
        <Button size='small'>表字段</Button>
        <Button size='small'>删除字段</Button>
        <Table  size='small' rowKey={record => record.id} dataSource={fromTable} columns={columns1} title={() => '数据库字段'}/>
      </Card>
      <Card>
         <Button size='small'>添加字段</Button>
         <Button size='small'>删除字段</Button>
        <Table  size='small' rowKey={record => record.id} dataSource={fromSelf} columns={columns1} title={() => '自定义字段'}/>
      </Card>
      <Card>
      <Button size='small' onClick={addHanler.bind(this,3)} >添加功能</Button>

      <Table  showHeader={true} pagination={false} rowKey={record => record.id} size='small' dataSource={buttons} columns={columns2} title={() => '自定义按钮'} ></Table>
      </Card>
    </div>


  );



}
function mapStateToProps(state) {
  const { 
        fromSelf,
        fromTable,
        buttons 
        } = state.jqGridTable;
  return {
    fromSelf,
    fromTable,
    buttons 
  };
}
export default connect(mapStateToProps)(SimpleJQGrid);
