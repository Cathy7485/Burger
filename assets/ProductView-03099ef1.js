import{_ as l,e as p,r as i,o as _,c as h,b as r,a as t,t as o,w as u,F as m,f as g}from"./index-e101f8e1.js";import{P as f}from"./PageBanner-bb813abc.js";import{c as v}from"./cartStore-0a344452.js";import"./sweetalert2.all-65fa2a94.js";const{VITE_URL:w,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"kc777",BASE_URL:"/Burger/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{product:{},pageTitle:{title:"產品內容"}}},components:{PageBanner:f},methods:{getProduct(){const n=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel}),{id:e}=this.$route.params;this.$http.get(`${w}api/${b}/product/${e}`).then(c=>{this.product=c.data.product,this.isLoading=!1,n.hide()}).catch(c=>{this.$swal({title:c.response.data.message,icon:"error",showConfirmButton:!1})})},...p(v,["addToCart"])},mounted(){this.getProduct()}},x={id:"page-content",class:"container vl-parent",ref:"formContainer"},C={id:"product-page",class:"row"},P={class:"col-lg-6 col-md-6"},k={class:"img"},B=["src","alt"],V={class:"col-lg-6 col-md-6"},E={class:"info"},y={class:"badge text-bg-success"},L={class:"title"},R={class:"price"},A=t("hr",null,null,-1),D={class:"description"},I={class:"d-flex flex-row"},N=t("div",{class:"d-block me-2",style:{"min-width":"90px","white-space":"nowrap"}}," 產品描述： ",-1),U={class:"d-block"},S={class:"content"},$={class:"d-flex flex-row"},F=t("div",{class:"d-block me-2",style:{"min-width":"90px","white-space":"nowrap"}}," 產品成分： ",-1),H={class:"d-block"},O={class:"buttons"};function M(n,e,c,j,s,q){const a=i("PageBanner"),d=i("RouterLink");return _(),h(m,null,[r(a,{pageTitle:s.pageTitle},null,8,["pageTitle"]),t("section",x,[t("div",C,[t("div",P,[t("div",k,[t("img",{src:s.product.imageUrl,alt:s.product.title},null,8,B)])]),t("div",V,[t("div",E,[t("span",y,o(s.product.category),1),t("div",L,o(s.product.title),1),t("div",R,"NT "+o(s.product.price),1),A,t("div",D,[t("div",I,[N,t("div",U,o(s.product.description),1)])]),t("div",S,[t("div",$,[F,t("div",H,o(s.product.content),1)])]),t("div",O,[t("button",{class:"btn btn-primary me-3",type:"button",onClick:e[0]||(e[0]=()=>n.addToCart(s.product.id))}," 加入購物車 "),r(d,{to:"/products",class:"btn btn-outline-secondary"},{default:u(()=>[g("回菜單列表")]),_:1})])])])])],512)],64)}const Q=l(T,[["render",M]]);export{Q as default};