import{_ as d,A as p,e as _,r as h,o as a,c as n,b as m,a as t,F as i,B as u,t as c}from"./index-e101f8e1.js";import{P as g}from"./PageBanner-bb813abc.js";import{c as f}from"./cartStore-0a344452.js";import"./sweetalert2.all-65fa2a94.js";const{VITE_URL:T,VITE_PATH:C}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"kc777",BASE_URL:"/Burger/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{products:[],pageTitle:{title:"線上點餐"}}},components:{RouterLink:p,PageBanner:g},methods:{getProducts(){const o=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel});this.$route.params,this.$http.get(`${T}api/${C}/products/all`).then(s=>{this.products=s.data.products,this.isLoading=!1,o.hide()}).catch(s=>{this.$swal({title:s.response.data.message,icon:"error",showConfirmButton:!1})})},..._(f,["addToCart"])},mounted(){this.getProducts()}},B={id:"page-content",class:"container vl-parent",ref:"formContainer"},v={id:"order-list",class:"row"},$={class:"img"},E=["src","alt"],k={class:"text-center mb-4"},V={class:"title"},L={class:"price"},b=["onClick"];function w(o,s,x,A,r,R){const l=h("PageBanner");return a(),n(i,null,[m(l,{pageTitle:r.pageTitle},null,8,["pageTitle"]),t("section",B,[t("div",v,[(a(!0),n(i,null,u(r.products,e=>(a(),n("div",{class:"order-item col-xl-3 col-lg-4 col-sm-6 gy-4",key:e.id},[t("div",$,[t("img",{src:e.imageUrl,width:"100",alt:e.title},null,8,E)]),t("div",k,[t("div",V,c(e.title),1),t("span",L,"NT "+c(e.price),1)]),t("button",{type:"button",class:"order-btn",onClick:()=>o.addToCart(e.id)}," 加入購物車 ",8,b)]))),128))])],512)],64)}const N=d(P,[["render",w]]);export{N as default};