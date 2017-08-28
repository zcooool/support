import React from 'react';
import { connect } from 'dva';
import { Tree } from 'antd';
import { Layout,Breadcrumb ,Menu} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import {Button} from 'antd';
const TreeNode = Tree.TreeNode;
import { Row, Col ,Table} from 'antd';
import JqGridTable from '../components/simpleJQGrid'


function IndexPage(props) {
   const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }




  return  (
      <Row>
        <Col span={4}>

        <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
      >
        <TreeNode title="test" key="0-0">
          <TreeNode title="table1" key="0-0-0">
            
          </TreeNode>
          <TreeNode title="table2" key="0-0-1">

          </TreeNode>
          <TreeNode title="table3" key="0-0-2">


          </TreeNode>
        </TreeNode>
      </Tree>
    
      </Col>
        <Col span={20}>
        <JqGridTable />
        </Col>
      </Row>
         
  
     

  );



}
export default connect()(IndexPage);
