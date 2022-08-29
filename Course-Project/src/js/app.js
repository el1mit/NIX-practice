import * as flsFunctions from './modules/functions.js';
import * as products from './modules/loadProducts.js';

//Getting products data from file===============================
import data from './products.json';
//==============================================================

//Check webp support============================================
flsFunctions.isWebp();
//==============================================================

//Spoller=======================================================
flsFunctions.Spoller();
//==============================================================

//PopUp=========================================================
flsFunctions.PopUp()
//==============================================================

//Tabs==========================================================
flsFunctions.Tabs()
//==============================================================

//Slider/========================================================
flsFunctions.SliderImages()
flsFunctions.SliderRecommendations()
//==============================================================

//Breadcrumbs===================================================
flsFunctions.BreadCrumbs();
//==============================================================

//Loading products from json file===============================
$('document').ready(products.productsLoad(data));
//==============================================================
