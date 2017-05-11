/**
 * Created by zhankun on 2017/5/9.
 */
var nedb = function(){


    const {remote} = require('electron');

    const {dbconfig} = remote.getGlobal('configpath');

    const NEDB = remote.require('nedb')
    const db = {};
    db.dbconfig = new NEDB({filename:dbconfig});
    db.dbconfig.loadDatabase(function (err) {
        console.log(err)
    })




    getConns = function () {

        const promise = new Promise(function(resolve, reject) {
            db.find({},(err, docs)=>{
                resolve(docs)})
        }).then(()=>{console.log(docs)})


        db.dbconfig.find({}, function (err, docs) {
            console.log(docs)
        });
    }


}