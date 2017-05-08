angular.module('ylApp').controller('JqGridGenController', function($rootScope, $scope, $http, $timeout) {
    //添加一行的事件



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


        App.initAjax();

        __core.init($rootScope);

        initJQGrid('#customProptable');

        _handleHeight($rootScope);
        // _hanleWidth('#customProtable');


    });
    $scope.customAddPropBtn = function(){
        console.log('点击了了customAddPropBtn');
        var target = $('#customProptable');
        target.addRowData(1,[{}]);
        target.editRow(1);

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
                {name:'id',index:'id',label:'数据库映射',sortable:false,align:'center',editable :true},
                {name:'name',index:'name',align:'center',sortable:false,label:'页面映射',editable :true},  //sortable是该字段是否排序
                {name:'width',index:'width',sortable:false,label:'宽度',align:'center',editable :true},
                {name:'align',index:'align',sortable:false,label:'位置',align:'center',editable :true},
                {name:'sortable',index:'sortable',sortable:false,label:'是否排序',align:'center',editable :true}  //colModel两个最主要就是
            ],
            viewrecords:true,
            rowNum:15,
            //autoHeight:true,
            rowList:[15,20,25,30],

            width:931,
            autowidth:true,
            rownumbers:true,
            gridview:true,
            pager:selector+'_pager',
            sortable:false
        });

        $(selector)[0].addJSONData(mydata);

        $(selector).jqGrid('sortableRows', {
            items : '.jqgrow:not(.unsortable)'
        });
        //$(selector).setLabel('rn','序号',['width:"100px"']);



    }









});
