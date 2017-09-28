export  default {
  namespace:'indexPage',
  state:{
    tables:[],
    tableActive:1,
    list1:[],//工作区的数据
    list2:[],//条件的数据

    list3:[],//表单的数据

    list4:[], //功能区的数据

  },
  effects:{
  },
  reducers:{

    getStaticTable(state){
      // console.log(state);
      let newState = state;
      let tables = [{
        tableName:'std_user',
        comment:'用户表'
      },
        {
          tableName:'std_area',
          comment:'地区表'
        }];
      newState.tables = tables;


      return newState
    },

    getColumns(state,{table}){
      console.log(table);
      let columns = [];
      let newState = state;
      // console.log(table);
      if(table == 'std_user'){

        columns.push({'columnName':'user_name','comment':'姓名','type':'varchar2'});
        columns.push({'columnName':'password','comment':'密码','type':'varchar2'});
        columns.push({'columnName':'registerTime','comment':'注册时间','type':'datetime'});
        columns.push({'columnName':'sex','comment':'性别','type':'char'});
        columns.push({'columnName':'area','comment':'出生地','type':'char'});
        columns.push({'columnName':'height','comment':'身高','type':'number'})
      }
      state.list1 = columns
      let tableActive = 1;
      return {columns,tableActive,...state};
    },

    tolist2(state,action){
      let newState = state;

      newState.list2.push(action.record)

      newState.tableActive = 3;

      return newState
    },
    tolist3(state,action){
      let newState = state;
      newState.list3.push(action.record)

      newState.tableActive = 4
      return newState
    },


    executeJavaFtl(state){

      let {btnName }= state;
      btnName += new Date().getTime();
      return {btnName,...state};
    }



  },
  subscriptions:{
    setup({dispatch,history}){


      return history.listen(({ pathname, query }) => {
        if(pathname == '/index/'){
          //调用调用获取不同的数据的方法。
         console.log('初始化工作.....')
          dispatch({type:'getStaticTable'});
        }
      });
    }
  }

}
