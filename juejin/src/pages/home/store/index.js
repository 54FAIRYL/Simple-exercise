import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export { reducer, actionCreators, constants }

//index.js曝光store中所有的js文件，一次导出

// 一次导入
// import {reducer, actionCreators, constants } from  '../.../index'