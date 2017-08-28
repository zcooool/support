
import * as jqGridTableSerice from '../services/jqGridTableService';

export default {
    namespace: 'jqGridTable',
    state: {
        fromSelf:[],
        fromTable:[],
        buttons:[
            {id:1,eid:'search',display:'查询',call:'seach',color:'b'},
            {id:2,eid:'clear',display:'清空',call:'clear',color:'b'},
        ],
        
    },
    reducers:{
        execute(state){
            
            console.log(`开始执行`);

        },
        /**
         * 改变模块
         * @param {*} state 
         * @param {*} action 
         */
        changeModule(state,action){

        },



        delete(state,action){
            const tableid = action.tableid;
            switch(tableid){
                case 1:
                    let fromTable = state.fromTable;
                    fromTable.splice(action.index, 1);
                    return {...state,fromTable:fromTable};
                break;
                case 2:
                    let fromSelf = state.fromSelf;
                    fromSelf.splice(action.index, 1);

                    return {...state,fromSelf:fromSelf};
                break;
                case 3:
                    let buttons =state.buttons;
                    buttons.splice(action.index,1);
                    return {...state,buttons:buttons}
                break;
            }
        },

        add(state,action){
            
            const id = action.id;
            switch(id){
                case 1:
                    
                break;
                case 2:
                const fromSelf = state.fromSelf;
                 const fromSelf_n =    [...fromSelf,
                    {id:action.time,table:'-',index:'item_',display:'额外字段',align:'left',hide:false,condition:true,inputType:'text'}    
                 ];

                    return {...state,fromSelf:fromSelf}
                break;
                case 3:

                const buttons = [...state.buttons];
                    buttons.push(  {id:action.time,eid:'elem_id',display:'功能按钮',call:'-',color:'g'})
                    
                    
                    
                    return {...state,buttons:buttons};;
                break;
            }
            
        }
    }
    

}