(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{836:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(531),l=o.n(r),d=o(440);o(533);n.a.component("downloadCsv",l.a);var c={data:function(){return{search:"",tableReport:!1,heading:"Reports",headers:[{text:"Top",value:"top"},{text:"Left",value:"left"},{text:"Right",value:"right"},{text:"Bottom",value:"bottom"},{text:"Front",value:"front"},{text:"Back",value:"back"}],patientDetails:[{id:551,name:"Patient 1",top:"15, 20, 30",left:"15, 20, 30",right:"15, 20, 30",bottom:"15, 120, 30",front:"15, 20, 30",back:"15, 20, 30"},{id:550,name:"Patient 2",top:"15, 20, 30",left:"15, 20, 30",right:"15, 20, 30",bottom:"15, 20, 30",front:"15, 20, 30",back:"15, 20, 30"}]}},methods:{searchPatient:function(){this.tableReport=!0},downloadPDF:function(){var t=new d.default({orientation:"portrait",unit:"in",format:"letter"});t.setFontSize(16).text(this.heading,.5,1),t.setLineWidth(.01).line(.5,1.1,8,1.1),t.autoTable({columns:[{title:"ID",dataKey:"id"},{title:"Name",dataKey:"name"},{title:"Top",dataKey:"top"},{title:"Left",dataKey:"left"},{title:"Right",dataKey:"right"},{title:"Bottom",dataKey:"bottom"},{title:"Front",dataKey:"front"},{title:"Back",dataKey:"back"}],body:this.patientDetails,margin:{left:.5,top:1.25}}),t.save("reports.pdf")}}},v=o(40),m=o(46),h=o.n(m),f=o(424),w=o(140),y=o(108),k=o(320),x=o(834),D=o(321),_=o(833),P=o(830),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{staticClass:"mt-0",attrs:{align:"center"}},[o("v-col",{attrs:{sm:"12",md:"10"}},[o("v-text-field",{attrs:{label:"Please enter the Patient ID","full-width":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-col",{attrs:{sm:"12",md:"2"}},[o("v-btn",{attrs:{color:"primary",elevation:"2",block:"",raised:""},on:{click:t.searchPatient}},[t._v("Search")])],1)],1),t._v(" "),o("v-card",{directives:[{name:"show",rawName:"v-show",value:t.tableReport,expression:"tableReport"}]},[o("v-card-title",[t._v("\n      Reports\n      "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"ml-3 my-3",attrs:{depressed:"",color:"primary",elevation:"2"}},[o("download-csv",{attrs:{data:t.patientDetails}},[t._v("\n          Download CSV\n        ")])],1),t._v(" "),o("v-btn",{staticClass:"ml-3 my-3",attrs:{depressed:"",color:"primary",elevation:"2"},on:{click:t.downloadPDF}},[t._v("\n        Download PDF")])],1),t._v(" "),o("v-data-table",{ref:"content",attrs:{headers:t.headers,items:t.patientDetails,search:t.search}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:w.a,VCardTitle:y.b,VCol:k.a,VDataTable:x.a,VRow:D.a,VSpacer:_.a,VTextField:P.a})}}]);