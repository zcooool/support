import dva from 'dva';
import './main-dev.html';

import React ,{Component} from 'react';


// 1. Initialize
const app = dva();

// 2. Plugins
app.model(require("./models/IndexPageModel"));
// app.model(require("./models/jqgridTable"));
// app.model();
// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');


/**
 * 1. 这里的router的路由设置，又初始化的dva设置
 */
