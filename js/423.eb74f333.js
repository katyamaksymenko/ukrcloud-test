"use strict";(self["webpackChunkukrcloud_test"]=self["webpackChunkukrcloud_test"]||[]).push([[423],{6423:function(e,o,t){t.r(o),t.d(o,{default:function(){return h}});var i=t(6768),r=t(4232);const s={key:0},n={key:0},u=["src"],l={key:2},a={key:1};function v(e,o,t,v,c,d){return c.movie?((0,i.uX)(),(0,i.CE)("div",s,[c.movie.Title?((0,i.uX)(),(0,i.CE)("h1",n,(0,r.v_)(c.movie.Title),1)):(0,i.Q3)("",!0),c.movie.Poster?((0,i.uX)(),(0,i.CE)("img",{key:1,src:c.movie.Poster,alt:"Movie Poster"},null,8,u)):(0,i.Q3)("",!0),c.movie.Plot?((0,i.uX)(),(0,i.CE)("p",l,(0,r.v_)(c.movie.Plot),1)):(0,i.Q3)("",!0)])):((0,i.uX)(),(0,i.CE)("div",a,o[0]||(o[0]=[(0,i.Lk)("p",null,"Loading movie details...",-1)])))}var c=t(4373),d={name:"MovieDetails",data(){return{movie:null,Title:"",Poster:"",Plot:""}},created(){const e=this.$route.params.id;e?(0,c.A)(`https://www.omdbapi.com/?apikey=52fc80df&i=${e}`).then((({data:e})=>{this.movie=e})).catch((e=>{console.error("Error fetching movie details:",e)})):console.error("No movie ID provided!")}},m=t(1241);const k=(0,m.A)(d,[["render",v]]);var h=k}}]);
//# sourceMappingURL=423.eb74f333.js.map