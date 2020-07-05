<template>
  <div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br />
              <a href="#" @click="back">安全退出</a>
						</p>
					</div>
					<div id="topheader">
						<h1 id="title">
							<a href="#">Home</a>
						</h1>
					</div>
					<div id="navigation">
					</div>
				</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						Welcome!{{loginuser}}
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>
								ID
							</td>
							<td>
								Name
							</td>
							<td>
								Photo
							</td>
							<td>
								Salary
							</td>
							<td>
								Gender
							</td>
							<td>
								Operation
							</td>
						</tr>
						<tr class="row1" v-for="(emp,index) in emp_liist" :key="emp.id">
							<td>{{emp.id}}</td>
							<td>{{emp.empname}}</td>
							<td><img :src="emp.pic" style="height: 60px;"></td>
							<td>{{emp.salary}}</td>
							<td> {{emp.empgender}}</td>
							<td><a href="#" @click="del_emp(emp.id)">delete emp</a>&nbsp;<a href="#" ><router-link :to="'/update/'+emp.id">update emp</router-link></a></td>
						</tr>
					</table>
					<p>
						<input type="button" class="button" value="Add Employee" @click="addemp"/>
					</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return{
            loginuser:"",
            emp_liist:[],
          }
        },
        created(){
            let user = localStorage.getItem("username")
            console.log(user)
          console.log(1)
            if (user){
              this.$message.success("登录成功");
              this.loginuser=user
            } else{
              this.$router.push("/login")
            }
            this.get_all()
        },
      methods:{
          del_emp(id){
              this.$axios.delete("http://127.0.0.1:8000/ems/emp/"+`${id}`+"/").then(res=>{
            }).catch(error=>{
              this.$message.error("删除失败")
            });location.reload();this.$message.success("删除成功")


          },
          addemp(){
              this.$router.push("/addemp")
          },
          back(){
            if(confirm("确认要退出吗？")){
                localStorage.removeItem("username");
            this.$router.push("/login")
            }
          },
        get_all(){
             this.$axios({
              url:"http://127.0.0.1:8000/ems/emp/",
              method:"get",
            }).then(res=>{
              console.log(res.data);
              if(res.data.message){
                this.emp_liist=res.data.results
              }
            }).catch(error=>{
              this.$message.error("用户填写错误")
            })
          }

      }

    }
</script>

<style scoped>

</style>
