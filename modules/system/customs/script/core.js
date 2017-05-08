/**
 * Created by zhankun on 2017/5/7.
 */
var __core = window.__core = function($) {
    if (!$) {
        return
    }
    // 处理jqgrid插件
    var _handleJQGrid = function () {

        $('div[data-component=jqGrid]').each(function () {
            var _table_th = $(this).find('li');
            console.log(_table_th);
            //let pMoxId = $(this).data('p-mox-id');辨识是那个项目，那么模块的组件模型
            var _id = $(this).data('id');
            var _table_option = $(this).data();

            console.log(_table_option);
            let _colModel = [] ;
            if(_table_th.length>0){
                console.log('获取到或有列')
                _table_th.each(function(){
                    var _d = $(this).data();
                    _colModel.push(_d);
                });
            }else{

            }
            var pager = $(this).find('div[data-component=jqGrid-pager]').data();

            _table_option.colModel=_colModel;
            // _table_option.pager = `${_id}_pager`
            var p = $.extend({
                url: "",
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
                datatype: "xml",
                mtype: "GET",
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
                rownumbers : false,
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
            }, _table_option);
            console.log(p);



            $(this).empty()
            $(this).append(`<table id='${_id}' class="table table-bordered table-hover">
            
</table><div id='${_id}_pager'></div>`);



            $(`#${_id}`).jqGrid(p)
            let _start_time = new Date().getTime();
            let _end_time = new Date().getTime();
            console.log(`完成花费时间:${_end_time - _start_time}`);

        });

    }



    return {
        init: function ($rootScope) {
            _handleJQGrid();
        },


    }
}(window.$);