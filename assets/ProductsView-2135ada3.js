import{h as _,i as m,_ as g,A as h,f,m as P,r as n,o as a,c as r,b as c,d as t,F as i,B as T,t as B,w as V,g as E}from"./index-920fa7f4.js";import{P as k}from"./PageBanner-b7a7972f.js";import{s as v}from"./sweetalert2.all-cd0140b6.js";const{VITE_URL:w,VITE_PATH:L}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"kc777",BASE_URL:"/Burger/",MODE:"production",DEV:!1,PROD:!0},l=_("productStore",{state:()=>({products:[]}),actions:{getProducts(){const o=`${w}api/${L}/products/all`;m.get(o).then(s=>{this.products=s.data.products}).catch(s=>{v.fire({icon:"error",title:`${s.response.data.message}`,showConfirmButton:!1})})}}}),R={data(){return{pageTitle:{title:"餐點菜單"},fullPage:!1}},components:{RouterLink:h,PageBanner:k},methods:{...f(l,["getProducts"])},computed:{...P(l,["products"])},mounted(){this.getProducts()}},$={id:"page-content",class:"container vl-parent",ref:"formContainer"},x={class:"products-list row"},S={class:"product-page-item"},A={class:"img"},b=["src","alt"],C={class:"title"},D={class:"mb-2"},I=t("br",null,null,-1);function U(o,s,N,y,d,F){const u=n("PageBanner"),p=n("RouterLink");return a(),r(i,null,[c(u,{pageTitle:d.pageTitle},null,8,["pageTitle"]),t("section",$,[t("ul",x,[(a(!0),r(i,null,T(o.products,e=>(a(),r("li",{class:"col-lg-4 col-md-6",key:e.id},[t("div",S,[t("div",A,[t("img",{src:e.imageUrl,width:"200",alt:e.title},null,8,b)]),t("div",C,[t("span",D,B(e.title),1),I]),c(p,{to:`/product/${e.id}`,class:"more-btn"},{default:V(()=>[E("more")]),_:2},1032,["to"])])]))),128))])],512)],64)}const j=g(R,[["render",U]]);export{j as default};
