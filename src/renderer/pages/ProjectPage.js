import {Card} from 'antd'
import React from 'react';
import { Layout} from 'antd';
import { connect } from 'dva';
import {Link} from 'react-router'
const { Content } = Layout;
function ProjectPage({projects}){
    return (
        <Content style={{padding:'5px'}} >
            <Link to='index/'>
            <Card style={{marginBottom:'5px'}} >
                <p>产品1</p>
            </Card>
            <Card style={{marginBottom:'5px'}} >
                <p>产品2</p>
            </Card>
            </Link>
        </Content>
    );
}

/**
 * 定义store映射到组件中的
 * @param {*} state
 */
function mapStateToProps(state) {
  return {projects:state.projects}
}


//定义map的对象
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage);
