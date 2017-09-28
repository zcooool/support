import React from 'react';
import { connect } from 'dva';
import { Tree , Tabs ,Card} from 'antd';
import { Layout,Breadcrumb ,Menu} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import {Button} from 'antd';
const TreeNode = Tree.TreeNode;
import { Row, Col ,Table} from 'antd';

const {Column}  = Table;

const TabPane = Tabs.TabPane;

function callback(key){

}

function IndexPage({tables,selectTable,executeJavaFtl,callback,list1,list2,list3,tableActive,tolist2,tolist3,...props} ) {


  return (
  <Row>
    <Col span="4" >
      <div style={{padding:'10px',borderRight:'1px black sold',overflowY:'auto'}}>数据库表列表
      <ul>
      {

          tables.map(function(table) {
            return (
              <li key={table.tableName} style={{margin:'10px'}} onClick={selectTable.bind(null,table.tableName)}>
                <span>{table.tableName}</span>
                <span style={{float:'right'}}>{table.comment}</span>
              </li>

            )
          })
      }
      </ul>
      </div>
    </Col>
    <Col span="20">
      <div style={{padding:'10px',borderRight:'1px black sold',overflowY:'auto'}}>
      <Button onClick={executeJavaFtl.bind(this)} size="small" >java-template</Button>

      <Button onClick={executeJavaFtl.bind(this)} size="small" >c#-template执行</Button>
      <Tabs defaultActiveKey='1' onChange={callback}>
        <TabPane tab="工作区" key="1">
          <Workspace data={list1} addCondition={tolist2} addTable={tolist3} />
        </TabPane>
        <TabPane tab="菜单区" key="2">菜单区</TabPane>
        <TabPane tab="查询条件" key="3"><LIST2 data={list2} /></TabPane>
        <TabPane tab="表格展示" key="4">
          <LIST3 data={list3} />
        </TabPane>
      </Tabs>
      </div>
    </Col>
  </Row>
  )


}

/**
 * 获取工作区
 * @param props
 * @returns {XML}
 * @constructor
 */

function Workspace(props){
  return (<Table dataSource={props.data} rowKey="columnName" >
    <Column title="字段名称" key="comment" dataIndex="comment"  />
    <Column title="字段类型" key="type" dataIndex="type" />
    <Column title="字段映射" key="columnName" dataIndex="columnName" />
    <Column title="操作" data="option"  render={(text, record,index) => (
      <span>
          <Button size="small" onClick={()=>{props.addCondition(record)}}>加入条件</Button>
          <Button size="small" onClick={()=>{props.addTable(record)}}>加入表格</Button>
        </span>
    )} />
  </Table>);
}

function LIST2({data}){
  return (<Table dataSource={data} rowKey="columnName" >
    <Column title="字段名称" key="comment" dataIndex="comment"  />
    <Column title="字段类型" key="type" dataIndex="type" />
    <Column title="字段映射" key="columnName" dataIndex="columnName" />
    <Column title="字段UI样式"  render={(text,record,index)=>{
     return  <span>查找带回</span>
    }
    } />
    <Column title="相关配置" render={(text,record,index)=>{
      return <a>详情</a>

    }
    } />

    <Column title="操作"  render={(text, record,index) => (
      <span>
          <Button size="small">编辑</Button>
          <Button size="small">删除</Button>
        </span>
    )} />
  </Table>);
}


function LIST3({data}){
  return (<Table dataSource={data} rowKey="columnName" >
    <Column title="字段名称" key="comment" dataIndex="comment"  />
    <Column title="字段类型" key="type" dataIndex="type" />
    <Column title="字段映射" key="columnName" dataIndex="columnName" />
    <Column title="位置"   render={(text,record,index)=>(
        <span>左边</span>
    )} />
    <Column title="宽度"   render={(text, record,index)=>(
        <span>50px</span>
    )} />
    <Column title="格式化类型" render={(text, record,index)=>(
        <span>文本</span>
    )
    } />
    <Column title="操作"   render={(text, record,index) => (
        <span>
          <Button size="small">编辑</Button>
        </span>
    )} />
  </Table>);
}


/**
 * tableli
 * 展示表单列
 */
function tableCard({tableName,comment}) {
  return (
    <Card>
      <p>{tableName}</p>
      <p>comment</p>
    </Card>
  );
}

function mapProp({indexPage}){
  // console.log(indexPage);
  const {tables,list1,list2,list3,tableActive} = indexPage;
  return {
    tables,
    list1,
    list2,
    list3,
    tableActive
  };
}

function mapDispatch(dispatch,ownProps){
  // console.log(ownProps)
    return {
      selectTable(key){
        dispatch({type:'indexPage/getColumns',table:key});
      },
      tolist2(key){
        console.log(key)
        dispatch({type:'indexPage/tolist2',record:key})
      },
      tolist3(key){
        console.log('激活了tolist3方法')
        dispatch({type:'indexPage/tolist3',record:key})
      },
      executeJavaFtl(){
        // console.log('执行java生成ftl代码')
        dispatch({type:'indexPage/executeJavaFtl'})
      }


    }
}
export default connect(mapProp,mapDispatch)(IndexPage);
