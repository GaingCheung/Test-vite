// import _ from 'lodash'
// import lodashES from 'lodash-es'
import './index.css'

import './componentA.js'
import './componentB.js'

import indexModuleLess from './index.module.less'

import '@/test'

const father = document.getElementById('father');
const son = document.getElementById('son');

father.className = indexModuleLess.father;
son.className = indexModuleLess.son;

fetch('/api/getList', {
    method: 'get',
}).then((data) => {console.log('data', data)}).catch(err => {console.log(err)})

import './test.ts'

// console.log('////import.meta.env', import.meta.env)

// console.log('lodash', _)