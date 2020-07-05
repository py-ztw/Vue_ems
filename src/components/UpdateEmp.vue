<template>
    <div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
              Update
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id:
								</td>
								<td valign="middle" align="left">
									{{$route.params.id}}
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="empname" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="pic"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary"  v-model="salary"  />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									Gender:
								</td>
								<td valign="middle" align="left">
									男
									<input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="gender=0"/>
									女
									<input type="radio" class="inputgri" name="sex" value="f" @click="gender=1"/>
								</td>
							</tr>
						</table>
						<p>
							<el-button type="success" @click="addnew">提交修改</el-button>
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
        name: "Update",
        data(){
          return{
            emp_id:"",
            empname:"",
            img:"",
            salary:"",
            gender:"",
          }
        },
      methods:{
          update(){
            let emp_id = this.$route.params.id;
            this.$axios.get("http://127.0.0.1:8000/ems/emp/"+`${emp_id}`+"/").then(res=>{
              this.empname = res.data.results.empname;
              this.pic = ("http://127.0.0.1:8000"+res.data.results.pic);
              this.salary = res.data.results.salary;
              this.gender= res.data.results.gender;
              console.log(this.pic)
            }).catch(error=>{

            })
          },
          addnew(){
            let formData = new FormData();
            formData.append("empname",this.empname);
            formData.append("pic",this.$refs.pic.files[0]);
            formData.append("salary",this.salary);
            formData.append("gender",this.gender);
            this.$axios({
            url:"http://127.0.0.1:8000/ems/emp/" + this.$route.params.id+"/",
            method:"put",
            data:formData,
            headers:{
              'content-type':'multipart/form-data'
            }
            }).then(res =>{
              console.log(res.data);
               this.$message('修改成功');
               this.$router.push("/home")
            }).catch(error =>{
              this.$message.error("修改失败")
            })
        }

      },
      created() {
          let username = localStorage.getItem("username");
          if (username){
          }else{
            this.$router.push("/login")
          }
          this.update();
      }
    }
</script>

<style scoped>

</style>
