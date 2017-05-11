angular.module('ylApp').controller('JqGridGenController', function($rootScope, $scope, $http, $timeout) {




    const {remote} = require('electron');
    const NEDB = remote.require('nedb')
    const db = {};
    const mysql = remote.require('mysql');
    const {dbconfig} = remote.getGlobal('configpath');
    db.dbconfig = new NEDB({filename:dbconfig});
    const client = mysql.createConnection({
        user:'root',
        password:'root',
    })

//使用的是mysql数据库
    client.connect(function(){
        console.log('打印成功');
    })
//使用nedb
    db.dbconfig.loadDatabase();

   db.dbconfig.find({},function(){


   });



    $scope.sites = [
        {site : "Google", url : "http://www.google.com"},
        {site : "Runoob", url : "http://www.runoob.com"},
        {site : "Taobao", url : "http://www.taobao.com"}
    ];



    $scope.DBAddPropBtn = function(){
        //显示第三个tab
        $('#tabs li:eq(2) a').tab('show')
    }


    //添加一行的事件
    $scope.id = 1;

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        $scope.option = {
            url: "${ctx}/",
            height: 150,
            page: 1,
            rowNum: 20,
            rowTotal : null,
            records: 0,
            pager: "",
            pgbuttons: true,
            pginput: true,
            colModel: [],
            rowList: [],
            colNames: [],
            sortorder: "asc",
            sortname: "",
            datatype: "json",
            mtype: "POST",
            altRows: false,
            selarrrow: [],
            savedRow: [],
            shrinkToFit: true,
            xmlReader: {},
            jsonReader: {},
            subGrid: false,
            subGridModel :[],
            reccount: 0,
            lastpage: 0,
            lastsort: 0,
            selrow: null,
            beforeSelectRow: null,
            onSelectRow: null,
            onSortCol: null,
            ondblClickRow: null,
            onRightClickRow: null,
            onPaging: null,
            onSelectAll: null,
            onInitGrid : null,
            loadComplete: null,
            gridComplete: null,
            loadError: null,
            loadBeforeSend: null,
            afterInsertRow: null,
            beforeRequest: null,
            beforeProcessing : null,
            onHeaderClick: null,
            viewrecords: false,
            loadonce: false,
            multiselect: false,
            multikey: false,
            multiboxonly : false,
            multimail : false,
            multiselectWidth: 30,
            editurl: null,
            search: false,
            caption: "",
            hidegrid: true,
            hiddengrid: false,
            postData: {},
            userData: {},
            treeGrid : false,
            treeGridModel : 'nested',
            treeReader : {},
            treeANode : -1,
            ExpandColumn: null,
            tree_root_level : 0,
            prmNames: {
                page:"page",
                rows:"rows",
                sort: "sidx",
                order: "sord",
                search:"_search",
                nd:"nd",
                id:"id",
                oper:"oper",
                editoper:"edit",
                addoper:"add",
                deloper:"del",
                subgridid:"id",
                npage: null,
                totalrows:"totalrows"
            },
            forceFit : false,
            gridstate : "visible",
            cellEdit: false,
            cellsubmit: "remote",
            nv:0,
            loadui: "enable",
            toolbar: [false,""],
            scroll: false,
            deselectAfterSort : true,
            scrollrows : false,
            autowidth: false,
            scrollOffset : 18,
            cellLayout: 5,
            subGridWidth: 20,
            gridview: true,
            rownumWidth: 35,
            rownumbers : true,
            pagerpos: 'center',
            recordpos: 'right',
            footerrow : false,
            userDataOnFooter : false,
            hoverrows : true,
            viewsortcols : [false,'vertical',true],
            resizeclass : '',
            autoencode : false,
            remapColumns : [],
            ajaxGridOptions :{},
            direction : "ltr",
            toppager: false,
            headertitles: false,
            scrollTimeout: 40,
            data : [],
            _index : {},
            grouping : false,
            groupingView : {
                groupField:[],
                groupOrder:[],
                groupText:[],
                groupColumnShow:[],
                groupSummary:[],
                showSummaryOnHide: false,
                sortitems:[],
                sortnames:[],
                summary:[],
                summaryval:[],
                plusicon: '',
                minusicon: '',
                displayField: [],
                groupSummaryPos:[],
                formatDisplayField : [],
                _locgr : false
            },
            ignoreCase : true,
            cmTemplate : {},
            idPrefix : "",
            multiSort :  false,
            minColWidth : 33,
            scrollPopUp : false,
            scrollTopOffset: 0, // pixel
            scrollLeftOffset : "100%", //percent
            scrollMaxBuffer : 0,
            storeNavOptions: false,
            regional :  "en",
            styleUI : "jQueryUI",
            responsive : false,
            restoreCellonFail : true,
            colFilters : {},
            colMenu : false
        };

        $scope.mycity = '北京';
        $scope.Cities = [{ id: 1, name: '北京' }, { id: 2, name: '上海' }, { id: 3, name: '广州' }];



        App.initAjax();

        __core.init($rootScope);

        initJQGrid('#customProptable');
        initDBPropJqGrid();
        _handleHeight($rootScope);




    });
    $scope.customAddPropBtn = function(){
        console.log('点击了了customAddPropBtn');
        var target = $('#customProptable');
        target.addRowData( $scope.id,{});
        target.editRow( $scope.id);
        $scope.id++;




    }
    $scope.customSavePropBtn = function(){
        console.log(`${new Date().getTime()}===>点击了customSavePropBtn事件`);
        const target = $('#customProptable');
        for(var i = 0 ; i < $scope.id;i++){
            target.saveRow(i+1);
        }

    }

    $scope.customDeleltePropBtn = function(){
        const target = $('#customProptable');
       var selrow =  target.jqGrid("getGridParam","selrow");
       target.delRowData(selrow);
    }
    $scope.clearPropBtn = function () {
        const target = $('#customProptable');
        for(var i = 0 ; i < $scope.id;i++){
            target.delRowData(i+1);
        }
    }

    $scope.getRowDatas = function(){
        console.log(`${new Date().getTime()}===>点击了getRowDatas事件`)
        const target = $('#customProptable');

        console.log(   target.getRowData())
    }

    function _handleHeight($rootScope){
        if(!$rootScope){return;}
        if($('.page-container').height()+68 > $(window).height() ){
            console.log('有滚动条')
            $rootScope.settings.layout.pageNoScoll = false;
        }else{
            console.log(`当前的正高度高度为：${$('.page-container').height()+68} 小于页面的高度${$(window).height()}`)
            $rootScope.settings.layout.pageNoScoll = true;
        }

    }
    function initJQGrid(selector){
        const mydata={
            page:1,
            total:1,
            records:10,
            rows:[
                
            ]};
        var str = JSON.stringify(mydata);
        console.log('加载jqgrid插件');
        $(selector).jqGrid({
            dataType:'local',
            styleUI:'Bootstrap',
            colModel:[
                {name:'db',index:'db',label:'数据库',sortable:false,align:'center',editurl:true},
                {name:'table',index:'table',label:'表名称',sortable:false,align:'center',editurl:true},
                {name:'field',index:'field',label:'字段',sortable:false,align:'center',editurl:true},
                {name:'index',index:'index',label:'数据库映射',sortable:false,align:'center',editable :true},
                {name:'name',index:'name',align:'center',sortable:false,label:'页面映射',editable :true},  //sortable是该字段是否排序
                {name:'width',index:'width',sortable:false,label:'宽度',align:'center',editable :true},
                {name:'align',index:'align',sortable:false,label:'位置',align:'center',editable :true},
                {name:'sortable',index:'sortable',sortable:false,label:'是否排序',align:'center',editable :false}  //colModel两个最主要就是
            ],
            viewrecords:true,
            rowNum:15,
            //autoHeight:true,
            rowList:[15,20,25,30],
            editurl:'clientArray',

            width:925,
            rownumbers:true,


            pager:selector+'_pager',
            sortable:false,

        });

        $(selector)[0].addJSONData(mydata);

        $(selector).jqGrid('sortableRows', {
            items : '.jqgrow:not(.unsortable)'
        });
        //$(selector).setLabel('rn','序号',['width:"100px"']);



    }

    //初始化jqgrid
    function initDBPropJqGrid(){
        let     mydata=
             []
        $('#DBProptable').jqGrid({
            dataType:'local',
            styleUI:'Bootstrap',
            viewrecords:false,

            width:925,
            colModel:[

                {name:'db',index:'db',label:'数据库',sortable:false,align:'center',editurl:true},
                {name:'table',index:'table',label:'表名称',sortable:false,align:'center',editurl:true},
                {name:'field',index:'field',label:'字段',sortable:false,align:'center',editurl:true},
                {name:'index',index:'index',label:'数据库映射',sortable:false,align:'center',editable :true},
                {name:'name',index:'name',align:'center',sortable:false,label:'页面映射',editable :true},  //sortable是该字段是否排序
                {name:'width',index:'width',sortable:false,label:'宽度',align:'center',editable :true},
                {name:'align',index:'align',sortable:false,label:'位置',align:'center',editable :true},
                {name:'sortable',index:'sortable',sortable:false,label:'是否排序',align:'center',editable :false}  //colModel两个最主要就是
            ],
            sortable:false,
            pager:'#DBProptable_pager',
            sortname: 'name',
            loadonce: true,
            grouping:true,
            groupingView : {
                groupField : ['db','table'],
                groupColumnShow : [true,true],
                groupText:['<b>{0} - {1} Item(s)</b>']
            }

        })
        $('#DBProptable').jqGrid('sortableRows', {
            items : '.jqgrow:not(.unsortable)'
        });
        $('#DBProptable')[0].addJSONData(mydata)
    }










});
